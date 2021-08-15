import React, { memo, useContext, useEffect, useState } from "react";
import { DoGoodMorningContext } from "../App";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import "./MapCmp.css";
import axios from "axios";

var timestamp = Date.now();
var date = new Date(timestamp);
// 아침시간 6시 기준 국제시간 + 6
// 24시간 기준 1시간마다 이동
// 국제시간의 기준위치가 위도상 가운데
const time = (date.getUTCHours() + 19) % 24;
const standard = ((time * 100) / 24 + 50 - 16.6) % 100;
const api = process.env.REACT_APP_API_URL;

console.log("Date: " + date.getHours() + ":" + date.getMinutes());

function MapChart({ moveSectionDown }) {
  const { setSelectedCountry } = useContext(DoGoodMorningContext);
  const { cityList, setCityList } = useState([]);

  const [markers, setMarkers] = useState([
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
      markerOffset: 15,
      name: "로마, 이탈리아",
      coordinates: [14.1551, 43.8013],
    },
    {
      markerOffset: 15,
      name: "모스크바, 러시아",
      coordinates: [35.1551, 60],
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
      coordinates: [146.59, -25.33],
    },
    { markerOffset: 15, name: "서울, 한국", coordinates: [126.59, 37.33] },
  ]);

  // 포스팅 섹션
  useEffect(() => {
    (async function GetPostingImages() {
      axios.get(`${api}/main-map`, {}).then((response) => {
        console.log("map", response.data.data);
      });
      return;
    })();
  }, []);

  const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

  const mapMarker = markers.map(({ name, coordinates, markerOffset }) => (
    <Marker key={name} coordinates={coordinates}>
      <g
        fill="none"
        stroke="#FF5533"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(-22, -34)"
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 50 43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="bubblerect"
            stroke="white"
            d="M0 7C0 3.13401 3.13401 0 7 0H33C36.866 0 40 3.13401 40 7V33C40 36.866 36.866 40 33 40H7C3.13401 40 0 36.866 0 33V7Z"
            fill="white"
          />
          <path
            stroke="white"
            d="M20.8742 42.4265C20.4932 40.1123 22.5068 43.1123 19.1258 40.4265L15.8254 33.4856C15.4551 32.8191 15.937 35 16.6995 35H23.3005C24.063 35 24.5449 35.8191 24.1746 36.4856L20.8742 42.4265Z"
            fill="white"
          />
          {/* <image
            width="40"
            height="40"
            clip-path="url(#bubblerect)"
            href="http://ec2-3-36-87-84.ap-northeast-2.compute.amazonaws.com:5000/img/sample_50.png"
          /> */}
          <path />
        </svg>
        <g style={{ objectFit: "cover" }}></g>
      </g>
      <text
        textAnchor="middle"
        y={markerOffset}
        style={{
          fontFamily: "NanumSquareRound",
          fill: "white",
          fontSize: "10px",
        }}
      >
        {name}
      </text>
    </Marker>
  ));

  const handleOnClick = (country) => {
    const clickCountry = country;
    setSelectedCountry(clickCountry);
    moveSectionDown();
  };
  return (
    <>
      {" "}
      <div className="background">
        <div
          className="timeLine"
          style={{ transform: `translate(-${standard}vw)` }}
        ></div>
        <div
          className="subTimeLine"
          style={{ transform: `translate(-${standard}vw)` }}
        ></div>
        <div className="bubble">
          <img
            className="bubble-img"
            src="https://t1.daumcdn.net/cfile/tistory/2463694C53D0A5D806"
            alt=""
          ></img>
        </div>
        <div className="bubble" style={{ left: "451px", top: "163px" }}>
          <img
            className="bubble-img"
            src="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1392,h_1080,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/gdhkz0kxqk7hwvcvczro/%EB%89%B4%EC%9A%95%EC%84%BC%ED%8A%B8%EB%9F%B4%ED%8C%8C%ED%81%AC%EC%9E%90%EC%A0%84%EA%B1%B0%EB%8C%80%EC%97%AC%EC%9D%BC%EC%9D%BC%ED%8C%A8%EC%8A%A4.jpg"
            alt=""
          ></img>
        </div>
        <div className="bubble" style={{ left: "224x", top: "195px" }}>
          <img
            className="bubble-img"
            src="https://media.istockphoto.com/photos/vienna-austria-picture-id1051391304?k=6&m=1051391304&s=612x612&w=0&h=WEzbgyIIu-4yHhzvZ-CqDE_YPtWKoMkG0XABR45Fi8I="
            alt=""
          ></img>
        </div>
        <div className="bubble" style={{ left: "628px", top: "455px" }}>
          <img
            className="bubble-img"
            src="https://cf.bstatic.com/xdata/images/xphoto/1920x1080/94141974.jpg?k=68b990edaf0ba0e46eda4fdd75d903d23ea7fdbb4c1b532c7ef0d50d0923961d&o="
            alt=""
          ></img>
        </div>
        <div className="bubble" style={{ left: "845px", top: "71px" }}>
          <img
            className="bubble-img"
            src="data:image/jpeg;base64,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"
            alt=""
          ></img>
        </div>
        <div className="bubble" style={{ left: "1033px", top: "75px" }}>
          <img
            className="bubble-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYarq72J1kPPraReii8RIrQIt2If-UtIlBrg&usqp=CAU"
            alt=""
          ></img>
        </div>
        <div className="bubble " style={{ left: "921px", top: "163px" }}>
          <img
            className="bubble-img"
            src="https://pds.joins.com/news/component/htmlphoto_mmdata/202102/22/bc449b56-9127-47f6-b77a-bc1dfd2cb4db.jpg"
            alt=""
          ></img>
        </div>
        <div className="bubble " style={{ left: "1114px", top: "258px" }}>
          <img
            className="bubble-img"
            src="https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile24.uf.tistory.com%2Fimage%2F9992E1495AC6E8302B6F55"
            alt=""
          ></img>
        </div>
        <div className="bubble " style={{ left: "1364px", top: "198px" }}>
          <img
            className="bubble-img"
            src="https://cfd.tourtips.com/@cms_800/2018021998/gjfjc4/HCMS_%EB%B2%A0%EC%9D%B4%EC%A7%95%EC%97%B0%EB%8C%80%EC%82%AC%EA%B0%80_P000518994.JPG"
            alt=""
          ></img>
        </div>
        <div className="bubble " style={{ left: "1525px", top: "198px" }}>
          <img
            className="bubble-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShTNXsXSEA_n0HAaxuiNWkatvmDjyJ2E7eWA&usqp=CAU"
            alt=""
          ></img>
        </div>
        <div className="bubble " style={{ left: "1633px", top: "535px" }}>
          <img
            className="bubble-img"
            src="https://i1.daumcdn.net/thumb/C276x260/?fname=https://blog.kakaocdn.net/dn/ctr0uE/btqESVGD84Y/lvHUqSCoGWvdn7fxjQ5ni1/img.jpg"
            alt=""
          ></img>
        </div>
        <div>
          <ComposableMap
            className="composableMap"
            projection="geoEquirectangular"
            projectionConfig={{ scale: 210 }}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    name={geo.properties}
                    onClick={(e) => {
                      const { NAME, POP_EST } = geo.properties;
                      handleOnClick(NAME);
                    }}
                    style={{
                      default: {
                        fill: "#324047",
                        outline: "none",
                      },
                      hover: {
                        fill: "rgb(238, 222, 207)",
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
      </div>
    </>
  );
}

export default memo(MapChart);
