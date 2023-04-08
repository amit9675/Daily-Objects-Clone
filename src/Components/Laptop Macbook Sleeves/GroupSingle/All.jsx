import axios from "axios";
import React, { useEffect, useState } from "react";
import LaptopCoverNavbar from "./LaptopCoverNavbar";
import SIngleItemMap from "./SIngleItemMap";
import { SimpleGrid } from "@chakra-ui/react";
const getTheLaptop = () => {
  return axios.get(`https://dailyobjects-f06p.onrender.com/laptopCovers`);
};
export default function All() {
  const [laptopCover, setLaptopCover] = useState([]);
  useEffect(() => {
    getTheLaptop().then((res) => setLaptopCover(res.data));
  }, []);
  return (
    <div>
      <LaptopCoverNavbar />
      <SimpleGrid
        columns={[1, 2, 4, 4]}
        w={"100%"}
        gap={"30px"}
        // border={"2px solid red"}
        margin={"auto"}>

        {laptopCover?.map((el) => (
          <div>
            <SIngleItemMap key={el.id} {...el} brand={`laptopCovers`} />
          </div>
        ))}
      {/* </div> */}
        </SimpleGrid>
    </div>
  );
}
