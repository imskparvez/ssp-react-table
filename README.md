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

**5.Add pugings in useTable() for Sorting**

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
