import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";
import {
  useTable,
  Column,
  TableOptions,
  useSortBy,
  usePagination,
} from "react-table";

function TableHOC<T extends Object>(
  columns: Column<T>[],
  data: T[],

  showPagination: boolean
) {
  return function HOC() {
    const options: TableOptions<T> = {
      columns,
      data,
      initialState: {
        pageSize: 6,
      },
    };

    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      page,
      prepareRow,
      nextPage,
      previousPage,
      canNextPage,
      canPreviousPage,
      pageCount,
      state: { pageIndex },
    } = useTable(options, useSortBy, usePagination);

    return (
      <div className="">
        <table className="w-full border-collapse" {...getTableProps()}>
          <thead className="p-2 font-bold text-left">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    className=" align-middle  text-[#0000009e] text-lg font-bold py-8 px-4 "
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    {column.render("Header")}
                    {column.isSorted && (
                      <span className="">
                        {""}
                        {column.isSortedDesc ? (
                          <AiOutlineSortDescending />
                        ) : (
                          <AiOutlineSortAscending />
                        )}
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);

              return (
                <tr
                  className="shadow-[0px_1px_1px_rgba(0,0,0,0.093)]"
                  {...row.getRowProps()}
                >
                  {row.cells.map((cell) => (
                    <td
                      className="p-4 text-left align-middle "
                      {...cell.getCellProps()}
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
        {showPagination && (
          <div className="flex items-center justify-center gap-4 p-2">
            <button
              className="py-2 px-4 border-none outline-none rounded-xl cursor-pointer disabled:cursor-not-allowed disabled:bg-[rgba(0,115,255,0.1)] bg-[rgba(0,115,255)] text-white "
              disabled={!canPreviousPage}
              onClick={previousPage}
            >
              Prev
            </button>
            <span>{`${pageIndex + 1} page of ${pageCount}`}</span>
            <button
              disabled={!canNextPage}
              className="py-2 px-4 border-none outline-none rounded-xl cursor-pointer disabled:cursor-not-allowed disabled:bg-[rgba(0,115,255,0.1)] bg-[rgba(0,115,255)] text-white "
              onClick={nextPage}
            >
              Next
            </button>
          </div>
        )}
      </div>
    );
  };
}

export default TableHOC;
