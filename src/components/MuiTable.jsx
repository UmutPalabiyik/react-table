// mui
import MaUTable from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

// react-table
import { useTable } from "react-table";

export const MuiTable = ({ columns, data }) => {
  const { getTableProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  console.log("table props ==>", {...getTableProps()})

  return (
    <MaUTable {...getTableProps()}>
      <TableHead >
        {headerGroups.map(headerGroup => (
                <TableRow {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                            <TableCell {...column.getHeaderProps()}  >
                                {column.render('Header')}
                            </TableCell>
                        ))
                    }
                </TableRow>
            ) )
        }
      </TableHead>
    </MaUTable>
  );
};

export default MuiTable;
