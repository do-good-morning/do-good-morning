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
          src="https://www.swcf.or.kr/inc/img/sub/page138_visual01.jpg"
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
  );
}

export default memo(MapChart);
