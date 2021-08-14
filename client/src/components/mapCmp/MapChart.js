import React, { memo, useEffect, useContext } from "react";
import { DoGoodMorningContext } from "../App";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import "./MapCmp.css";

var timestamp = Date.now();
var date = new Date(timestamp);

console.log("Date: " + date.getHours() + ":" + date.getMinutes());

function MapChart() {
  const { selectedCountry, setSelectedCountry } =
    useContext(DoGoodMorningContext);

  const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

  const markers = [
    { markerOffset: 15, name: "뉴욕, 미국", coordinates: [-73.1551, 43.8013] },
    { markerOffset: 15, name: "LA, 미국", coordinates: [-115.1551, 37.801] },
    {
      markerOffset: 15,
      name: "밴쿠버, 캐나다",
      coordinates: [-115.1551, 55.801],
    },
    {
      markerOffset: 15,
      name: "브라질리아, 브라질",
      coordinates: [-40.0721, -10.711],
    },
    { markerOffset: 15, name: "런던, 영국", coordinates: [0.1551, 60.8013] },
    {
      markerOffset: -30,
      name: "로마, 이탈리아",
      coordinates: [18.1551, 26.8013],
    },
    {
      markerOffset: -30,
      name: "모스크바, 러시아",
      coordinates: [30.1551, 46],
    },
    {
      markerOffset: 15,
      name: "두바이, 아랍에미리트",
      coordinates: [50.1551, 26],
    },
    {
      markerOffset: 15,
      name: "베이징, 중국",
      coordinates: [96.59, 37.33],
    },
    {
      markerOffset: 15,
      name: "시드니, 호주",
      coordinates: [136.59, -12.33],
    },
    { markerOffset: 15, name: "서울, 한국", coordinates: [126.59, 37.33] },
  ];

  const mapMarker = markers.map(({ name, coordinates, markerOffset }) => (
    <Marker key={name} coordinates={coordinates}>
      <g
        fill="none"
        stroke="#FF5533"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(-12, -24)"
      >
        <image
          href="https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg"
          height="25px"
          width="25px"
        />
        <path />
      </g>
      <text
        textAnchor="middle"
        y={markerOffset}
        style={{ fill: "white", fontSize: "10px" }}
      >
        {name}
      </text>
    </Marker>
  ));

  const handleOnClick = (country) => {
    const clickCountry = country;
    setSelectedCountry(clickCountry);
  };

  return (
    <>
      <div className="background">
        <ComposableMap
          className="composableMap"
          projection="geoEquirectangular"
          projectionConfig={{ scale: 185 }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => handleOnClick(geo.properties["NAME"])}
                  style={{
                    default: {
                      fill: "lightgray",
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
        </ComposableMap>
      </div>
    </>
  );
}

export default memo(MapChart);
