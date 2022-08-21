import styled from "styled-components";

interface RecentProjectProps {
  repoImage: string;
}

export const RecentProjectContainer = styled.div<RecentProjectProps>`
  display: flex;
  justify-content: ${(props: RecentProjectProps) =>
    props.repoImage ? "flex-start" : "center"};
  align-items: center;

  width: 100vw;
  height: ${(props: RecentProjectProps) =>
    props.repoImage ? "100vh" : "65vh"};
  max-height: 100vh;

  position: relative;
  overflow: hidden;

  .about-video {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    width: 100%;
    max-width: 650px;
    height: 100%;

    z-index: 1;
    gap: 2rem;

    margin: 4rem;

    &.without-image {
      align-items: center;

      > .heading {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        gap: 1rem;
      }

      > .other-info {
        justify-content: center;
      }

      > .actions {
        justify-content: center;
      }

      @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }

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

        &:last-child {
          font-size: 1rem;
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

        &#visit {
          max-width: 200px;

          background: var(--gradient-pink);
          filter: brightness(85%);
          /* color: var(--black); */

          > svg {
            width: 100%;
            max-width: 24px;
            height: 100%;
          }

          &:hover {
            background: var(--gradient-pink-hover);
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
      object-position: top;

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

          &:last-child {
            font-size: 0.85rem;
            text-align: center;
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

          &#visit {
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

export const OtherProjectsContainer = styled.div`
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

  > .repos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    width: 100%;
    max-width: 1400px;
    margin: 5rem auto;
    padding: 0 1rem;

    gap: 1rem;

    list-style-type: none;

    > li {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;

      flex-basis: calc(1400px / 3);
      flex-grow: 1;

      width: 100%;
      height: auto;

      overflow: hidden;
      position: relative;

      border: 1px solid var(--shape);
      border-radius: 1rem;

      padding: 1rem;
      gap: 2rem;

      .info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        width: 100%;
        height: auto;

        gap: 2rem;
        /* background: var(--shape-light); */

        line-height: 120%;
        z-index: 2;

        header {
          display: flex;
          justify-content: center;
          align-items: center;

          width: 100%;
          max-height: 250px;

          overflow: hidden;

          font-weight: bold;
          color: var(--gradient-pink);

          &:after {
            content: "";
            flex: 1;
            margin-left: 1rem;
            height: 1px;
            background: linear-gradient(
              to right,
              transparent,
              var(--gradient-pink)
            );
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

        > div {
          display: flex;
          flex-direction: column;

          gap: 0.65rem;
          width: 100%;

          color: var(--text);

          > span {
            display: flex;
            align-items: center;

            position: relative;

            width: 100%;
            color: var(--white);
            font-weight: bold;
          }

          > ul {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            align-items: center;

            list-style: none;
            gap: 0.5rem;

            > li {
              padding: 0.25rem 0.5rem;

              border: 1px solid var(--gradient-pink);
              border-radius: 1rem;

              color: var(--gradient-pink);
              cursor: pointer;

              &:hover {
                background: var(--gradient-pink-50);
              }
            }
          }
        }

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

        @media (max-width: 378px) {
          flex-direction: column;
          text-align: center;
        }
      }

      footer {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        width: 100%;
        gap: 1rem;

        .actions {
          display: flex;
          justify-content: center;
          align-items: center;

          width: 100%;

          > a {
            display: flex;
            justify-content: center;
            align-items: center;

            width: 100%;
            gap: 0.5rem;
            text-decoration: none;

            color: var(--text);

            @media (min-width: 768px) {
              > svg {
                max-width: 0;
              }

              &:hover {
                color: var(--gradient-pink);

                > svg {
                  max-width: 1rem;
                }
              }
            }
          }
        }

        .stats {
          display: flex;
          justify-content: flex-start;
          align-items: center;

          width: 100%;

          /* gap: 1rem; */
          list-style: none;

          > li {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            width: 100%;

            > span {
              display: flex;
              align-items: center;
              justify-content: center;

              position: relative;

              width: 100%;
              color: var(--white);
              font-weight: bold;
            }

            > p {
              display: flex;
              justify-content: flex-start;
              align-items: center;

              gap: 0.25rem;

              > svg {
                &#star {
                  color: var(--yellow);
                }
              }
            }

            & + li {
              border-left: 1px solid var(--shape);
            }
          }
        }
      }
    }
  }
`;
