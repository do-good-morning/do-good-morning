import React from "react";
import MapChart from "../components/mapCmp/MapChart";

const Map = ({ moveSectionDown }) => {
  return (
    <>
      <div className="section group-section">
        <div className="map">
          <div className="mapChart">
            <MapChart moveSectionDown={moveSectionDown} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Map;
