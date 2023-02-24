import axios from "axios";
import React, { useEffect, useState } from "react";
import SIngleItemMap from "../Laptop Macbook Sleeves/GroupSingle/SIngleItemMap";
import NewArrivalNavbar from "./NewArrivalNavbar";
import SingleItem from "./SingleItem";
const getTheLaptop = () => {
  return axios.get(`http://localhost:8080/pedalback`);
};
export default function PedalBackPack() {
  const [laptopCover, setLaptopCover] = useState([]);
  useEffect(() => {
    getTheLaptop().then((res) => setLaptopCover(res.data));
  }, []);
  return (
    <div>
      <NewArrivalNavbar />
      <div  class="grid md:grid-cols-3 sm:grid-cols-1 lg:grid-cols-5 " style={{
          
          width: "95%",
          margin: "auto",
          gap: "20px",
        }}>
        {laptopCover?.map((el) => (
          <div class=" mx-auto ">
            <SingleItem key={el.id} {...el} brand={`pedalback`} />
          </div>
        ))}
      </div>
    </div>
  );
}
