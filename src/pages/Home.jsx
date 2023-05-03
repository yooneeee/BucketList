import React from "react";
import { useNavigate } from "react-router-dom";
import { HiArrowCircleRight } from "react-icons/hi";
import styled from "styled-components";
import Button from "../components/Button";

function Home() {
  const navigate = useNavigate();
  const handleAddButtonClick = () => {
    navigate("/input");
  };
  const handleListButtonClick = () => {
    navigate("/lists");
  };

  return (
    <ButtonCointainer>
      <Button
        color={"white"}
        size={"large"}
        onClick={handleAddButtonClick}
        justifyContent={"space-between"}
      >
        나만의 버킷리스트 추가하기
        <HiArrowCircleRight style={{ color: "green", fontSize: 40 }} />
      </Button>
      <Button
        color={"white"}
        size={"large"}
        onClick={handleListButtonClick}
        justifyContent={"space-between"}
      >
        버킷리스트 모음{" "}
        <HiArrowCircleRight style={{ color: "green", fontSize: 40 }} />
      </Button>
    </ButtonCointainer>
  );
}

export default Home;

const ButtonCointainer = styled.div`
  margin-top: 24px;
  margin-left: 20px;
  display: flex;
  -webkit-box-align: start;
  align-items: start;
  -webkit-box-pack: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
`;
