import React from "react";
import { useNavigate } from "react-router-dom";
import { HiArrowCircleRight } from "react-icons/hi";

function Home() {
  const navigate = useNavigate();
  const handleAddButtonClick = () => {
    navigate("/input");
  };
  const handleListButtonClick = () => {
    navigate("/lists");
  };

  return (
    <>
      <button onClick={handleAddButtonClick}>
        나만의 버킷리스트 추가하기
        <HiArrowCircleRight style={{ color: "green" }} />
      </button>
      <button onClick={handleListButtonClick}>
        버킷리스트 모음 <HiArrowCircleRight style={{ color: "green" }} />
      </button>
    </>
  );
}

export default Home;
