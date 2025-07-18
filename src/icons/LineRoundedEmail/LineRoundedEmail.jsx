import React from "react";

export const LineRoundedEmail = ({ className }) => {
  return (
    <svg
      className={`line-rounded-email ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M22 7.13953V17.1395C22 17.8026 21.7366 18.4385 21.2678 18.9073C20.7989 19.3761 20.163 19.6395 19.5 19.6395H4.5C3.83696 19.6395 3.20107 19.3761 2.73223 18.9073C2.26339 18.4385 2 17.8026 2 17.1395V7.13953"
        stroke="#211F54"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />

      <path
        className="path"
        d="M22 7.13953C22 6.47649 21.7366 5.8406 21.2678 5.37176C20.7989 4.90292 20.163 4.63953 19.5 4.63953H4.5C3.83696 4.63953 3.20107 4.90292 2.73223 5.37176C2.26339 5.8406 2 6.47649 2 7.13953L10.675 12.5562C11.0723 12.8045 11.5314 12.9362 12 12.9362C12.4686 12.9362 12.9277 12.8045 13.325 12.5562L22 7.13953Z"
        stroke="#211F54"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};