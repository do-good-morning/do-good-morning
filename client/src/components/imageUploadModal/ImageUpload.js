import React, { useEffect, useState } from "react";
import axios from "axios";
import Resizer from "react-image-file-resizer";
import { Modal, Button } from "antd";

export default function ImageUploadModal() {
  const [image, setImage] = useState(null);
  const userId = localStorage.getItem("user");
  const [isModalVisible, setIsModalVisible] = useState(false);

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
    try {
      const resizedImage = await resizeFile(originalfile);
      setImage(resizedImage);
      console.log(resizeFile);
    } catch (err) {
      console.log(err);
    }
  }

  // 업로드 이미지 백엔드 전송 버튼으로 수정 필요
  useEffect(() => {
    if (image !== null) {
      const formData = new FormData();
      formData.append("imageData", image);
      formData.append("userId", userId);
      axios.post(`${process.env.REACT_APP_API_URL}/imageUpload/`, formData, {
        headers: { Authorization: "JWT " + localStorage.getItem("jwt") },
        "content-type": "multipart/form-data",
      });
    }
  }, [image]);

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
        </form>
      </div>
    );
  }

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
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
