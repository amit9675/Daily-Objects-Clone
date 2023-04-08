import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleItem from "./SingleItem";
import NewArrivalNavbar from "./NewArrivalNavbar";
import { SimpleGrid } from "@chakra-ui/react";

const getTheCharger = () => {
  return axios.get(`https://dailyobjects-f06p.onrender.com/Desks`);
};

export default function Desks() {
  const [charging, setCharging] = useState([]);
  useEffect(() => {
    getTheCharger().then((res) => setCharging(res.data));
  }, []);
  console.log(charging)
  return (
    <div>
      <NewArrivalNavbar />
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
      {/* </div> */}
        </SimpleGrid>
    </div>
  );
}
