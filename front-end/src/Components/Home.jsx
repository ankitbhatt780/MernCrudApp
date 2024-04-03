import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Button from "@mui/material/Button";
import { adddata, deldata, updatedata } from "./Context/ContextProvider";
function Home() {
  const [udata, setUdata] = useContext(adddata);
  const [updata, setUPdata] = useContext(updatedata);
  const [dltdata, setDLTdata] = useContext(deldata);


  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    // console.log(name, email, age, mobile, work, address, desc);
    // console.log(getData.name);
    const res = await fetch("http://localhost:6060/api/getdata", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    if (res.status === 400 || !result) {
      alert("error");
    } else {
      setData(result);
    }
  };

  const deleteData = async (id) => {
    // console.log(id);
    const res = await fetch("http://localhost:6060/api/deleteuser/" + id, {
      method: "delete",
    });
    setDLTdata(res)
    // console.log(res);
    getData();
  };
  return (
    <>
      {
        udata ?
          <>
            <div
              type="alert"
              className="alert alert-success alert-dismissible fade show"
              role="alert"
            >
              <strong>Success!</strong> user Added successfull
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
          </>
          : ""
      }
      {
        updata ?
          <>
            <div
              className="alert alert-success alert-dismissible fade show"
              role="alert"
            >
              <strong>Success!</strong> user Update successfull
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
          </>
          : ""
      }
      {
        dltdata ?
          <>
            <div
              className="alert alert-success alert-dismissible fade show"
              role="alert"
            >
              <strong>Success!</strong> user deleted successfull
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
          </>
          : ""
      }
      <div className="mt-5 ">
        <div className="container">
          <div className="add_btn mt-2">
            <NavLink to="/register" className="btn btn-primary mb-2">
              {" "}
              Add Data
            </NavLink>
          </div>
          <table className="table ">
            <thead>
              <tr className="table-dark">
                <th scope="col">s.no</th>
                <th scope="col">UserName</th>
                <th scope="col">email</th>
                <th scope="col">age</th>
                <th scope="col">Mobile</th>
                <th scope="col">Address</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((data, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.age}</td>
                    <td>{data.mobile}</td>
                    <td>{data.address}</td>

                    <td>
                      <Button
                        variant="contained"
                        color="success"
                        onClick={() => navigate("/view/" + data._id)}
                      >
                        <VisibilityIcon />
                      </Button>
                    </td>
                    <td>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => navigate(`/edit/${data._id}`)}
                      >
                        <EditIcon />
                      </Button>
                    </td>
                    <td>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => deleteData(data._id)}
                      >
                        <DeleteForeverIcon />
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Home;
