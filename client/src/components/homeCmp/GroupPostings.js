import React, { useEffect, useState, useContext } from "react";
import MainPosting from "../groupCmp/MainPosting";
import SubPosting from "../groupCmp/SubPosting";
import axios from "axios";
import { DoGoodMorningContext } from "../App";

import "./css/GroupPostings.css";

const GroupPostings = () => {
  const { selectedCountry } = useContext(DoGoodMorningContext);
  const [imageList, setImageList] = useState([]);
  const [postingList, setPostingList] = useState("");
  const api = process.env.REACT_APP_API_URL;

  // 포스팅 섹션
  useEffect(() => {
    (async function GetPostingImages() {
      axios
        .post(`${api}/main-image`, {
          ImageCountry: selectedCountry,
          ImageCity: "",
        })
        .then((response) => {
          // console.log(response.data.Images);
          setImageList(response.data.Images);
        });
      return;
    })();
  }, []);
  console.log("imagelist first", imageList);

  if (imageList.length) {
    console.log(imageList["0"]);
    return (
      <>
        <div className="section groupPostings-section">
          <div className="groupPosting__inner">
            <MainPosting data={imageList["0"]} />
            <div className="sub-posting__group">
              <ul>
                <li className="group-line1">
                  <SubPosting />
                  <SubPosting />
                </li>
                <li className="group-line2">
                  <SubPosting />
                  <SubPosting />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  } else {
  }
  return (
    <>
      <div className="section groupPostings-section">
        <div className="groupPosting__inner">
          <MainPosting />
          <div className="sub-posting__group">
            <ul>
              <li className="group-line1">
                <SubPosting />
                <SubPosting />
              </li>
              <li className="group-line2">
                <SubPosting />
                <SubPosting />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default GroupPostings;
