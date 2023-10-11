import axios from "axios";
import React, { useEffect, useState } from "react";
const imgUrl = "https://tureappservar.onrender.com";

const ShowData = () => {
  const [user, setUser] = useState([]);
  const BaseUrl = "https://tureappservar.onrender.com";

  const getData = async () => {
    const response = await axios.get(`${BaseUrl}/alluser`);
    setUser(response?.data?.data);
    console.log("Data", response?.data);
  };

  

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div class="container" style={{marginTop: "25px"}}>
        <div class="row">
          {user?.map((element, key) => {
            return (
              <>
                <div class="col-sm">
                  <div class="card" style={{width: "18rem"}}>
                    <img src={`${imgUrl}/${element.photo}`} class="card-img-top" alt="No Photo Found" width="300px" height="350px" />
                    <div class="card-body">
                      <h5 class="card-title">Name: {element.name}</h5>
                      <p class="card-text">
                        Email: {element.email}
                      </p>
                      <p class="card-text">
                        Phone: {element.phone}
                      </p>
                      <p class="card-text">
                        City: {element.city}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ShowData;
