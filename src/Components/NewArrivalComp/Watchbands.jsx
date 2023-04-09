import SingleItem from "./SingleItem";
import NewArrivalNavbar from "./NewArrivalNavbar";
import axios from "axios";
import { useEffect,useState } from "react";
import { SimpleGrid } from "@chakra-ui/react";
// import SIngleItemMap from "../Laptop Macbook Sleeves/GroupSingle/SIngleItemMap";
// import SIngleItemMap from "../Laptop Macbook Sleeves/GroupSingle/SIngleItemMap";
const getTheLaptop = () => {
  return axios.get(`https://dailyobjects-f06p.onrender.com/watchbands`);
};
export default function Watchbands() {
  const [laptopCover, setLaptopCover] = useState([]);
  const[loading,setLoading] = useState(false)

  useEffect(() => {
    setLoading(prev =>!prev)
    getTheLaptop().then((res) => {
      setLoading(prev =>!prev)

      setLaptopCover(res.data)});
  }, []);

  console.log(laptopCover)

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

        {laptopCover?.map((el) => (
          <div class=" mx-auto w-6/8">
            <SingleItem key={el.id} {...el} brand={`watchbands`} />
          </div>
        ))}
      {/* </div> */}
        </SimpleGrid>
 )
 
 }
      
    </div>
  );
}