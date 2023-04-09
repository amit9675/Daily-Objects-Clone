import axios from "axios";
import React, { useEffect, useState } from "react";
import PhoneCoverItem from "../CoverItem/PhoneCoverItem";
import ImageEveryPage from "../../ImageEveryPage";
import Navbar from "../../../Navbar";
import { Box, SimpleGrid } from "@chakra-ui/react";
// import PhoneCoverItem from "./CoverItem/PhoneCoverItem";
const getCovers = async() => {
  return await axios(`https://dailyobjects-f06p.onrender.com/iphoneCovers`);
};
export default function PhoneCovers() {
  const [phoneCover, setPhoneCovers] = useState([]);
  const[loading,setLoading] = useState(false)
  useEffect(() => {
    setLoading(prev =>!prev)
    getCovers().then((res) => {
      setLoading(prev => !prev)
      setPhoneCovers(res.data)
    });
  }, []);
  console.log(loading)
  return (
    <div style={{width:"100%" }} >
      {/* <Navbar /> */}
      <div>
        <ImageEveryPage name={`PHONE COVERS`} />
      </div>
      {
        loading ? (
          <div style={{margin:"auto"}}>
          <img width={"100%"}  src="https://i.ibb.co/7gCTcqc/Daily-Hub-gif.gif" alt="error" />
          </div>
 ) :(
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
        )
      }
     
    </div>
  );
}
