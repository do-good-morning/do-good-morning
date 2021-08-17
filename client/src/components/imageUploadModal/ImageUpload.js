import React, { useState } from "react";
import axios from "axios";
import Resizer from "react-image-file-resizer";
import { Modal, Button, Input } from "antd";

export default function ImageUploadModal() {
  const [image, setImage] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
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

    try {
      const resizedImage = await resizeFile(originalfile);
      setImage(resizedImage);
    } catch (err) {
      console.log(err);
    }
  }
  const showModal = () => {
    setIsModalVisible(true);
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

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  function ImageUploadComponent() {
    return (
      <div style={{ width: "100px" }}>
        <form
          action="/"
          id="uploadForm"
          method="post"
          enctype="multipart/form-data"
        >
          <div>
            <Input type="file" name="file" id="file" onChange={onChangeImage} />
          </div>
          <div>
            <input
              type="text"
              name="country"
              value={country}
              onChange={onChange}
            />
            <input type="text" name="city" value={city} onChange={onChange} />
            <input type="text" name="memo" value={memo} onChange={onChange} />
          </div>
        </form>
      </div>
    );
  }

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>

      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={() => {
          handleOk();
          submitForm();
        }}
        onCancel={handleCancel}
      >
        <ImageUploadComponent />
      </Modal>
    </div>
  );
}
