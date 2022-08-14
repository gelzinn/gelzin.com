import styled from "styled-components";

export const RecentVideoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100vw;
  height: 100vh;
  max-height: 100vh;

  position: relative;
  overflow: hidden;

  .about-video {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    width: 100%;
    max-width: 750px;
    height: 100%;

    z-index: 1;
    gap: 2rem;

    margin: 4rem;

    .heading {
      > p {
        font-weight: 275;
        font-size: 1.5rem;
        line-height: 100%;

        > b {
          font-weight: 400;
          font-size: 1.5rem;
          line-height: 100%;
        }
      }

      > span {
        font-weight: 700;
        font-size: 5rem;
        line-height: 80%;

        text-transform: capitalize;
      }
    }

    .other-info {
      display: flex;

      gap: 1rem;
      width: 100%;

      > div {
        display: flex;
        gap: 0.5rem;

        > span {
          font-weight: 400;
          font-size: 1.25rem;
          line-height: 100%;
        }

        > p {
          font-weight: 275;
          font-size: 1.25rem;
          line-height: 100%;
        }
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
        line-height: 100%;
        padding: 0.5rem 1.5rem;

        width: 100%;
        max-width: 350px;
        border-radius: 4px;
        gap: 0.5rem;

        cursor: pointer;
        transition: var(--transition);

        &:hover {
          background: var(--shape-light);
        }

        &#youtube {
          max-width: 200px;

          background: var(--youtube-red);
          filter: brightness(85%);
          /* color: var(--black); */

          > svg {
            width: 100%;
            max-width: 24px;
            height: 100%;
          }

          &:hover {
            filter: brightness(65%);
          }
        }
      }
    }
  }

  > .bg {
    width: 100vw;
    height: 100vh;

    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    > img {
      width: 100%;
      height: 100%;

      object-fit: cover;

      mask-image: radial-gradient(
        100% 100% at 50% 0%,
        #000000 0%,
        rgba(0, 0, 0, 0) 100%
      );
    }

    mask-image: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0) 0%,
      #000000 50%,
      rgba(0, 0, 0, 0) 100%
    );
  }

  @media (max-width: 768px) {
    height: 65vh;

    > .about-video {
      align-items: center;
      justify-content: flex-end;
      margin: unset;
      padding: 0 1rem;

      gap: 1rem;

      > div {
        width: 100%;
      }

      .heading {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        gap: 0.25rem;

        p {
          font-size: 1rem;

          b {
            font-size: 1rem;
          }
        }

        > span {
          font-size: 3rem;
        }
      }

      .other-info {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        margin-bottom: 1rem;
        gap: 0.5rem;

        > div {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;

          span {
            font-size: 1rem;
          }

          p {
            font-size: 1rem;
          }
        }
      }

      .actions {
        flex-direction: column;
        gap: 0.5rem;

        a {
          padding: 0.5rem 1rem;
          max-width: unset;

          &#youtube {
            max-width: unset;
          }
        }
      }
    }

    > .bg {
      height: 50vh;
    }
  }
`;

export const OtherVideosContainer = styled.div`
  .title {
    margin: 5rem 1rem;
    text-align: center;

    > span {
      font-style: italic;
      font-weight: 500;
      font-size: 48px;
      line-height: 80%;
    }

    > p {
      font-weight: 300;
      font-size: 20px;
      line-height: 100%;
    }
  }

  > .videos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    width: 100%;
    max-width: 1400px;
    margin: 5rem auto;
    padding: 0 1rem;

    gap: 1rem;

    list-style-type: none;

    > li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      flex-basis: 400px;
      flex-grow: 1;

      width: 100%;
      height: auto;

      overflow: hidden;
      position: relative;

      .banner {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        width: 100%;
        height: 100%;
        max-height: 250px;

        overflow: hidden;

        > img {
          width: 100%;
          height: 150%;
          object-fit: cover;

          border-radius: 4px;

          pointer-events: none;
          user-select: none;
          transition: var(--transition);

          @media (min-width: 500px) {
            min-height: 330px;
          }

          @media (max-width: 500px) {
            height: 200px;
          }
        }

        > a {
          display: flex;
          justify-content: center;
          align-items: center;

          width: 5rem;
          height: 5rem;

          text-decoration: none;
          color: var(--white);
          position: absolute;

          display: none;
          z-index: 2;

          > svg {
            width: 5rem;
            height: 5rem;

            color: var(--white);
            cursor: pointer;
          }
        }

        @media (min-width: 768px) {
          &:hover {
            > a {
              display: flex;
            }

            > img {
              filter: brightness(50%) blur(0.5px);
            }
          }
        }

        @media (max-width: 768px) {
          > a {
            display: flex;
          }

          > img {
            filter: brightness(50%) blur(0.5px);
          }
        }
      }

      footer {
        display: flex;
        justify-content: space-between;
        align-items: center;

        width: 100%;
        height: auto;
        /* background: var(--shape-light); */

        padding: 1rem 0;
        line-height: 100%;
        z-index: 2;

        > a {
          text-decoration: none;
          color: var(--white);
          transition: var(--transition);

          line-clamp: 2;
          display: box;
          box-orient: vertical;
          text-overflow: ellipsis;
          white-space: normal;

          &:hover {
            color: var(--gradient-pink);
          }
        }

        @media (max-width: 500px) {
          flex-direction: column;
          text-align: center;
        }
      }
    }
  }
`;
