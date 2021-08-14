import React from "react";
import MapChart from "../components/mapCmp/MapChart";
const Map = ({ moveSectionDown }) => {
  return (
    <>
      <div className="section group-section">
        <MapChart moveSectionDown={moveSectionDown} />
      </div>
    </>
  );
};

export default Map;
