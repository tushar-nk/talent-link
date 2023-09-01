import React from "react";
import {
  useSortBy,
  useTable,
  useRowSelect,
  usePagination,
  useExpanded,
  UsePaginationInstanceProps,
  TableInstance,
  UseSortByInstanceProps,
  UsePaginationState,
} from "react-table";

export type TableInstanceWithHooks<T extends object> = TableInstance<T> &
  UsePaginationInstanceProps<T> &
  UseSortByInstanceProps<T> & {
    state: UsePaginationState<T>;
  };

const initialStatee: any = {
  pageSize: 10,
  pageIndex: 0,
};

export default function Table(props: {
  collapseComponent?: (arg0: any) => any;
  data: any;
  columns: any;
  pagination?: any;
}) {
  const Collapse = (row: any) =>
    props?.collapseComponent && props?.collapseComponent(row);
  const data = React.useMemo(() => [...props.data], [props.data]);
  const columns = React.useMemo(() => [...props.columns], [props.columns]);
  const initialState = React.useMemo(() => initialStatee, []);

  const RowSubComponent = React.useCallback(({ row }: any) => {
    return <Collapse row={row} />;
  }, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    rows,
  } = useTable(
    {
      columns,
      data,
      initialState,
    },
    useSortBy,
    useExpanded,
    props?.pagination && usePagination,
    useRowSelect
  ) as TableInstanceWithHooks<any>;

  return (
    <div className="">
      <div className="consultation_card_box">
        <div className="table-container">
          <div className="table-body-container">
            <table {...getTableProps()} className="table consultation_table">
              <thead>
                {headerGroups?.map((headerGroup: any, i: any) => (
                  <tr
                    key={i}
                    className="consultation_table_head"
                    {...headerGroup.getHeaderGroupProps()}
                  >
                    {headerGroup.headers.map((column: any, i: any) => (
                      <th
                        key={i}
                        className="consultation_table_head_text type-sec"
                        {...column.getHeaderProps([
                          {
                            className: column.className,
                            style: column.style,
                          },
                          column.getSortByToggleProps(),
                        ])}
                      >
                        {column.render("Header")}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody className="" {...getTableBodyProps()}>
                {(page || rows)?.map((row: any, i: any) => {
                  prepareRow(row);

                  return (
                    <React.Fragment key={i}>
                      <tr
                        className={`consultation_table_body_row ${
                          row.isExpanded ? "view open" : "view"
                        }`}
                        {...row.getRowProps()}
                      >
                        {row.cells.map((cell: any, index: any) => {
                          return (
                            <td
                              className={`${
                                cell?.column?.Header == "Case Number"
                                  ? "consultation_table_body_text upload-fileds"
                                  : "consultation_table_body_text"
                              }`}
                              key={index}
                              {...cell.getCellProps()}
                            >
                              {cell.render("Cell")}
                              {cell?.column?.Header == "Case Number" && (
                                <span className="upload-failed case-number-sec">
                                  {" "}
                                  Upload Failed{" "}
                                </span>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                      {row.isExpanded ? (
                        <RowSubComponent row={row.values} />
                      ) : null}
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
