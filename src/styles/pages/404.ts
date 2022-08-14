import styled from "styled-components";

export const ErrorPage = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  height: 100vh;
  gap: 2rem;

  > span {
    font-style: italic;
    font-weight: 800;
    font-size: 5rem;
    line-height: 80%;
  }

  > a {
    text-transform: uppercase;
    background: var(--gradient-pink);
    color: var(--white);
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    padding: 0.5rem 1.5rem;
    width: 100%;
    max-width: 350px;
    border-radius: 4px;
    cursor: pointer;
    transition: var(--transition);

    &:hover {
      background: var(--gradient-pink-hover);
    }
  }

  > .logo {
    width: 100%;
    max-width: 2rem;
    object-fit: cover;
    filter: invert(1);

    pointer-events: none;
    user-select: none;
  }

  > img:not(.logo) {
    width: 100%;
    max-width: 500px;

    pointer-events: none;
    user-select: none;
  }
`;
