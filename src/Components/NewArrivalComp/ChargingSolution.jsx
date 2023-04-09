import axios from "axios";
import React, { useEffect, useState } from "react";

import SingleItem from "./SingleItem";
import NewArrivalNavbar from "./NewArrivalNavbar";
import { SimpleGrid } from "@chakra-ui/react";
const getTheCharger = () => {
  return axios.get(`https://dailyobjects-f06p.onrender.com/chargingSolution`);
};

export default function ChargingSolution() {
  const [charging, setCharging] = useState([]);
  const[loading,setLoading] = useState(false)

  useEffect(() => {
    setLoading(prev =>!prev)

    getTheCharger().then((res) => {
      setLoading(prev =>!prev)

      setCharging(res.data)});
  }, []);
  // console.log(charging);
  return (
    <div>
      <NewArrivalNavbar />
      { loading ? (
          <div style={{margin:"auto"}}>
          <img width={"100%"}  src="https://i.ibb.co/7gCTcqc/Daily-Hub-gif.gif" alt="error" />
          </div>
 ) : (
  <SimpleGrid
        columns={[1, 2, 4, 4]}
        w={"100%"}
        gap={"30px"}
        // border={"2px solid red"}
        margin={"auto"}>

        {charging?.map((el) => (
          <div class=" mx-auto w-6/8 ">
            <SingleItem key={el.id} {...el} brand={`Desks`} />
          </div>
        ))}
        </SimpleGrid>
 )
 
 }
      
      {/* </div> */}
    </div>
  );
}
