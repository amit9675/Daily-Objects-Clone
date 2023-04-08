import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar";
import PhoneCoverItem from "../GroupSingle/CoverItem/PhoneCoverItem";
import ImageEveryPage from "../ImageEveryPage";
import { SimpleGrid } from "@chakra-ui/react";

const getCovers = () => {
  return axios(`  https://dailyobjects-f06p.onrender.com/oneplusCovers`);
};
export default function OneplusCover() {
  const [phoneCover, setPhoneCovers] = useState([]);
  useEffect(() => {
    getCovers().then((res) => setPhoneCovers(res.data));
  }, []);

  return (
    <div>
    
      <div>
        <ImageEveryPage name={`PHONE COVERS`} />
      </div>
      <SimpleGrid
        columns={[1, 2, 4, 4]}
        w={"100%"}
        gap={"30px"}
        // border={"2px solid red"}
        margin={"auto"}>

        {phoneCover?.map((el) => (
          <PhoneCoverItem key={el.id} brand={`oneplusCovers`} {...el} />
        ))}
      {/* </div> */}
        </SimpleGrid>
    </div>
  );
}
