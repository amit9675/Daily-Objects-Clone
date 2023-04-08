import NewArrivalNavbar from "./NewArrivalNavbar";
import axios from "axios";
import { useEffect,useState } from "react";
// import Cart from "../../../../src/Pages/cart/Cart";
import Cart from "../../Pages/cart/Cart";
// import SingleItem from "../../../../src/Components/NewArrivalComp/SingleItem";
import SingleItem from "./SingleItem";
import { SimpleGrid } from "@chakra-ui/react";
const getTheLaptop = () => {
  return axios.get(`https://dailyobjects-f06p.onrender.com/NewArrivals`);
};
export default function AllArrivals() {
  const [laptopCover, setLaptopCover] = useState([]);
  useEffect(() => {
    getTheLaptop().then((res) => setLaptopCover(res.data));
  }, []);
  return (
    <div>
      <NewArrivalNavbar />
      <SimpleGrid
        columns={[1, 2, 4, 4]}
        w={"100%"}
        gap={"30px"}
        // border={"2px solid red"}
        margin={"auto"}>

        {laptopCover?.map((el) => (
          <div class=" mx-auto w-6/8 ">
            <SingleItem key={el.id} {...el} brand={`All`} />
          </div>
        ))}
      {/* </div> */}
        </SimpleGrid>
    </div>
  );
}
