import React, { useEffect, useState } from "react";
import axios from "axios";
import "./css/Rank.css";

export default function ImageUploadModal() {
  const [countryLikeRank, setCountryLikeRank] = useState([]);
  const [countryPostingRank, setCountryPostingRank] = useState([]);
  const [userLikeRank, setUserLikeRank] = useState([]);
  const [userPostingRank, setUserPostingRank] = useState([]);

  // 사람 순위 출력 3명
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/rank`)
      .then(async (response) => {
        setUserPostingRank(
          response.data["UserTop"].filter((data, id) => id < 10)
        );
        setCountryPostingRank(
          response.data["CountryTopPosting"].filter((data, id) => id < 10)
        );
        setCountryLikeRank(
          response.data["CountryTopLike"].filter((data, id) => id < 10)
        );
      });
  }, []);

  const userPostingAward = userPostingRank.slice(0, 3).map((user, id) => (
    <div key={id} className="rank__list">
      <div className="award__medal">
        {id === 0 ? (
          <img className="rank__medal" src="images/gold.png" alt="1" />
        ) : id === 1 ? (
          <img className="rank__medal" src="images/silver.png" alt="2" />
        ) : id === 2 ? (
          <img className="rank__medal" src="images/bronze.png" alt="3" />
        ) : (
          <span className="rank__number">{id + 1}</span>
        )}
      </div>
      <div className="award__user">{user[0]}</div>
      <div className="award__number">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="pen-square"
          class="svg-inline--fa fa-pen-square fa-w-14"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          style={{ height: "50%", color: "white", marginRight: "10px" }}
        >
          <path
            fill="currentColor"
            d="M400 480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zM238.1 177.9L102.4 313.6l-6.3 57.1c-.8 7.6 5.6 14.1 13.3 13.3l57.1-6.3L302.2 242c2.3-2.3 2.3-6.1 0-8.5L246.7 178c-2.5-2.4-6.3-2.4-8.6-.1zM345 165.1L314.9 135c-9.4-9.4-24.6-9.4-33.9 0l-23.1 23.1c-2.3 2.3-2.3 6.1 0 8.5l55.5 55.5c2.3 2.3 6.1 2.3 8.5 0L345 199c9.3-9.3 9.3-24.5 0-33.9z"
          ></path>
        </svg>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="thumbs-up"
          class="svg-inline--fa fa-thumbs-up fa-w-16"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          style={{ height: "50%", color: "white" }}
        >
          <path
            fill="currentColor"
            d="M466.27 286.69C475.04 271.84 480 256 480 236.85c0-44.015-37.218-85.58-85.82-85.58H357.7c4.92-12.81 8.85-28.13 8.85-46.54C366.55 31.936 328.86 0 271.28 0c-61.607 0-58.093 94.933-71.76 108.6-22.747 22.747-49.615 66.447-68.76 83.4H32c-17.673 0-32 14.327-32 32v240c0 17.673 14.327 32 32 32h64c14.893 0 27.408-10.174 30.978-23.95 44.509 1.001 75.06 39.94 177.802 39.94 7.22 0 15.22.01 22.22.01 77.117 0 111.986-39.423 112.94-95.33 13.319-18.425 20.299-43.122 17.34-66.99 9.854-18.452 13.664-40.343 8.99-62.99zm-61.75 53.83c12.56 21.13 1.26 49.41-13.94 57.57 7.7 48.78-17.608 65.9-53.12 65.9h-37.82c-71.639 0-118.029-37.82-171.64-37.82V240h10.92c28.36 0 67.98-70.89 94.54-97.46 28.36-28.36 18.91-75.63 37.82-94.54 47.27 0 47.27 32.98 47.27 56.73 0 39.17-28.36 56.72-28.36 94.54h103.99c21.11 0 37.73 18.91 37.82 37.82.09 18.9-12.82 37.81-22.27 37.81 13.489 14.555 16.371 45.236-5.21 65.62zM88 432c0 13.255-10.745 24-24 24s-24-10.745-24-24 10.745-24 24-24 24 10.745 24 24z"
          ></path>
        </svg>
        <span className="rank__number">{user[1]}</span>
      </div>
    </div>
  ));

  const userPostingBest = userPostingRank.slice(3).map((user, id) => (
    <div key={id} className="rank__list">
      <div className="rank__left">
        <span className="rank__number">{id + 4}</span>

        <span>{user[0]}</span>
      </div>
      <div className="rank__right">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="pen-square"
          class="svg-inline--fa fa-pen-square fa-w-14"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          style={{ height: "50%", color: "white", marginRight: "10px" }}
        >
          <path
            fill="currentColor"
            d="M400 480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zM238.1 177.9L102.4 313.6l-6.3 57.1c-.8 7.6 5.6 14.1 13.3 13.3l57.1-6.3L302.2 242c2.3-2.3 2.3-6.1 0-8.5L246.7 178c-2.5-2.4-6.3-2.4-8.6-.1zM345 165.1L314.9 135c-9.4-9.4-24.6-9.4-33.9 0l-23.1 23.1c-2.3 2.3-2.3 6.1 0 8.5l55.5 55.5c2.3 2.3 6.1 2.3 8.5 0L345 199c9.3-9.3 9.3-24.5 0-33.9z"
          ></path>
        </svg>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="thumbs-up"
          class="svg-inline--fa fa-thumbs-up fa-w-16"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          style={{ height: "50%", color: "white" }}
        >
          <path
            fill="currentColor"
            d="M466.27 286.69C475.04 271.84 480 256 480 236.85c0-44.015-37.218-85.58-85.82-85.58H357.7c4.92-12.81 8.85-28.13 8.85-46.54C366.55 31.936 328.86 0 271.28 0c-61.607 0-58.093 94.933-71.76 108.6-22.747 22.747-49.615 66.447-68.76 83.4H32c-17.673 0-32 14.327-32 32v240c0 17.673 14.327 32 32 32h64c14.893 0 27.408-10.174 30.978-23.95 44.509 1.001 75.06 39.94 177.802 39.94 7.22 0 15.22.01 22.22.01 77.117 0 111.986-39.423 112.94-95.33 13.319-18.425 20.299-43.122 17.34-66.99 9.854-18.452 13.664-40.343 8.99-62.99zm-61.75 53.83c12.56 21.13 1.26 49.41-13.94 57.57 7.7 48.78-17.608 65.9-53.12 65.9h-37.82c-71.639 0-118.029-37.82-171.64-37.82V240h10.92c28.36 0 67.98-70.89 94.54-97.46 28.36-28.36 18.91-75.63 37.82-94.54 47.27 0 47.27 32.98 47.27 56.73 0 39.17-28.36 56.72-28.36 94.54h103.99c21.11 0 37.73 18.91 37.82 37.82.09 18.9-12.82 37.81-22.27 37.81 13.489 14.555 16.371 45.236-5.21 65.62zM88 432c0 13.255-10.745 24-24 24s-24-10.745-24-24 10.745-24 24-24 24 10.745 24 24z"
          ></path>
        </svg>
        <span className="rank__number">{user[1]}</span>
      </div>
    </div>
  ));

  const countryPostingBest = countryPostingRank.map((country, id) => (
    <div key={id} className="rank__list">
      <div className="rank__left">
        {id === 0 ? (
          <img className="rank__medal" src="images/gold.png" alt="1" />
        ) : id === 1 ? (
          <img className="rank__medal" src="images/silver.png" alt="2" />
        ) : id === 2 ? (
          <img className="rank__medal" src="images/bronze.png" alt="3" />
        ) : (
          <span className="rank__number">{id + 1}</span>
        )}
        <span>{country[0]}</span>
      </div>
      <div className="rank__right">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="pen-square"
          class="svg-inline--fa fa-pen-square fa-w-14"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          style={{ height: "50%", color: "white" }}
        >
          <path
            fill="currentColor"
            d="M400 480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zM238.1 177.9L102.4 313.6l-6.3 57.1c-.8 7.6 5.6 14.1 13.3 13.3l57.1-6.3L302.2 242c2.3-2.3 2.3-6.1 0-8.5L246.7 178c-2.5-2.4-6.3-2.4-8.6-.1zM345 165.1L314.9 135c-9.4-9.4-24.6-9.4-33.9 0l-23.1 23.1c-2.3 2.3-2.3 6.1 0 8.5l55.5 55.5c2.3 2.3 6.1 2.3 8.5 0L345 199c9.3-9.3 9.3-24.5 0-33.9z"
          ></path>
        </svg>
        <span className="rank__number">{country[1]}</span>
      </div>
    </div>
  ));

  const countryLikeBest = countryLikeRank.map((country, id) => (
    <div key={id} className="rank__list">
      <div className="rank__left">
        {id === 0 ? (
          <img className="rank__medal" src="images/gold.png" alt="1" />
        ) : id === 1 ? (
          <img className="rank__medal" src="images/silver.png" alt="2" />
        ) : id === 2 ? (
          <img className="rank__medal" src="images/bronze.png" alt="3" />
        ) : (
          <span className="rank__number">{id + 1}</span>
        )}
        <span>{country[0]}</span>
      </div>
      <div className="rank__right">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="thumbs-up"
          class="svg-inline--fa fa-thumbs-up fa-w-16"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          style={{ height: "50%", color: "white" }}
        >
          <path
            fill="currentColor"
            d="M466.27 286.69C475.04 271.84 480 256 480 236.85c0-44.015-37.218-85.58-85.82-85.58H357.7c4.92-12.81 8.85-28.13 8.85-46.54C366.55 31.936 328.86 0 271.28 0c-61.607 0-58.093 94.933-71.76 108.6-22.747 22.747-49.615 66.447-68.76 83.4H32c-17.673 0-32 14.327-32 32v240c0 17.673 14.327 32 32 32h64c14.893 0 27.408-10.174 30.978-23.95 44.509 1.001 75.06 39.94 177.802 39.94 7.22 0 15.22.01 22.22.01 77.117 0 111.986-39.423 112.94-95.33 13.319-18.425 20.299-43.122 17.34-66.99 9.854-18.452 13.664-40.343 8.99-62.99zm-61.75 53.83c12.56 21.13 1.26 49.41-13.94 57.57 7.7 48.78-17.608 65.9-53.12 65.9h-37.82c-71.639 0-118.029-37.82-171.64-37.82V240h10.92c28.36 0 67.98-70.89 94.54-97.46 28.36-28.36 18.91-75.63 37.82-94.54 47.27 0 47.27 32.98 47.27 56.73 0 39.17-28.36 56.72-28.36 94.54h103.99c21.11 0 37.73 18.91 37.82 37.82.09 18.9-12.82 37.81-22.27 37.81 13.489 14.555 16.371 45.236-5.21 65.62zM88 432c0 13.255-10.745 24-24 24s-24-10.745-24-24 10.745-24 24-24 24 10.745 24 24z"
          ></path>
        </svg>
        <span className="rank__number">{country[1]}</span>
      </div>
    </div>
  ));

  return (
    <main className="rank">
      <div className="rank__inner">
        <section className="user__posting">
          <h3 className="rank__title">
            가장 많이 아침을 나눈 두굿이들{" "}
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="sun"
              class="svg-inline--fa fa-sun fa-w-16"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              style={{ height: "70%", padding: "5px" }}
            >
              <path
                fill="currentColor"
                d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"
              ></path>
            </svg>
          </h3>
          <div className="rank__lists__award">{userPostingAward}</div>
          <div className="rank__lists__user">{userPostingBest}</div>
        </section>
        <section className="country__posting">
          <h3 className="rank__title">
            가장 많이 아침을 나누었던 나라들{" "}
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="sun"
              class="svg-inline--fa fa-sun fa-w-16"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              style={{ height: "70%", padding: "5px" }}
            >
              <path
                fill="currentColor"
                d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"
              ></path>
            </svg>
          </h3>
          <div className="rank__lists">{countryPostingBest}</div>
        </section>
        <section className="country__like">
          <h3 className="rank__title">
            가장 많이 주목을 받은 아침
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="sun"
              class="svg-inline--fa fa-sun fa-w-16"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              style={{ height: "70%", padding: "5px" }}
            >
              <path
                fill="currentColor"
                d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"
              ></path>
            </svg>
          </h3>
          <div className="rank__lists">{countryLikeBest}</div>
        </section>
      </div>
    </main>
  );
}
