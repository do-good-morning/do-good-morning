import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ImageUploadModal() {
  const [rankCountry, setRankCountry] = useState(null);
  const [rankPerson, setRankPerson] = useState(null);

  // 사람 순위 출력 3명
  useEffect(() => {
    (async function mainItem() {
      axios
        .get(`${process.env.REACT_APP_API_URL}/rank`)
        .then(async (response) => {
          setRankPerson(response.data);
        });
      return;
    })();
  }, []);

  const personList = rankPerson.map(({ data }) => (
    <div>
      <img src={data.url} alt="" />
    </div>
  ));

  // 나라 순위 4개

  useEffect(() => {
    (async function mainItem() {
      axios
        .get(`${process.env.REACT_APP_API_URL}/rank`)
        .then(async (response) => {
          setRankCountry(response.data);
        });
      return;
    })();
  }, []);

  const countryList = rankCountry.map(({ data }) => (
    <div>
      <img src={data.url} alt="" />
    </div>
  ));

  return (
    <div>
      {personList}
      {countryList}
    </div>
  );
}
