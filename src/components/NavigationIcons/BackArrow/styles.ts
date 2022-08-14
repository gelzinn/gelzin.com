import styled from "styled-components";

export const ArrowContainer = styled.div`
  position: absolute;

  width: 100%;

  cursor: pointer;
  z-index: 2;

  > svg {
    width: 100%;
    height: 100%;

    color: var(--text);
    transition: var(--transition);
  }

  &:hover > svg {
    color: var(--white);
  }

  @media (min-width: 768px) {
    top: 2rem;
    left: 2rem;

    max-width: 2rem;
  }

  @media (max-width: 768px) {
    top: 1rem;
    left: 1rem;

    max-width: 2rem;
  }
`;
