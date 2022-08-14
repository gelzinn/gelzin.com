import { createGlobalStyle } from "styled-components";
import { Variables } from "./variables";

export const GlobalStyles = createGlobalStyle`
  ${Variables}
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: var(--font-main);
    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-track {
      background: var(--black);
    }
    &::-webkit-scrollbar-thumb {
      background: var(--shape);
      transition: var(--transition);
    }
    &::-webkit-scrollbar-thumb:hover {
      background: var(--shape-light);
    }
  }
  body {
    -webkit-font-smoothing: antialiased;
    &.menu-opened {
      height: 100vh;
      overflow: hidden;
    }
  }
  main {
    overflow: hidden scroll;

    p {
      color: var(--text);
      line-height: 120%;
    }
  }
  html {
    scroll-behavior: smooth;
    box-sizing: inherit;
    width: 100vw;
    height: max-content;
    overflow-x: hidden;
    background: var(--background);
    color: var(--white);
    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-track {
      background: var(--black);
    }
    &::-webkit-scrollbar-thumb {
      background: var(--primary);
      transition: var(--transition);
    }
    &::-webkit-scrollbar-thumb:hover {
      background: var(--primary-hover);
    }
  }
  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
  }
`;
