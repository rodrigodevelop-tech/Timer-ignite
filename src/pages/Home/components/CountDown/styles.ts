import styled from "styled-components";

export const CountDownContainer = styled.div`
  font-family: "Roboto Mono", monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme["gray-100"]};

  display: flex;
  gap: 1rem;

  span {
    background: ${(props) => props.theme["gray-700"]};
    padding: 2rem 1rem;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    font-size: 8rem;
    line-height: 5rem;
    gap: 0.2rem;

    span {
      padding: 2rem 0.5rem;
    }
  }
  @media (max-width: 426px) {
    font-size: 5rem;
    line-height: 3rem;
  }
  @media (max-width: 376px) {
    font-size: 4rem;
    gap: 0.1rem;
  }
`;

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme["green-500"]};

  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;

  @media (max-width: 376px) {
    width: 2.7rem;
  }
`;
