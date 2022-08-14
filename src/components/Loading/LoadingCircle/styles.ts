import styled, { keyframes } from "styled-components";

const loading = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingRing = styled.div`
  margin: 16px auto;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  border-top: 3px solid var(--gradient-pink);
  border-right: 3px solid transparent;
  box-sizing: border-box;
  animation: ${loading} 1s linear infinite;
`;
