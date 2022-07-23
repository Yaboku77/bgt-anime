import styled from "styled-components";

export const SLoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: #42454c;
  opacity: 0.8;
  z-index: 998;
  height: 100%;
  width: 100%;
`;

export const SLoader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  background: #42454c;
  opacity: 0.8;
  z-index: 1000;
`;
