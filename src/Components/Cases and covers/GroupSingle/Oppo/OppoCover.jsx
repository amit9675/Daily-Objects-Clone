import axios from "axios";
import React, { useEffect, useState } from "react";
// import PhoneCoverItem from "../CoverItem/PhoneCoverItem";
// import ImageEveryPage from "../../ImageEveryPage";
import PhoneCoverItem from "../CoverItem/PhoneCoverItem";
import ImageEveryPage from "../../ImageEveryPage";
import Navbar from "../../../Navbar";
import { SimpleGrid } from "@chakra-ui/react";

const getCovers = () => {
  return axios(`https://dailyobjects-f06p.onrender.com/oppoCovers`);
};
export default function OppoCover() {
  const [phoneCover, setPhoneCovers] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading((prev) => !prev);
    getCovers().then((res) => {
      setLoading((prev) => !prev);
      setPhoneCovers(res.data);
    });
  }, []);
  return (
    <div>
      <Navbar />
      <div>
        <ImageEveryPage name={`PHONE COVERS`} />
      </div>
      {loading ? (
        <div style={{ margin: "auto" }}>
          <img
            width={"100%"}
            src="https://i.ibb.co/7gCTcqc/Daily-Hub-gif.gif"
            alt="error"
          />
        </div>
      ) : (
        <SimpleGrid
          columns={[1, 2, 4, 4]}
          w={"100%"}
          gap={"30px"}
          border={"2px solid red"}
          margin={"auto"}
        >
          {phoneCover?.map((el) => (
            <PhoneCoverItem key={el.id} brand={`oppoCovers`} {...el} />
          ))}
          {/* </div> */}
        </SimpleGrid>
      )}
    </div>
  );
}
