import React from "react";
import { Progress as Prog } from "antd";
import { Alert, Spin } from "antd";
import "./Progress.scss";
const Progress = () => {
  return (
    <div className="progress">
      <Spin tip="Loading..." size="large" style={{ color: '#000'}}></Spin>
    </div>
  );
};

export default Progress;
