import React from "react";
import { useNavigate } from "react-router-dom";

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
      <button onClick={handleAddButtonClick}>나만의 버킷리스트 추가하기</button>
      <button onClick={handleListButtonClick}>버킷리스트 모음</button>
    </>
  );
}

export default Home;
