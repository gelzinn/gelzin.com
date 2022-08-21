import styled, { keyframes, css } from "styled-components";

type NavbarProps = {
  active: boolean;
};

const showNavbar = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
`;

export const NavbarContainer = styled.header<NavbarProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;

  width: 100%;
  height: 80px;
  backdrop-filter: saturate(180%) blur(15px);

  transform: ${(props: NavbarProps) =>
    props.active ? "translateY(0px)" : "translateY(-80px)"};
  transition: var(--transition);

  z-index: 100;

  .logo {
    width: 100%;
    max-width: 3rem;
    height: 100%;
    max-height: 65%;

    cursor: pointer;

    > img {
      width: 100%;
      height: 100%;

      filter: invert(1);

      user-select: none;
      pointer-events: none;
    }
  }
`;
