import styled, { keyframes } from "styled-components";

const fadeInGelzin = keyframes`
  0% {
    transform: translateY(100px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }   
`;

const fadeInMyWork = keyframes`
  0% {
    transform: translateX(25%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }   
`;

const bannerHueRotate = keyframes`
  0% {
    filter: grayscale(1);
  }
  100% {
    filter: grayscale(0) saturate(5041%) hue-rotate(328deg) brightness(94%);
  }
`;

export const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
  overflow: hidden;

  position: relative;

  > .about-me {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;

    z-index: 1;
    gap: 5rem;

    user-select: none;
    pointer-events: none;

    animation: ${fadeInGelzin} 0.75s ease-in-out;

    .logo {
      width: 100%;
      max-width: 200px;
      height: 100%;
      max-height: 400px;
      mask-image: linear-gradient(180deg, #000000 50%, rgba(0, 0, 0, 0) 100%);

      > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: invert(1);
      }
    }

    .info {
      > span {
        font-style: italic;
        font-weight: 800;
        font-size: 6rem;
        line-height: 80%;
      }

      > p {
        font-style: normal;
        font-weight: 275;
        font-size: 2rem;
        line-height: 100%;
        margin-left: 4rem;

        animation: ${fadeInMyWork} 1s ease-in-out;
      }
    }

    @media (max-width: 768px) and (min-height: 650px) {
      position: absolute;
      flex-direction: column-reverse;
      padding: 0 1rem;
      top: 20%;

      .info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        text-align: center;

        > span {
          font-size: 5rem;
          line-height: 150%;
        }

        > p {
          margin-left: unset;
        }
      }

      .logo {
        width: 100%;
        max-width: 150px;
        height: 100%;
      }
    }

    @media (max-width: 768px) and (max-height: 650px) {
      flex-direction: column-reverse;
      padding: 0 1rem;

      .info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        text-align: center;

        > span {
          font-size: 5rem;
          line-height: 150%;
        }

        > p {
          margin-left: unset;
        }
      }

      .logo {
        width: 100%;
        max-width: 150px;
        height: 100%;
      }
    }

    @media (max-width: 450px) {
      gap: 2rem;

      .logo {
        max-width: 120px;
      }

      .info {
        > span {
          font-size: 4rem;
          line-height: 150%;
        }

        > p {
          font-size: 1.75rem;
        }
      }
    }
  }

  > img:not(.scroll) {
    width: 100%;
    height: 100%;
    mask-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      #000000 50%,
      rgba(0, 0, 0, 0) 100%
    );
    opacity: 10%;

    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    object-fit: cover;

    user-select: none;
    pointer-events: none;

    filter: grayscale(1);
    /* animation: ${bannerHueRotate} 5s ease-in-out infinite alternate; */
  }

  @media (min-height: 650px) {
    .scroll {
      position: absolute;
      bottom: 5%;

      @media (max-width: 768px) {
        bottom: 10%;
      }
    }
  }

  @media (max-height: 650px) {
    .scroll {
      display: none;
    }
  }
`;

export const AboutMyServices = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 10rem;
  overflow: hidden;

  .lets-work {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    padding: 0 1rem;

    position: relative;

    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      width: 100%;
      max-width: 600px;

      gap: 2rem;

      > span {
        width: 100%;

        font-style: italic;
        font-weight: 800;
        font-size: 5rem;
        line-height: 80%;
      }

      .actions {
        display: grid;
        grid-template-columns: 60fr 40fr;
        gap: 1rem;

        width: 100%;

        a {
          text-transform: uppercase;
          background: var(--shape);
          color: var(--white);

          text-align: center;
          text-transform: uppercase;
          text-decoration: none;
          padding: 0.5rem 1.5rem;

          width: 100%;
          max-width: 350px;
          height: 100%;
          max-height: 40px;
          border-radius: 4px;

          cursor: pointer;
          transition: var(--transition);

          &:hover {
            background: var(--shape-light);
          }

          &:first-child {
            background: var(--gradient-pink);

            &:hover {
              background: var(--gradient-pink-hover);
            }
          }
        }
      }
    }

    > img {
      width: 100%;
      max-width: 600px;
      height: 100%;
      max-height: 450px;

      /* transform: scaleX(-1); */
      object-fit: cover;

      pointer-events: none;
      user-select: none;
    }

    .bg {
      position: absolute;
      right: -15%;
      z-index: 0;

      width: 100%;
      max-width: 60vw;

      > img {
        width: 100%;
        height: 100%;

        opacity: 0.35;

        mask-image: linear-gradient(
          224.53deg,
          rgba(0, 0, 0, 0.1) 0%,
          rgba(0, 0, 0, 0) 90.79%
        );
      }

      pointer-events: none;
      user-select: none;
    }

    @media (max-width: 1200px) {
      flex-direction: column;

      height: 100%;
      overflow: visible;

      > .info {
        text-align: center;
        align-items: center;
      }

      > img {
        display: none;
      }
    }

    @media (max-width: 768px) {
      .info {
        > span {
          font-size: 3rem;
        }

        > .actions {
          display: flex;
          flex-direction: column;

          > a {
            max-width: unset;
          }
        }
      }
    }
  }

  .my-services {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;

    position: relative;
    padding: 0 1rem;

    > h1 {
      font-weight: 500;
      font-size: 2.5rem;
      text-transform: capitalize;

      @media (max-width: 768px) {
        text-align: center;
        font-size: 1.5rem;
      }
    }

    > li {
      display: flex;
      justify-content: space-between;
      align-items: center;

      width: 100%;
      max-width: 1400px;
      margin: 5rem auto;
      list-style: none;

      .info {
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: center;

        width: 100%;
        max-width: 600px;
        height: auto;

        gap: 1rem;

        > span {
          text-transform: capitalize;
          font-style: italic;
          font-weight: 500;
          font-size: 3rem;
          line-height: 80%;
        }

        .opened,
        .closed {
          display: flex;
          justify-content: center;
          align-items: center;

          width: 100%;
          gap: 0.5rem;

          > p {
            width: 100%;
          }

          > svg {
            width: 100%;
            max-width: 1.5rem;
            height: 100%;
          }
        }

        .opened {
          color: var(--green);

          > p {
            color: var(--green);
          }
        }

        .closed {
          color: var(--red);

          > p {
            color: var(--red);
          }
        }

        .actions {
          display: flex;

          gap: 1rem;

          width: 100%;
          max-width: 500px;

          a {
            display: flex;
            justify-content: center;
            align-items: center;

            text-transform: uppercase;
            background: var(--shape);
            color: var(--white);

            text-align: center;
            text-transform: uppercase;
            text-decoration: none;
            padding: 0.5rem 1.5rem;

            width: 100%;
            max-width: 350px;
            height: 100%;
            max-height: 40px;
            border-radius: 4px;

            cursor: pointer;
            transition: var(--transition);

            &:hover {
              background: var(--shape-light);
            }

            &#buy {
              max-width: 100px;

              background: var(--gradient-pink);
              /* color: var(--black); */

              > svg {
                width: 100%;
                height: 100%;
                max-height: 1.5rem;
              }

              &:hover {
                filter: brightness(85%);
              }
            }
          }
        }
      }

      > img {
        width: 100%;
        max-width: 600px;
        height: 100%;
        max-height: 400px;

        object-fit: cover;

        pointer-events: none;
        user-select: none;

        &#closed {
          filter: blur(10px) brightness(50%) grayscale(1);
          opacity: 0.5;
        }
      }

      @media (min-width: 1200px) {
        &:nth-child(even) {
          .info {
            text-align: right;
            align-items: flex-end;

            .opened,
            .closed {
              flex-direction: row-reverse;
            }

            > .actions {
              flex-direction: row-reverse;
              justify-content: flex-start;

              > a#buy {
                transform: scaleX(-1);
              }
            }
          }
        }

        &:nth-child(odd) {
          flex-direction: row-reverse;

          .info {
            align-items: flex-start;

            > .actions {
              justify-content: flex-start;
            }
          }
        }
      }

      @media (max-width: 1200px) {
        flex-direction: column;

        .info {
          > .actions {
            justify-content: center;
            align-items: center;

            max-width: unset;

            > a {
              max-width: unset;
            }
          }
        }
      }

      @media (max-width: 768px) {
        .info {
          > span {
            font-size: 2rem;
          }
        }

        &:nth-child(2) {
          margin: 0 auto 2rem;
        }

        margin: 2rem auto;
      }
    }
  }

  @media (max-width: 1200px) {
    gap: 4rem;
  }
`;

export const RecentProjects = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  margin: 5rem 0;
  padding: 0 1rem;

  position: relative;
  overflow: hidden;

  > h1 {
    font-weight: 500;
    font-size: 2.5rem;
    text-transform: capitalize;

    @media (max-width: 768px) {
      text-align: center;
      font-size: 1.5rem;
    }
  }

  > li {
    width: 100%;
    height: 100%;
    max-height: 500px;

    margin: 5rem 0;

    list-style-type: none;

    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;

      width: 100%;
      max-width: 1400px;

      margin: 0 auto;
      padding: 0 1rem;
      gap: 2rem;

      overflow: hidden;
      z-index: 1;
    }

    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      gap: 1rem;

      width: 100%;

      > span {
        font-style: italic;
        font-weight: 500;
        font-size: 3rem;
        line-height: 80%;

        width: 100%;
        max-width: 700px;
      }

      > p {
        width: 100%;
        max-width: 500px;
      }

      > a {
        background: var(--shape);
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
          background: var(--shape-light);
        }
      }
    }

    .about-project {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      gap: 0.5rem;

      width: 100%;
      max-width: 600px;
      height: 100%;

      &.development > img {
        object-position: top;
      }

      > img {
        min-width: 600px;
        width: 100%;
        max-width: 600px;
        height: 100%;
        max-height: 324px;

        border-radius: 4px;
        object-fit: cover;

        pointer-events: none;
        user-select: none;
      }

      > p {
        width: 100%;

        text-align: right;
        font-weight: 400;
        font-size: 1.25rem;
        cursor: default;

        > a {
          width: 100%;
          text-align: right;
          text-decoration: none;
          color: var(--text);
          cursor: pointer;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }

    .bg-banner {
      position: absolute;

      top: 0;
      right: 0;

      width: 100vw;
      height: 1080px;

      z-index: -1;

      > img {
        width: 100%;
        height: 100%;

        object-fit: cover;

        pointer-events: none;
        user-select: none;

        mask-image: radial-gradient(
          50% 159.44% at 97.92% 0%,
          rgba(0, 0, 0, 0.25) 0%,
          rgba(0, 0, 0, 0) 100%
        );
      }

      mask-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0%,
        #000000 50%,
        rgba(0, 0, 0, 0) 100%
      );
    }

    @media (min-width: 1200px) {
      &:nth-child(odd) {
        .container {
          flex-direction: row-reverse;
        }

        .info {
          align-items: flex-end;
          text-align: right;

          > p {
            float: right;
          }
        }

        .about-project {
          > p {
            text-align: left;
          }
        }

        .bg-banner {
          right: unset;
          left: 0;

          mask-image: linear-gradient(
            -180deg,
            rgba(0, 0, 0, 0) 0%,
            #000000 50%,
            rgba(0, 0, 0, 0) 100%
          );

          > img {
            mask-image: radial-gradient(
              50% 159.44% at 97.92% 0%,
              rgba(0, 0, 0, 0.25) 0%,
              rgba(0, 0, 0, 0) 100%
            );
          }
        }
      }
    }

    @media (max-width: 1200px) {
      .container {
        flex-direction: column-reverse;

        .info {
          text-align: center;
          align-items: center;
        }

        .about-project {
          > img {
            min-width: 420px;
            width: 100%;
            max-width: 600px;
            height: 100%;
            max-height: 230px;
          }
        }
      }
    }

    @media (max-width: 768px) {
      margin: 2rem auto;

      .container .info {
        > span {
          font-size: 2rem;
        }
      }
    }
  }
`;
