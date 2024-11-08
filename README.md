# React Table

- A Headless [Fully customizable] UI support,
- Table with Sorting, Pagination, Filtering
- Alternative: Grid library of Material UI

## Create a new React project

```
npm create-vite@latest
npm install
npm run dev
```

## Install react-table

```
npm i react-table
```

**1. Create columns for react Table**

```
const columns = [
  {
    Header: "ID",
    accessor: "id",
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
```

- columns is an array of objects, With Header adn accessor
- Header is similar to Heading and accessor is like id
- Header will show in UI
- To access any data of a particular column, we will use accessor

**2. Create table**

```
const table = useTable({
    columns,
    data,
  });
```

Rather using table, we will destructure

```
const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });
```

**3.Pass props to <table>, <thead>, <th>, <tr>**

```
<table {...getTableProps()}>
    <thead>
      {headerGroups.map((headerGroup) => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column) => (
            <th {...column.getHeaderProps()}>{column.render("Header")}</th>
          ))}
        </tr>
      ))}
    </thead>
</table>
```

**4.Pass props to <tbody>, <tr>, <td>**

```
<tbody {...getTableBodyProps()}>
    {rows.map((row) => {
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
```

**5.Add useSortBy in useTable() for Sorting**

```
import { useSortBy, useTable } from "react-table";

const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy
    );

<th {...column.getHeaderProps(column.getSortByToggleProps())}>
      {column.render("Header")}
      {column.isSorted && (
        <span>{column.isSortedDesc ? " 🔽" : " 🔼"}</span>
      )}
</th>
```

**5.Add usePagination in useTable() for Pagination**

```

```

- Instead of `rows` destructure `page`
  **Destructure:**
- `nextPage` and `previousPage`
- `canPreviousPage` and `canNextPage` for disabled buttons
- `state:{pageIndex}` and `pageCount` for showing the current page state and total number of page
- `gotoPage` to go on a particular page
- Be default, it shows 10 rows per page
- add `initialState: { pageSize: 5 }` in useTable() to show 5 rows per page
- In initialState we can also add initial pageIndex