import styled from "styled-components";

export const Presentation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  overflow: hidden;
  position: relative;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    max-width: 1400px;
    padding: 0 1rem;

    > img {
      width: 100%;
      max-width: 600px;
      height: 100%;
      transform: scaleX(-1);

      user-select: none;
      pointer-events: none;
    }
  }

  .info {
    width: 100%;

    span {
      font-style: normal;
      font-weight: 275;
      font-size: 2rem;
      line-height: 100%;
    }

    h1 {
      font-style: italic;
      font-weight: 800;
      font-size: 5rem;
      line-height: 100%;
    }

    p {
      font-weight: 400;
      font-size: 20px;
      line-height: 250%;
      color: var(--text);
    }
  }

  .bg {
    position: absolute;
    right: -15%;
    top: 0;

    width: 100vw;
    max-width: 1200px;
    height: 100vh;

    margin: 0 auto;

    user-select: none;
    pointer-events: none;

    > img {
      width: 150%;
      height: 100%;

      transform: scaleX(-1);

      object-fit: cover;

      mask-image: linear-gradient(
        136.89deg,
        rgba(0, 0, 0, 0.15) -14.76%,
        rgba(0, 0, 0, 0) 86.66%
      );
    }
  }
`;
