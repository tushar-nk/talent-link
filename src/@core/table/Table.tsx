import React, { useEffect, useState, ChangeEvent } from 'react'
import {
  useSortBy,
  useTable,
  useRowSelect,
  useExpanded,
  TableInstance,
  UseSortByInstanceProps,
  UseRowSelectInstanceProps,
  UsePaginationInstanceProps
} from 'react-table'
import Image from 'next/image'
import IconService from 'src/@core/utils/Icons'
import { Pagination, Button, Paper, TableContainer } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

import { useDispatch } from 'react-redux'

export type TableInstanceWithHooks<T extends object> = TableInstance<T> &
  UseRowSelectInstanceProps<T> &
  UsePaginationInstanceProps<T> &
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
  dispatchFunction?: any
}) {
  const data = React.useMemo(() => [...props?.data], [props?.data])
  const columns = React.useMemo(() => [...props?.columns], [props?.columns])
  const initialState = React.useMemo(() => initialStatee, [])
  const [pages, setPages] = useState<number>(0)
  const [rowsPerPage, setRowsPerPage] = useState<number>(10)
  const { pagination = true } = props

  const handleChangePage = (event: unknown, newPage: number) => {
    setPages(newPage - 1) // Subtract 1 to start page index from 0
  }

  const pageCount = 10 // Set the pageCount to 50

  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, page, rows, selectedFlatRows } = useTable(
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

  const dispatch = useDispatch()

  useEffect(() => {
    props?.dispatchFunction && dispatch(props?.dispatchFunction(`?page=1`))
  }, [dispatch])

  // const pageNumbers = Array.from({ length: props?.dataPage?.total_pages }, (_, index) => index + 1)

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
          e.preventDefault()
          setIndexSelected(prev => prev + 1)
        } else if (e.keyCode === 85) {
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
        <TableContainer component={Paper} className='table-container'>
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
                      <div style={{ display: 'flex', alignItems: 'center'}}>
                        <div style={{ whiteSpace: 'nowrap' }}>{column.render('Header')}</div>
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
            <tbody {...getTableBodyProps()}>
              {rows?.slice(pages * rowsPerPage, pages * rowsPerPage + rowsPerPage)?.map((row: any, i: any) => {
              // {(page || rows)?.map((row: any, i: any)=> {
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
        </TableContainer>
        {pagination && (
          <div className='pagination-container'>
            <Button
              onClick={() => {
                if (pages > 0) {
                  setPages(pages - 1)
                }
              }}
              disabled={pages === 0}
              color='primary'
              variant='outlined'
              size='small'
              style={{ border: 0 }}
              role='button'
            >
              <ArrowBackIosIcon fontSize='small' style={{ width: '15px' }} /> Prev
            </Button>
            <Pagination
              count={pageCount}
              page={pages + 1} // Add 1 to display the current page correctly
              onChange={handleChangePage}
              color='primary'
              hideNextButton
              hidePrevButton
              siblingCount={0}
            />
            <Button
              onClick={() => {
                if (pages < pageCount - 1) {
                  setPages(pages + 1)
                }
              }}
              disabled={pages === pageCount - 1}
              color='primary'
              variant='outlined'
              size='small'
              style={{ border: 0 }}
              role='button'
            >
              Next <ArrowForwardIosIcon fontSize='small' style={{ width: '15px' }} />
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
