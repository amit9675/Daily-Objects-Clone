
import axios from "axios";
import React, { useEffect, useState } from "react";
import LaptopCoverNavbar from "./LaptopCoverNavbar";
import SIngleItemMap from "./SIngleItemMap";
import { SimpleGrid } from "@chakra-ui/react";
const getTheLaptop = () => {
  return axios.get(`https://dailyobjects-f06p.onrender.com/macbookCases`);
};
export default function MacbookSleeves() {
  const [laptopCover, setLaptopCover] = useState([]);
  const[loading,setLoading] = useState(false)

  useEffect(() => {
    setLoading(prev =>!prev)
    getTheLaptop().then((res) => {
      setLoading(prev =>!prev)

      
      setLaptopCover(res.data)});
  }, []);
  return (
    <div>
      <LaptopCoverNavbar />
       { loading ? (
          <div style={{margin:"auto"}}>
          <img width={"100%"}  src="https://i.ibb.co/7gCTcqc/Daily-Hub-gif.gif" alt="error" />
          </div>
 ) : (
  <SimpleGrid
        columns={[1, 2, 3, 4]}
        w={"100%"}
        gap={"30px"}
        // border={"2px solid red"}
        margin={"auto"}>

        {laptopCover?.map((el) => (
          <div>
            <SIngleItemMap key={el.id} {...el} brand={`macbookCases`} />
          </div>
        ))}
      {/* </div> */}
        </SimpleGrid>
 )
 
 }
    </div>
  );
}
