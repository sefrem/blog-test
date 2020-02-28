import React from "react";

const Close = () => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.381 2L11 8.381L4.619 2L2 4.62L8.381 11L2 17.38L4.619 20L11 13.619L17.381 20L20 17.38L13.619 11L20 4.62L17.381 2Z"
        fill="black"
      />
      <mask
        id="mask-close"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="2"
        y="2"
        width="18"
        height="18"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.381 2L11 8.381L4.619 2L2 4.62L8.381 11L2 17.38L4.619 20L11 13.619L17.381 20L20 17.38L13.619 11L20 4.62L17.381 2Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask-close)">
        <rect width="22" height="22" fill="#CCCCCC" />
      </g>
    </svg>
  );
};

export default Close;
