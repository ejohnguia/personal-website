import React from 'react';

// https://www.cdnfonts.com/calibre.font
// Calibre
// https://danmarshall.github.io/google-font-to-svg-path/
// https://yqnn.github.io/svg-path-editor/
// Transform: x = 28.5417, y = 30.3

const IconLoader = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <title>Loader Logo</title>
    <g>
      <g id="B" transform="translate(11.000000, 5.000000)">
        <path
          d="M 28.5417 30.3 L 28.5417 61 L 48.5917 61 L 48.5917 56.35 L 33.6417 56.35 L 33.6417 47.55 L 47.1917 47.55 L 47.1917 43 L 33.6417 43 L 33.6417 34.9 L 48.5917 34.9 L 48.5917 30.3 L 28.5417 30.3 Z"
          fill="currentColor"
        />
      </g>
      <path
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M 50, 5
                  L 11, 27
                  L 11, 72
                  L 50, 95
                  L 89, 73
                  L 89, 28 z"
      />
    </g>
  </svg>
);

export default IconLoader;
