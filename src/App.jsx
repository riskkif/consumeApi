import React from "react";
import TableGets from "./pages/tablesGets";
import TablePuts from "./pages/tablesPuts";
import { Link } from "react-router-dom";
import Button from "./components/Elements/Button";

const App = () => {
  return (
    <>
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="m-2">
        <Button variant="btn-primary">
          <Link className="text-decoration-none text-white" to="/get">
          Data Tabel Get
          </Link>
        </Button>
      </div>
      <div className="">
        <Button variant="btn-primary">
          <Link className="text-decoration-none text-white" to="/put">
          Data Tabel Put
          </Link>
        </Button>
      </div>
    </div>
    </>
  )
};

export default App;