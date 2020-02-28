import React from "react";

const Trash = () => {
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
        d="M20 6C20 4.343 18.656 3 17 3H13V2.5C13 1.671 12.328 1 11.5 1H10.5C9.672 1 9 1.671 9 2.5V3H5C3.344 3 2 4.343 2 6H4V19C4 20.104 4.896 21 6 21H16C17.104 21 18 20.104 18 19V6H20ZM15.5 19H6.5C6.224 19 6 18.776 6 18.5V6H16V18.5C16 18.776 15.776 19 15.5 19ZM9 18H7V7H9V18ZM10 18H12V7H10V18ZM15 18H13V7H15V18Z"
        fill="black"
      />
      <mask
        id="mask-trash"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="2"
        y="1"
        width="18"
        height="20"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20 6C20 4.343 18.656 3 17 3H13V2.5C13 1.671 12.328 1 11.5 1H10.5C9.672 1 9 1.671 9 2.5V3H5C3.344 3 2 4.343 2 6H4V19C4 20.104 4.896 21 6 21H16C17.104 21 18 20.104 18 19V6H20ZM15.5 19H6.5C6.224 19 6 18.776 6 18.5V6H16V18.5C16 18.776 15.776 19 15.5 19ZM9 18H7V7H9V18ZM10 18H12V7H10V18ZM15 18H13V7H15V18Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask-trash)">
        <rect width="22" height="22" fill="white" />
      </g>
    </svg>
  );
};

export default Trash