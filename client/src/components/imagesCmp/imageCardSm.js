import React, { useEffect, useState, useContext } from "react";
import { DoGoodMorningContext } from "../App";
import axios from "axios";

export default function MainPage() {
  const [images, setImages] = useState([]);
  const { selectedCountry } = useContext(DoGoodMorningContext);
  const userID = localStorage.getItem("username");

  // 메인페이지 접속시 모든 아이템 출력
  useEffect(() => {
    (async function mainItem() {
      axios
        .get(`${process.env.REACT_APP_API_URL}/${selectedCountry}`)
        .then(async (response) => {
          setImages(response.data);
        });
      return;
    })();
  }, []);

  const imageList = images.map(({ data }) => (
    <div>
      <p>이름 </p>
      <img src={data.url} alt="" />
    </div>
  ));

  return <div>{imageList}</div>;
}
