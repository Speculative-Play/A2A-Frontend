import React from "react";
import AuntiesAlgosColorPalette from "./AuntiesAlgosColorPalette";

//Helpers
const AppLogo = (props) => (
  <svg
    width={88}
    height={46}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={{ padding: 30 }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.315 27.943v.036h-.26L36.344 9.263v18.706l-16.03-.026Zm16.033.034h5.254V1.253C41.429.835 40.719 0 39.265 0c-1.324 0-1.744.52-2.2 1.086l-.136.167L.066 43.639c-.26.417.26 1.253 1.298 1.461 1.763.355 3.77-.136 4.932-1.461l10.125-11.484h3.883v.002l16.033.026.01-4.206Z"
      fill={AuntiesAlgosColorPalette.logoColor} />
    <path
      d="M36.344 32.152h5.192v10.35a2.596 2.596 0 1 1-5.192 0v-10.35Z"
      fill={AuntiesAlgosColorPalette.logoColor} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.315 27.943v.036h-.26L36.344 9.263v18.706l-16.03-.026Zm16.033.034h5.254V1.253C41.429.835 40.719 0 39.265 0c-1.324 0-1.744.52-2.2 1.086l-.136.167L.066 43.639c-.26.417.26 1.253 1.298 1.461 1.763.355 3.77-.136 4.932-1.461l10.125-11.484h3.883v.002l16.033.026.01-4.206ZM67.286 27.943v.036h.26L51.256 9.263v18.706l16.03-.026Zm-16.033.034h-5.255V1.253C46.173.835 46.883 0 48.336 0c1.325 0 1.744.52 2.2 1.086h.001l.136.167 36.863 42.386c.26.417-.26 1.253-1.298 1.461-1.763.355-3.77-.136-4.933-1.461L71.18 32.155h-3.884v.002l-16.033.026-.01-4.206Z"
      fill={AuntiesAlgosColorPalette.logoColor} />
    <path
      d="M51.257 32.152h-5.192v10.35a2.596 2.596 0 1 0 5.192 0v-10.35Z"
      fill={AuntiesAlgosColorPalette.logoColor} />
  </svg>
);

export default AppLogo;