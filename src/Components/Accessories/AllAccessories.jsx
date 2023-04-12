
import axios from "axios";
import React, { useEffect, useState } from "react";
import ImageEveryPage from "../Cases and covers/ImageEveryPage";
import Individual from "./Individual";

const getCovers = () => {
  return axios(`https://dailyobjects-f06p.onrender.com/allaccesories`);
};
export default function AllAccessories() {
  const [phoneCover, setPhoneCovers] = useState([]);
  useEffect(() => {
    getCovers().then((res) => setPhoneCovers(res.data));
  }, []);

  return (
    <div>
    {/* <Navbar/> */}
      <div>
        <ImageEveryPage name={`ALL ACCESSORIES`} />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          width: "95%",
          margin: "auto",
          gap: "20px",
        }}
      >
      
        {phoneCover?.map((el) => (
          <Individual key={el.id} brand={`allaccesories`} {...el} />
        ))}
      </div>
    </div>
  );
}
