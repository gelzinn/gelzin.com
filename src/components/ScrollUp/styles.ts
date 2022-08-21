import styled, { keyframes } from "styled-components";

export const ScrollUpContainer = styled.div`
  position: fixed;

  width: 3rem;
  height: 3rem;

  cursor: pointer;
  z-index: 2;

  background: var(--gradient-pink);
  border-radius: 50%;
  padding: 0.75rem;

  &:hover {
    background: var(--gradient-pink-hover);
  }

  > svg {
    width: 100%;
    height: 100%;

    color: var(--white);
    transition: var(--transition);
  }

  @media (min-width: 768px) {
    right: 2rem;
    bottom: 2rem;

    max-width: 4rem;
    max-height: 4rem;
  }

  @media (max-width: 768px) {
    /* display: none; */

    right: 1rem;
    bottom: 1rem;

    max-width: 3rem;
    max-height: 3rem;
  }
`;
