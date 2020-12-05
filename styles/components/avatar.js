import styled from "@emotion/styled";

export const Avatar = styled.img`
  border-radius: 100rem;

  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;

export const AvatarBox = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;

  img {
    margin-right: 1.5rem;
  }

  p {
    margin-right: auto;
  }
`;
