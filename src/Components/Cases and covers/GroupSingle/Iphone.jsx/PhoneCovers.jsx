import axios from "axios";
import React, { useEffect, useState } from "react";
import PhoneCoverItem from "../CoverItem/PhoneCoverItem";
import ImageEveryPage from "../../ImageEveryPage";
import Navbar from "../../../Navbar";
import { Box, SimpleGrid } from "@chakra-ui/react";
// import PhoneCoverItem from "./CoverItem/PhoneCoverItem";
const getCovers = () => {
  return axios(`https://dailyobjects-f06p.onrender.com/iphoneCovers`);
};
export default function PhoneCovers() {
  const [phoneCover, setPhoneCovers] = useState([]);
  useEffect(() => {
    getCovers().then((res) => setPhoneCovers(res.data));
  }, []);
  return (
    <div style={{width:"100%" }} >
      {/* <Navbar /> */}
      <div>
        <ImageEveryPage name={`PHONE COVERS`} />
      </div>
      <SimpleGrid
        columns={[1, 2, 3, 4]}
        // w={"100%"}
        gap={"30px"}
        m={"auto"}
        // minChildWidth={"25%"}
        // style={{
        //   // display: "grid",
        //   // gridTemplateColumns: "repeat(4,1fr)",
        //   width: "95%",
        //   margin: "auto",
        //   gap: "20px",
        // }}
      >
        {phoneCover?.map((el) => (
          <PhoneCoverItem key={el.id} brand={`iphoneCovers`} {...el} />
        ))}
      </SimpleGrid>
    </div>
  );
}
