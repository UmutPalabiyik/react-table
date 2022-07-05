import { useTable } from "react-table";

const Table = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  console.log("getTableProps", getTableProps);
  console.log("getTableBodyProps", getTableBodyProps);
  console.log("headerGroups", headerGroups);
  console.log("rows", rows);
  console.log("prepareRow", prepareRow);

  return <div>selamlarfadasdff</div>;
};

export default Table;
