import React from "react";

export const Logo = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={39} height={44} fill="none">
      <path
        fill="#fff"
        d="M33.88 22a19.363 19.363 0 0 1-14.468 6.47c-5.75 0-10.915-2.499-14.47-6.47a19.363 19.363 0 0 1 14.47-6.47c5.749 0 10.914 2.499 14.469 6.47Z"
      />
      <path
        fill="#9A7AE0"
        fillRule="evenodd"
        d="M0 34.941C0 24.221 8.691 15.53 19.412 15.53c-5.75 0-10.915 2.5-14.47 6.471a19.363 19.363 0 0 0 14.47 6.47c5.749 0 10.914-2.499 14.469-6.47a19.34 19.34 0 0 1 4.943 12.941v7.334c0 .953-.773 1.725-1.726 1.725H1.725A1.725 1.725 0 0 1 0 42.275V34.94Z"
        clipRule="evenodd"
      />
      <path
        fill="#7F56D9"
        fillRule="evenodd"
        d="M12.13 27.059A19.453 19.453 0 0 1 4.944 22a19.363 19.363 0 0 1 14.469-6.47c5.749 0 10.914 2.499 14.469 6.47a19.34 19.34 0 0 0 4.943-12.941V1.725C38.824.773 38.05 0 37.098 0H1.725C.773 0 0 .773 0 1.725V9.06c0 8.146 5.018 15.12 12.13 18Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const PlaySvg = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} fill="none">
      <path
        stroke="#344054"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11 21c5.523 0 10-4.477 10-10S16.523 1 11 1 1 5.477 1 11s4.477 10 10 10Z"
      />
      <path
        stroke="#344054"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8.5 7.965c0-.477 0-.716.1-.849a.5.5 0 0 1 .364-.199c.166-.012.367.117.769.375l4.72 3.035c.349.224.523.336.583.478a.5.5 0 0 1 0 .39c-.06.142-.234.254-.583.478l-4.72 3.035c-.402.258-.603.387-.769.375a.5.5 0 0 1-.364-.2c-.1-.132-.1-.371-.1-.848v-6.07Z"
      />
    </svg>
  );
};

export default Logo;
