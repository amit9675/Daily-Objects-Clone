

import axios from "axios";
import React, { useEffect, useState } from "react";
import ImageEveryPage from "../Cases and covers/ImageEveryPage";

// import ImageEveryPage from "../ImageEveryPage";
import Navbar from "../Navbar";
import Individual from "./Individual";
import IndividualForSaleI from "./IndividualForSale";
import { SimpleGrid } from "@chakra-ui/react";

const getCovers = () => {
  return axios(`https://dailyobjects-f06p.onrender.com/sale`);
};
export default function Sale() {
  const [phoneCover, setPhoneCovers] = useState([]);
  useEffect(() => {
    getCovers().then((res) => setPhoneCovers(res.data));
  }, []);

  return (
    <div>
    {/* <Navbar/> */}
      <div>
        <IndividualForSaleI name={`SALE`} />
      </div>
      <SimpleGrid
        columns={[1, 2, 4, 4]}
        w={"100%"}
        gap={"30px"}
        // border={"2px solid red"}
        margin={"auto"}>

        {phoneCover?.map((el) => (
          <Individual key={el.id} brand={`sale`} {...el} />
        ))}
      {/* </div> */}
        </SimpleGrid>
    </div>
  );
}
