import React, { useEffect, useState, useContext } from "react";
import Auth from "../components/auth/Auth";
import { Modal, Button } from "antd";
import { DoGoodMorningContext } from "../components/App";
import { useHistory } from "react-router-dom";

const Home = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { formState, setFormState } = useContext(DoGoodMorningContext);
  const { isLoggedIn } = useContext(DoGoodMorningContext);
  const history = useHistory();

  useEffect(() => {
    if (formState === "loggedin") {
      setIsModalVisible(false);
    }
  }, [formState]);
  return (
    <>
      <div className="home">
        <h1>HOME</h1>
      </div>
      <Button
        type="primary"
        onClick={() =>
          isLoggedIn ? history.push("/map") : setIsModalVisible(true)
        }
      >
        사진 업로드하기
      </Button>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={() => {
          setIsModalVisible(false);
          setFormState("login");
        }}
        onCancel={() => {
          setIsModalVisible(false);
          setFormState("login");
        }}
      >
        <Auth />
      </Modal>
    </>
  );
};

export default Home;
