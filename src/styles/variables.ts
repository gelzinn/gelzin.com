import { css } from "styled-components";

export const Variables = css`
  :root {
    // Font
    --font-main: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;

    // Colors
    --background: #09090a;

    --black: #09090a;
    --white: #fff;
    --white-dark: #f2f2f2;

    --shape: #27272a;
    --shape-light: #1e1e21;
    --shape-light-lowopacity: #28282d50;
    --shape-dark: #060607;
    --shape-dark-lowopacity: #3c3c4225;
    --shape-hover: #29292e;

    --gradient-pink: #e83f5b;
    --gradient-pink-50: #e83f5b50;
    --gradient-pink-hover: #d75c70;
    --gradient-purple: #8257e5;
    --gradient-purple-hover: #996dff;

    --text: #a1a1aa;
    --text-secondary: #27272a;
    --text-on-tooltip: #f4f4f5;

    --red: #ce4a4a;
    --error: var(--red);
    --yellow: #ffa800;
    --warn: var(--yellow);
    --green: #00ff1f;
    --success: var(--green);

    // Brand Colors
    --youtube-red: #ff0000;

    // Other Values
    --max-width: 900px;
    --transition: 0.2s ease;
    --transition-medium: 0.35s ease-in-out;
    --transition-low: 0.5s ease;
    --transition-turtle: 0.75s ease;
    --transition-slowest: 3s ease-in-out;
  }
`;
