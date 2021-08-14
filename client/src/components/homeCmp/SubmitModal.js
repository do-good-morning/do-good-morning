import React from "react";
import { Modal } from "antd";
import "./css/SubmitModal.css";

const SubmitModal = ({ visible, setVisible }) => {
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
              <input
                type="file"
                id="reqeust-file"
                accept="image/*"
                // onChange={onFileChange}
                style={{ display: "none" }}
              />
            </div>
          </div>
          <div className="posting-info">
            <h2>당신의 아침을 공유해주세요.</h2>
            {/* <input type="text" />
            <input type="text" />s */}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SubmitModal;
