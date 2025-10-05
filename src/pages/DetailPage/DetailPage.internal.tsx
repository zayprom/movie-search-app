import styled from "styled-components";

export const MovieDetailsWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  gap: 2rem;

  @media screen and (max-width: 1024px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const ImageSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const MovieDetailsSection = styled.section`
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.4rem;
`;

export const MovieDetailsRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;
