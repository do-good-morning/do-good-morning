import React from "react";
import MainPosting from "../groupCmp/MainPosting";
import SubPosting from "../groupCmp/SubPosting";
import "./css/GroupPostings.css";

const GroupPostings = () => {
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
