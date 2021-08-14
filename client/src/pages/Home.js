import React, { useEffect, useState } from "react";
import Auth from "../components/auth/Auth";
import { Modal, Button } from "antd";

const Home = ({ isLoggedIn }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <div className="home">
        <h1>HOME</h1>
      </div>
      <Button type="primary" onClick={() => setIsModalVisible(true)}>
        사진 업로드하기
      </Button>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={() => setIsModalVisible(false)}
        onCancel={() => setIsModalVisible(false)}
      >
        <Auth />
      </Modal>
    </>
  );
};

export default Home;
