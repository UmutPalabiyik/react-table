import axios from "axios";
import "./App.css";
import styled from "styled-components";

//hooks
import { useState, useEffect } from "react";

//components
import Table from "./components/Table";
import MuiTable from "./components/MuiTable";

function App() {
  const [products, setProducts] = useState([]);
  const [columns, setColumns] = useState([]);

  const Styles = styled.div`
    padding: 1rem;

    table {
      border-spacing: 0;
      border: 1px solid black;

      tr {
        :last-child {
          td {
            border-bottom: 0;
          }
        }
      }

      th,
      td {
        margin: 0;
        padding: 0.5rem;
        border-bottom: 1px solid black;
        border-right: 1px solid black;

        :last-child {
          border-right: 0;
        }
      }
    }
  `;

  const fetchProducts = async () => {
    const response = await axios.get("https://dummyjson.com/products");
    const { data } = response;
    handleColumns(data.products[0]);
    setProducts(data.products);
  };

  const handleColumns = (data) => {
    const columns = Object.keys(data)
      .filter((column) => column !== "images")
      .map((column) => {
        if (column === "thumbnail") {
          return {
            Header: column,
            accessor: column,
            maxWidth: true,
            Cell: ({ value }) => (
              <img style={{ height: "100px", width: "100%" }} src={value} />
            ),
          };
        } else {
          return {
            Header: column,
            accessor: column,
          };
        }
      });

    setColumns(columns);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Styles>
      {/*<Table columns={columns} data={products} /> */}
      <MuiTable columns={columns} data={products} />
    </Styles>
  );
}

export default App;
