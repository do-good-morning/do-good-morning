/* REACT */
import React from "react";

/* FULL PAGE */
import ReactFullpage from "@fullpage/react-fullpage";

/* COMPONENTS */
import PostingSection from "../components/homeCmp/PostingSection";
import Map from "./Map";

/* CSS */
import "./css/Home.css";

const HomeTmp = () => (
  <ReactFullpage
    licenseKey={"9FA666D8-21AD41DE-A43A3694-078F442A"}
    scrollingSpeed={900}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          {/* SECTION 1 : 포스팅 섹션 */}
          <PostingSection
            moveSectionDown={() => fullpageApi.moveSectionDown()}
          />
          {/* SECTION 2 : 지도 섹션 */}
          <Map />
          {/* SECTION 3 : 포스팅 그룹 섹션 */}
          <div className="section group-section">
            <p>Section 3</p>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default HomeTmp;
