import { usePagination, useSortBy, useTable } from "react-table";
import { data } from "./utils/data";

const columns = [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Gender",
    accessor: "gender",
  },
  {
    Header: "Salary",
    accessor: "salary",
  },
];

const App = () => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    state: { pageIndex },
    pageCount,
    gotoPage,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 15, pageIndex: 2 },
    },
    useSortBy,
    usePagination
  );

  return (
    <div className="container">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  {column.isSorted && (
                    <span>{column.isSortedDesc ? " 🔽" : " 🔼"}</span>
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
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="btn-container">
        <button disabled={pageIndex === 0} onClick={() => gotoPage(0)}>
          First
        </button>

        <button disabled={!canPreviousPage} onClick={previousPage}>
          Prev
        </button>

        <span>
          {pageIndex + 1} of {pageCount}
        </span>

        <button disabled={!canNextPage} onClick={nextPage}>
          Next
        </button>

        <button
          disabled={pageIndex >= pageCount - 1}
          onClick={() => gotoPage(pageCount - 1)}
        >
          Last
        </button>
      </div>
    </div>
  );
};

export default App;
