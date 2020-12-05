import styled from "@emotion/styled";

export const Input = styled.input`
  height: 56px;
  padding: 0 22px;

  width: 40%;

  border-radius: 8px;
  background: rgba(228, 228, 228, 0.3);
  border: 1px solid transparent;

  font-family: "Inter", sans-serif;
  font-size: 1.4rem;
  font-weight: 600;
  color: #11142D;

  border: 1px solid #6c5dd3;

  &::placeholder {
    color: #11142D;
  }

  transition: all 0.25s;

  &:focus {
    border: 1px solid #6c5dd3;
  }
`;
