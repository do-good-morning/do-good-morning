import React, { memo, useEffect, useContext } from "react";
import { DoGoodMorningContext } from "../App";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

function MapChart() {
  const { selectedCountry, setSelectedCountry } =
    useContext(DoGoodMorningContext);

  const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

  const markers = [
    { markerOffset: 15, name: "뉴욕", coordinates: [-68.1193, -16.4897] },
    { markerOffset: 15, name: "LA", coordinates: [-47.8825, -15.7942] },
    { markerOffset: 15, name: "밴쿠버", coordinates: [-70.6693, -33.4489] },
    { markerOffset: 15, name: "시드니", coordinates: [-74.0721, 4.711] },
    { markerOffset: 15, name: "두바이", coordinates: [-78.4678, -0.1807] },
    { markerOffset: -30, name: "브라질시티", coordinates: [-58.1551, 6.8013] },
    {
      markerOffset: -30,
      name: "케이프타운",
      coordinates: [-57.5759, -25.2637],
    },
    { markerOffset: 15, name: "베이징", coordinates: [-55.2038, 5.852] },
    { markerOffset: 15, name: "런던", coordinates: [-56.1645, -34.9011] },
    { markerOffset: 15, name: "로마", coordinates: [-66.9036, 10.4806] },
    { markerOffset: 15, name: "모스크바", coordinates: [-77.0428, -12.0464] },
    { markerOffset: 15, name: "서울", coordinates: [126.59, 37.33] },
  ];

  useEffect(() => {}, []);
  const mapMarker = markers.map(({ name, coordinates, markerOffset }) => (
    <Marker key={name} coordinates={coordinates}>
      <div width="100px" style={{ backgroundColor: "white" }}></div>
      <text
        textAnchor="middle"
        y={markerOffset}
        style={{ fontFamily: "system-ui", fill: "#5D5A6D", fontSize: "10px" }}
      >
        {name}
      </text>
    </Marker>
  ));

  const handleOnClick = (e) => {
    const name = e.target.name;
    console.log(typeof name);
  };

  console.log(selectedCountry);
  return (
    <>
      <div className="background" style={{ backgroundColor: "black" }}>
        <ComposableMap data-tip="" projectionConfig={{ scale: 120 }}>
          <ZoomableGroup>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    name={geo.properties}
                    onClick={(e) => {
                      handleOnClick(e);
                    }}
                    style={{
                      default: {
                        fill: "rgba(254, 254, 254, 0.8)",
                        outline: "none",
                      },
                      hover: {
                        fill: "#F53",
                        outline: "none",
                      },
                      pressed: {
                        fill: "#E42",
                        outline: "none",
                      },
                    }}
                  />
                ))
              }
            </Geographies>
            {mapMarker}
          </ZoomableGroup>
        </ComposableMap>
      </div>
    </>
  );
}

export default memo(MapChart);
