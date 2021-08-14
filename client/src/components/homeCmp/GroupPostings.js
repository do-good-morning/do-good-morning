import React, { useEffect, useState, useContext } from "react";
import MainPosting from "../groupCmp/MainPosting";
import SubPosting from "../groupCmp/SubPosting";
import axios from "axios";
import { DoGoodMorningContext } from "../App";

import "./css/GroupPostings.css";

const GroupPostings = () => {
  const { selectedCountry } = useContext(DoGoodMorningContext);
  const [imageList, setImageList] = useState([]);

  const api = process.env.REACT_APP_API_URL;

  // 포스팅 섹션
  useEffect(() => {
    (async function GetPostingImages() {
      axios.get(`${api}/landing`).then((response) => {
        setImageList(response.data.images);
      });
      return;
    })();
  }, []);

  return (
    <>
      <div className="section groupPostings-section">
        <div className="groupPosting__inner">
          <MainPosting data={imageList[0]} />
          <div className="sub-posting__group">
            <ul>
              <li className="group-line1">
                <SubPosting data={imageList[1]} />
                <SubPosting data={imageList[2]} />
              </li>
              <li className="group-line2">
                <SubPosting data={imageList[3]} />
                <SubPosting data={imageList[4]} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default GroupPostings;
