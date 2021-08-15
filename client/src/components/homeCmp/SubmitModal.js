import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import "./css/SubmitModal.css";
import axios from "axios";
import Resizer from "react-image-file-resizer";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";

const SubmitModal = ({ visible, setVisible }) => {
  const [previewImg, setPreviewImg] = useState("./images/submit_sample.png");
  const [image, setImage] = useState(null);
  const jwt = localStorage.getItem("jwt");
  const [inputs, setInputs] = useState({
    country: "",
    city: "",
    memo: "",
  });
  const { countryInput, cityInput, memoInput } = inputs;
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [mention, setMention] = useState("");

  const onSelectCountry = (val) => {
    setCountry(val);
  };

  const onSelectRegion = (val) => {
    setRegion(val);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
    console.log(inputs);
  };

  const onWriteMention = (event) => {
    const {
      target: { name, value },
    } = event;

    if (name === "mention") {
      console.log(value);
      setMention(value);
    }
  };

  // 이미지 파일 핸들러
  const onChangeImage = async (e) => {
    const {
      target: { files },
    } = e;
    const theFile = files[0];
    const reader = new FileReader();

    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;

      setPreviewImg(result);
    };

    reader.readAsDataURL(theFile);

    try {
      const resizedImage = await resizeFile(theFile);
      setImage(resizedImage);
    } catch (err) {
      console.log(err);
    }
  };

  const resizeFile = (file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        416,
        416,
        "JPEG",
        100,
        0,
        (uri) => {
          resolve(uri);
        },
        "file"
      );
    });

  //
  const submitForm = () => {
    if (image !== null) {
      const formData = new FormData();
      formData.append("ImageData", image);
      formData.append("ImageCountry", country);
      formData.append("ImageCity", region);
      formData.append("ImageDescription", mention);
      axios.post(`${process.env.REACT_APP_API_URL}/fileupload`, formData, {
        headers: { Authorization: "JWT " + jwt },
        "content-type": "multipart/form-data",
      });
    }
  };

  return (
    <>
      <Modal
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        bodyStyle={{ backgroundColor: "#d2d2d2" }}
        width={1000}
        footer={null}
      >
        <div className="submit-modal">
          <div className="image__preview">
            <img src={previewImg} alt="sample" />
            <div className="image__upload">
              <form
                action="/"
                id="uploadForm"
                method="post"
                enctype="multipart/form-data"
              >
                <label className="material-icons" htmlFor="img-file">
                  upload_file
                </label>
                <input
                  type="file"
                  name="img-file"
                  id="img-file"
                  accept="image/*"
                  onChange={onChangeImage}
                  style={{ display: "none" }}
                />
              </form>
            </div>
          </div>
          <div className="posting-info">
            <h2>당신의 아침을 공유해주세요.</h2>
            <CountryDropdown
              defaultOptionLabel="Select a country, man."
              value={country}
              onChange={onSelectCountry}
              className="group-select"
            />
            <RegionDropdown
              blankOptionLabel="No country selected, man."
              defaultOptionLabel="Now select a region, pal."
              country={country}
              value={region}
              onChange={onSelectRegion}
              className="group-select"
            />
            <input
              type="text"
              id="mention-input"
              placeholder="간단한 아침 인사를 남겨주세요."
              name="mention"
              onChange={onWriteMention}
            />
            <button id="upload-btn" onChange={submitForm}>
              아침 공유
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SubmitModal;
