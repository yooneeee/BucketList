import React from "react";
import { BiHome } from "react-icons/bi";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  border-bottom: 1px solid gray;
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
