import React from "react";
import "./style.css";

export const OverlapWrapper = () => {
  return (
    <div className="overlap-wrapper">
      <div className="overlap">
        <div className="overlap-group">
          <div className="frame-12">
            <img
              className="vector"
              alt="Vector"
              src="https://c.animaapp.com/TSkI5naX/img/vector-112.svg"
            />

            <div className="text-wrapper-14">GLEE</div>
          </div>

          <img
            className="image"
            alt="Image"
            src="https://c.animaapp.com/TSkI5naX/img/image-175.png"
          />

          <div className="frame-13">
            <div className="text-wrapper-15">GLEE</div>
          </div>
        </div>

        <div className="frame-14">
          <div className="text-wrapper-16">이게 이 가격이라고?</div>

          <p className="a-2">
            못난이 농산물은 가격이 놀랍도록 착합니다.
            <br />
            A급 품질과 비교해 최대 50% 절약할 수 있어요.
          </p>
        </div>
      </div>
    </div>
  );
};
