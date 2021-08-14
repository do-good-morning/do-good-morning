import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import PostingSection from "../components/homeCmp/PostingSection";
import "./css/Home.css";

const HomeTmp = () => (
  <ReactFullpage
    licenseKey={"9FA666D8-21AD41DE-A43A3694-078F442A"}
    scrollingSpeed={1000}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <PostingSection
            moveSectionDown={() => fullpageApi.moveSectionDown()}
          />
          <div className="section map-section">
            <p>Section 2</p>
          </div>
          <div className="section group-section">
            <p>Section 3</p>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default HomeTmp;
