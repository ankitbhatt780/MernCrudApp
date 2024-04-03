import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { updatedata } from "./Context/ContextProvider";

const Update = () => {
  const [updata, setUPdata] = useContext(updatedata);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const [mobile, setMobile] = useState();
  const [work, setWork] = useState();
  const [address, setAddress] = useState();
  const [desc, setDesc] = useState();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getData();
  }, []);

  const UpdateData = async (e) => {
    e.preventDefault();
    // const(name, email, age, mobile, work, address, desc);
    // console.log(getData.name);
    const res = await fetch("http://localhost:6060/api/updateuser/" + id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, age, mobile, work, address, desc }),
    });
    const result = await res.json();
    console.log(result);
    if (res.status === 400 || !result) {
      alert("error");
    } else {
      navigate("/home");
      setUPdata(result);
    }
  };

  const getData = async () => {
    const result = await fetch("http://localhost:6060/api/getuserbyid/" + id, {
      method: "GET",
      headers: { "Content-Type": "Application/json" },
    });
    let data = await result.json();
    if (data) {
      setName(data.name);
      setEmail(data.email);
      setAge(data.age);
      setMobile(data.mobile);
      setWork(data.work);
      setAddress(data.address);
      setDesc(data.desc);
    }
  };

  return (
    <div className="container">
      <NavLink to="/home">Home</NavLink>
      <form className="mt-2" onSubmit={UpdateData}>
        <div className="row">
          <div className="mb-3  col-lg-6 col-md-6 col-12">
            <label for="exampleInputEmail1" className="form-label">
              Name
            </label>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" className="form-label">
              age
            </label>
            <input
              value={age}
              onChange={(e) => setAge(e.target.value)}
              name="age"
              type="number"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>{" "}
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" className="form-label">
              mobile
            </label>
            <input
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              name="mobile"
              type="tel"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>{" "}
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" className="form-label">
              work
            </label>
            <input
              value={work}
              onChange={(e) => setWork(e.target.value)}
              name="work"
              type="text"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>{" "}
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" className="form-label">
              Address
            </label>
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              name="Address"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>{" "}
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Description
            </label>
            <textarea
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              name="description"
              className="form-control"
              cols="30"
              rows="5"
              type="text"
            />
          </div>{" "}
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update;
