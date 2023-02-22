import { Button, Heading } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function PhoneCoverItem({ text, id, price, src, strike,brand }) {
  const [isThere, setisThere] = useState([]);
  const postItem = async (id) => {
    let result1 = await axios.get(`http://localhost:8080/${brand}/${id}`);
    const newObj = result1.data;
    let result2 = await axios.post(
      ` http://localhost:8080/WishlistiphoneCovers`,
      newObj
    );
    // return axios.post
  };
  const handleClick = (id) => {
    // addTowishList();
    setisThere([...isThere, id]);
    postItem(id);
    console.log(id);
  };

  return (
    <div style={{ textAlign: "start" }}>
      <div style={{ backgroundColor: "rgb(247,247,247)" }}>
        <img src={src} alt="" />
        <Button
          isDisabled={isThere.includes(id)}
          size={"lg"}
          onClick={() => handleClick(id)}
        >
          {isThere.includes(id) ? `Added To The list` : `❤️Add To Wishlist`}
        </Button>
      </div>
      <br />
      <Heading as={"h4"} size={"xs"}>
        {text}
      </Heading>
      <h1>
        {price} <del>{strike}</del>{" "}
      </h1>
      <Heading size={"xs"} color="red">
        BUY 1 GET 1 FREE
      </Heading>
    </div>
  );
}
