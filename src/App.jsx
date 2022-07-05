import axios from "axios";
import "./App.css";

//hooks
import { useState, useEffect } from "react";

//components
import Table from "./components/Table";

function App() {
  const [products, setProducts] = useState([]);
  const [columns, setColumns] = useState([]);

  const fetchProducts = async () => {
    const response = await axios.get("https://dummyjson.com/products");
    const { data } = response;
    handleColumns(data.products[0]);
    setProducts(data.products);
  };

  const handleColumns = (data) => {
    const columns = Object.keys(data).map((column) => ({
      Header: column,
      accessor: column,
    }));

    setColumns(columns);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <h1 className="mt-4 font-semibold text-xl text-red-900">selamlar</h1>
      <Table data={products} columns={columns} />
    </div>
  );
}

export default App;
