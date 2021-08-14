import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import "./css/SubmitModal.css";
import axios from "axios";
import Resizer from "react-image-file-resizer";

const SubmitModal = ({ visible, setVisible }) => {
  const [image, setImage] = useState(null);
  const jwt = localStorage.getItem("jwt");
  const [inputs, setInputs] = useState({
    country: "",
    city: "",
    memo: "",
  });
  const { country, city, memo } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
    console.log(inputs);
  };

  // 이미지 파일 핸들러

  async function onChangeImage(e) {
    e.preventDefault();
    const originalfile = e.target.files[0];
    setImage(originalfile);
    console.log(originalfile);
    try {
      const resizedImage = await resizeFile(originalfile);
      setImage(resizedImage);
    } catch (err) {
      console.log(err);
    }
  }

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
      console.log("img");
      const formData = new FormData();
      formData.append("ImageData", image);
      formData.append("ImageCountry", country);
      formData.append("ImageCity", city);
      formData.append("ImageDescription", memo);
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
        width={1100}
        footer={null}
      >
        <div className="submit-modal">
          <div className="image__preview">
            <img src="./images/submit_sample.png" alt="sample" />
            <div className="image__upload">
              <label className="material-icons" htmlFor="reqeust-file">
                upload_file
              </label>
              <form
                action="/"
                id="uploadForm"
                method="post"
                enctype="multipart/form-data"
              >
                <input
                  type="file"
                  name="file"
                  id="file"
                  onChange={onChangeImage}
                  style={{ display: "none" }}
                />
              </form>
            </div>
          </div>
          <div className="posting-info">
            <h2>당신의 아침을 공유해주세요.</h2>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SubmitModal;
