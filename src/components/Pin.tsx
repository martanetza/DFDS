import React from 'react';
import { css } from '@emotion/css';

const Pin = () => (
  <div
    //  "pin"
    className={css`
      margin: 0px auto;
      width: 50px;
      height: 50px;
      border-radius: 50px 50px 0px 50px;
      background-color: #345370;
      transform: rotate(45deg);
      display: flex;
      justify-content: center;
      align-items: center;
    `}
  >
    <div
      // "circle"
      className={css`
        width: 70%;
        height: 70%;
        border-radius: 50%;
        background-color: white;
        display: flex;
        justify-content: center;
        transform: rotate(135deg);
        overflow: hidden;
        position: relative;
      `}
    >
      <div
        // "hull"
        className={css`
          background-color: #002b45;
          width: 65%;
          height: 17%;
          position: absolute;
          bottom: 48%;
          border-bottom-right-radius: 10% 40%;
          &::after {
            content: '';
            position: absolute;
            width: 30%;
            height: 70%;
            background-color: #002b45;
            border-bottom-left-radius: 30% 50%;
            border-top-left-radius: 30% 50%;
            transform: rotate(-54deg);
            top: 12%;
            left: -13%;
            z-index: -1;
          }
        `}
      />
      <div
        // "accomodation"
        className={css`
          background-color: #688fb5;
          width: 25%;
          height: 19%;
          position: absolute;
          bottom: 29%;
          right: 29%;
          &::after {
            content: '';
            background-color: #688fb5;
            width: 39%;
            height: 131%;
            position: absolute;
            bottom: -33%;
            right: 0%;
          }
        `}
      />
      <div
        // "accomodation-top"
        className={css`
          background-color: #688fb5;
          width: 26.5%;
          height: 10%;
          position: absolute;
          bottom: 21%;
          right: 28.2%;
          border-bottom-left-radius: 20% 50%;
          border-top-left-radius: 20% 50%;
          border-top-right-radius: 20% 50%;
          border-bottom-right-radius: 20% 50%;
          transform: rotate(25deg);
        `}
      />
      <div
        // "water"
        className={css`
          width: 100%;
          height: 35%;
          background-color: #83a2c0;
        `}
      />
    </div>
  </div>
);

export default Pin;
