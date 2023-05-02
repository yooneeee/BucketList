import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import styled from "styled-components";

function DetailBox() {
  const params = useParams();

  const filteredBucket = useSelector((state) => {
    return state.bucketlists.filter((item) => item.id == params.id);
  });
  useEffect(() => {
    if (filteredBucket.length <= 0 || filteredBucket.length > 1) {
      alert("올바르지 않은 접근입니다. 메인페이지로 이동합니다.");
      navigate("/");
    }
  }, []);

  const bucket = filteredBucket[0];

  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/");
  };

  return (
    <div>
      <div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>ID : {bucket.id}</div>
          <button onClick={handleButtonClick}>이전으로</button>
        </div>
        <h1>{bucket.title}</h1>
        <main>{bucket.contents}</main>
        <h4>작성자: {bucket.nickname}</h4>
      </div>
    </div>
  );
}

export default DetailBox;

const StyledDiv = styled.div`
  background-color: #fff6e8;
  padding: 20px;
`;

const StyledTable = styled.table`
  border: 1px solid black;
  margin-bottom: 20px;
`;

const StyledTh = styled.th`
  border: 1px solid black;
  padding: 5px;
`;

const StyledButton = styled.button`
  width: 200px;
  height: 50px;
  background-color: darkslategray;
  color: white;
  font-weight: 700;
  font-size: 17px;
  border: 0;
  border-radius: 13px;
  cursor: pointer;
`;

{
  /* <div>
      <StyledDiv>
        <h3>TODO 상세페이지</h3>
        <StyledTable>
          <tr>
            <StyledTh>KEY</StyledTh>
            <StyledTh>VALUE</StyledTh>
          </tr>
          <tr>
            <StyledTh>ID</StyledTh>
            <StyledTh>{bucket?.id}</StyledTh>
          </tr>
          <tr>
            <StyledTh>TITLE</StyledTh>
            <StyledTh>{bucket?.title}</StyledTh>
          </tr>
          <tr>
            <StyledTh>CONTENTS</StyledTh>
            <StyledTh>{bucket?.contents}</StyledTh>
          </tr>
        </StyledTable>
        <StyledButton onClick={handleButtonClick}>
          이전 페이지로 가기
        </StyledButton>
      </StyledDiv>
    </div> */
}
