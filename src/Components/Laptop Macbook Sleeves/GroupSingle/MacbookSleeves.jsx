
import axios from "axios";
import React, { useEffect, useState } from "react";
import LaptopCoverNavbar from "./LaptopCoverNavbar";
import SIngleItemMap from "./SIngleItemMap";
const getTheLaptop = () => {
  return axios.get(`https://dailyobjects-f06p.onrender.com/macbookCases`);
};
export default function MacbookSleeves() {
  const [laptopCover, setLaptopCover] = useState([]);
  useEffect(() => {
    getTheLaptop().then((res) => setLaptopCover(res.data));
  }, []);
  return (
    <div>
      <LaptopCoverNavbar />
      <div  style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          width: "95%",
          margin: "auto",
          gap: "20px",
        }}>
        {laptopCover?.map((el) => (
          <div>
            <SIngleItemMap key={el.id} {...el} brand={`macbookCases`} />
          </div>
        ))}
      </div>
    </div>
  );
}
