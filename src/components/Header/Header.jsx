import React from "react";
import { BiHome } from "react-icons/bi";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledHeader = styled.header`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  flex-direction: row;
  height: 45px;
  background-color: rgb(255, 255, 255);
  border-bottom: 1px solid rgb(221, 221, 221);
  padding: 0px 12px;
`;

const StyledP = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

function Header() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/");
  };

  return (
    <StyledHeader>
      <StyledP>모두의 버킷리스트</StyledP>
      <BiHome size={30} onClick={handleButtonClick} />
    </StyledHeader>
  );
}
export default Header;
