import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useNavigate, useParams } from "react-router-dom";
const Detail = () => {
  const { id } = useParams("");
  // console.log(id);
  const [userdata, setUserData] = React.useState([]);
  const navigate = useNavigate();

  const getDatabyid = async () => {
    // console.log(name, email, age, mobile, work, address, desc);
    // console.log(getData.name);
    const res = await fetch("http://localhost:6060/api/getuserbyid/" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    if (res.status === 400 || !result) {
      alert("error");
    } else {
      setUserData(result);
    }
  };
  const deleteData = async (id) => {
    // console.log(id);
    const res = await fetch("http://localhost:6060/api/deleteuser/" + id, {
      method: "delete",
    });
    // console.log(res);
    navigate("/home");
  };
  React.useEffect(() => {
    getDatabyid();
  }, []);
  return (
    <div className="container mt-3">
      <h1 style={{ fontWeight: 500 }}> Welcome to Ankit bhatt</h1>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <div className="add.btn  text-end mt-4">
            <button
              className="btn btn-primary "
              onClick={() => navigate(`/edit/${userdata._id}`)}
            >
              <i className="fa fa-pencil" aria-hidden="true"></i>
            </button>
            <button
              className="btn btn-danger mx-2"
              onClick={() => deleteData(userdata._id)}
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
          <div className="row">
            <div className="left_view col-lg-6 col-md-6 col-12">
              <img src="/profile.png" style={{ width: 50 }} alt="profile" />
              <h3 className="mt-3">
                {" "}
                Name:<span style={{ fontWeight: 400 }}>{userdata.name}</span>
              </h3>
              <h3 className="mt-3">
                Age:<span style={{ fontWeight: 400 }}>{userdata.age}</span>
              </h3>
              <p className="mt-2">
                <i className="fa fa-envelope" aria-hidden="true"></i> Email :{" "}
                <span style={{ fontWeight: 400 }}> {userdata.email}</span>
              </p>
              <p className="mt-2">
                <i className="fa fa-briefcase" aria-hidden="true"></i> work :
                <span style={{ fontWeight: 400 }}>{userdata.work}</span>
              </p>
            </div>

            <div className="right_view col-lg-6 col-md-6 col-12 ">
              <p>
                <i className="fa fa-mobile" aria-hidden="true"></i> mobile :{" "}
                <span style={{ fontWeight: 400 }}>{userdata.mobile}</span>
              </p>
              <p>
                {" "}
                <i className="fa fa-map-marker" aria-hidden="true"></i> Location
                : <span style={{ fontWeight: 400 }}> {userdata.address}</span>
              </p>
              <p>
                {" "}
                <i className="fa fa-book" aria-hidden="true"></i>
                Description:{" "}
                <span style={{ fontWeight: 400 }}> {userdata.desc}</span>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Detail;
