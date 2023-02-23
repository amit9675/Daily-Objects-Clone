import axios from "axios";
import React, { useEffect, useState } from "react";
import SIngleItemMap from "../Laptop Macbook Sleeves/GroupSingle/SIngleItemMap";
import NewArrivalNavbar from "./NewArrivalNavbar";
import SingleItem from "./SingleItem";

const getTheCharger = () => {
  return axios.get(` http://localhost:8080/messengerBags `);
};
export default function ChargingSolution() {
  const [charging, setCharging] = useState([]);
  useEffect(() => {
    getTheCharger().then((res) => setCharging(res.data));
  }, []);
  return (
    <div>
      <NewArrivalNavbar />
      <div  class="grid md:grid-cols-3 sm:grid-cols-1 lg:grid-cols-5 " style={{

          width: "95%",
          margin: "auto",
          gap: "20px",
        }}>
        {charging?.map((el) => (
          <div class=" mx-auto ">
            <SingleItem key={el.id} {...el} brand={`messengerBags`} />
          </div>
        ))}
      </div>
    </div>
  );
}
