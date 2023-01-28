import styled from "styled-components";

export const NavbarContainerStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin: 0 auto;
  width: 100%;
  height: 50px;
`;

export const LogoStyled = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  & img {
    margin-top: 13px;
  }
`;

export const LinkContainerStyled = styled.div`
  display: flex;
  color: #fff;
  gap: 45px;
  margin-right: 30px;
`;