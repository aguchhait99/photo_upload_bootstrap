import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddData = () => {
  const initialState = {
    name: "",
    city: "",
    email: "",
    phone: "",
    photo: "",
  };

  const navigate = useNavigate()

  const [user, setUser] = useState(initialState);
  const [img, setImg] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const onSubmit = (data) => {
    data.preventDefault();
    const Url = "https://tureappservar.onrender.com/user";
    let formData = new FormData();
    formData.append("name", user.name);
    formData.append("email", user.email);
    formData.append("phone", user.phone);
    formData.append("city", user.city);
    formData.append("photo", img);
    axios.post(Url, formData);
    toast.success("Data Added");
    navigate("/showdata")
  };
  return (
    <>
      <div
        style={{
          width: "60%",
          margin: "auto",
          padding: 30,
          boxShadow: "0px 0px 30px rgba(0,0,0,1)",
          marginTop: "50px",
        }}
      >
        <form onSubmit={onSubmit}>
          <div class="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={handleChange}
              value={user.name}
              name="name"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={handleChange}
              value={user.email}
              name="email"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Phone</label>
            <input
              type="number"
              class="form-control"
              id="exampleInputPassword1"
              onChange={handleChange}
              value={user.phone}
              name="phone"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">City</label>
            <input
              type="city"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={handleChange}
              value={user.city}
              name="city"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Photo</label>
            <input
              type="file"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setImg(e.target.files[0])}
              accept="image/*"
              name="img"
            />
            {img !== "" && img !== undefined && img !== null ? (
              <img
                style={{ height: "180px" }}
                src={URL.createObjectURL(img)}
                alt=""
                className="upload-img"
              />
            ) : (
              <>{img === "" && <p>Drag or drop content here</p>}</>
            )}
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddData;
