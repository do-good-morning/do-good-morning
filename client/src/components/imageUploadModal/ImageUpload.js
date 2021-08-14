import React, { useEffect, useState } from "react";
import axios from "axios";
import Resizer from "react-image-file-resizer";
import { Modal, Button } from "antd";

export default function ImageUploadModal() {
  const [image, setImage] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const jwt =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6dHJ1ZSwiaWF0IjoxNjI4OTI5MDA1LCJqdGkiOiI0MTdlMzk5Yi1lZTc5LTRjYmQtOWEwYS05OWM5MzhlYjYyNGEiLCJ0eXBlIjoiYWNjZXNzIiwic3ViIjoxLCJuYmYiOjE2Mjg5MjkwMDUsImV4cCI6MTYyOTAxNTQwNX0.4VYhXL3oViQbTa2urBGJuS1AhGECRoTnhkMCHJc8FWo";
  const [imgBase64, setImgBase64] = useState("");
  const [imgFile, setImgFile] = useState(null);

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

  async function onChangeImage(e) {
    e.preventDefault();
    const originalfile = e.target.files[0];
    console.log(originalfile);
    setImage(originalfile);

    try {
      const resizedImage = await resizeFile(originalfile);
      setImage(resizedImage);
      console.log(resizeFile);
    } catch (err) {
      console.log(err);
    }
  }

  // 업로드 이미지
  function onClickSubmit() {}

  function ImageUploadComponent() {
    return (
      <div style={{ width: "100px" }}>
        <form
          action="/"
          id="uploadForm"
          method="post"
          enctype="multipart/form-data"
        >
          <input type="file" name="file" id="file" onChange={onChangeImage} />
          <input type="text"></input>
          <button onClick={onClickSubmit}></button>
        </form>
      </div>
    );
  }

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    if (image !== null) {
      console.log("img");
      const formData = new FormData();
      formData.append("ImageData", image);
      formData.append("ImageCountry", "ssss");
      formData.append("ImageCity", "ssss");
      formData.append("ImageDescription", "ssss");
      axios.post(`${process.env.REACT_APP_API_URL}/fileupload`, formData, {
        headers: { Authorization: "JWT " + jwt },
        "content-type": "multipart/form-data",
      });
    } else {
      console.log("noimg");
    }
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>

      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <ImageUploadComponent />
      </Modal>
    </div>
  );
}
