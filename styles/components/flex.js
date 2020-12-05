import styled from "@emotion/styled";

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  justify-content: center;
  align-items: center;

  margin: 5rem 0;
`;
