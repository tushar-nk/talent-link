import React, { useEffect, useState, ChangeEvent } from 'react'
import {
  useSortBy,
  useTable,
  useRowSelect,
  useExpanded,
  TableInstance,
  UseSortByInstanceProps,
  UseRowSelectInstanceProps
} from 'react-table'
import Image from 'next/image'
import IconService from 'src/@core/utils/Icons'
import { Pagination } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

export type TableInstanceWithHooks<T extends object> = TableInstance<T> &
  UseRowSelectInstanceProps<T> &
  UseSortByInstanceProps<T>

const initialStatee: any = {
  pageSize: 20,
  pageIndex: 0
}

export default function Table(props: {
  collapseComponent?: (arg0: any) => any
  data: any
  columns: any
  isStatus?: boolean
  dataPage?: any
  pagination?: boolean
}) {
  const data = React.useMemo(() => [...props?.data], [props?.data])
  const columns = React.useMemo(() => [...props?.columns], [props?.columns])
  const initialState = React.useMemo(() => initialStatee, [])
  const [page, setPage] = useState<number>(0)
  const [rowsPerPage, setRowsPerPage] = useState<number>(10)
  const { pagination = true } = props

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage - 1) // Subtract 1 to start page index from 0
  }

  const pageCount = 10 // Set the pageCount to 50

  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, rows, selectedFlatRows } = useTable(
    {
      columns,
      data,
      initialState
    },
    useSortBy,
    useExpanded,
    useRowSelect
  ) as TableInstanceWithHooks<any>

  const [selected, setSelected] = useState<any>({})
  const [indexSelected, setIndexSelected] = useState<number>(0)
  const [selectedRowName, setSelectedRowName] = useState<any>('')

  useEffect(() => {
    if (selected && selected.alternate_document_types) {
      setSelectedRowName(selected.alternate_document_types[0])
    }
  }, [selected])

  const updateSelecte = rows.filter(item => {
    if (item?.original?.flags?.do_classify) {
      return item
    }
  })

  useEffect(() => {
    setSelected(updateSelecte[indexSelected])
  }, [indexSelected])

  useEffect(() => {
    selectedFlatRows.map((item: any) => item.toggleRowSelected(false))
    let temp: any = rows.find(res => res.original.page_name == selected?.page_name)
    if (temp) {
      temp.toggleRowSelected(true)
    }
  }, [selected])

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.ctrlKey) {
        if (e.keyCode === 83) {
          // Ctrl + S
          e.preventDefault()
          setIndexSelected(prev => prev + 1)
        } else if (e.keyCode === 85) {
          // Ctrl + u
          e.preventDefault()
          setIndexSelected(prev => prev - 1)
        }
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return function cleanup() {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [indexSelected])

  return (
    <div>
      <div className='flex flex-col data_entry_table'>
        <div className='table-container'>
          <table {...getTableProps()} className='table consultation_table'>
            <thead>
              {headerGroups?.map((headerGroup: any, i: any) => (
                <tr key={i} className='consultation_table_head' {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column: any, i: any) => (
                    <th
                      key={i}
                      className='consultation_table_head_text'
                      {...column.getHeaderProps([
                        {
                          className: column.className,
                          style: column.style
                        },
                        column.sort ? column.getSortByToggleProps() : ''
                      ])}
                    >
                      <div className='flex items-center'>
                        <div className='whitespace-nowrap'>{column.render('Header')}</div>
                        {column?.sort && (
                          <span className='sort-sec mb-1'>
                            {column?.isSorted ? (
                              column.isSortedDesc ? (
                                <Image src={IconService.SortIcon} alt='up' height={20} width={20} />
                              ) : (
                                <Image src={IconService.SortIcon} alt='down' height={20} width={20} />
                              )
                            ) : (
                              <Image src={IconService.SortIcon} alt='updown' height={20} width={20} />
                            )}
                          </span>
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody className='' {...getTableBodyProps()}>
              {rows?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row: any, i: any) => {
                prepareRow(row)
                return (
                  <React.Fragment key={i}>
                    <tr
                      className='consultation_table_body_row'
                      style={{
                        backgroundColor:
                          selectedFlatRows && selectedFlatRows?.find((select: any) => select.id == row.id)
                      }}
                      {...row.getRowProps()}
                    >
                      {row.cells.map((cell: any, index: any) => {
                        return (
                          <td
                            className={`consultation_table_body_text ${
                              cell?.column?.id == 'selection' && 'p-0 text-center'
                            }`}
                            key={index}
                            {...cell.getCellProps()}
                          >
                            {cell.render('Cell')}{' '}
                          </td>
                        )
                      })}
                    </tr>
                  </React.Fragment>
                )
              })}
            </tbody>
          </table>
        </div>
        {pagination && (
          <div
            className='pagination-container'
            style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '8px', marginBottom: '8px' }}
          >
            <Pagination
              count={pageCount}
              page={page + 1} // Add 1 to display current page correctly
              onChange={handleChangePage}
              color='primary'
            />
          </div>
        )}
      </div>
    </div>
  )
}
