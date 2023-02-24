import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleItem from "./SingleItem";
import NewArrivalNavbar from "./NewArrivalNavbar";
import SIngleItemMap from "../Laptop Macbook Sleeves/GroupSingle/SIngleItemMap";


const getTheCharger = () => {
  return axios.get(`http://localhost:8080/Desks`);
};

export default function ChargingSolution() {
  const [charging, setCharging] = useState([]);
  useEffect(() => {
    getTheCharger().then((res) => setCharging(res.data));
  }, []);
  console.log(charging)
  return (
    <div>
      <NewArrivalNavbar />
      <div   class="grid md:grid-cols-3 sm:grid-cols-1 lg:grid-cols-5 " style={{
         
          width: "95%",
          margin: "auto",
          gap: "20px",
        }}>
        {charging?.map((el) => (
          <div class=" mx-auto ">
            <SingleItem key={el.id} {...el} brand={`Desks`} />
          </div>
        ))}
      </div>
    </div>
  );
}
