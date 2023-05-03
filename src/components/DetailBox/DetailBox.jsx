import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
import { getBucketlists } from "../../api/bucketlists";

function DetailBox() {
  const params = useParams();

  const { data } = useQuery("bucketlists", getBucketlists);
  const [foundData, setFoundData] = useState({});
  useEffect(() => {
    const foundItem = data.find((bucket) => bucket.id === params.id);
    setFoundData(foundItem);
  }, []);

  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/");
  };

  return (
    <div>
      <div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>ID : {foundData.id}</div>
          <button onClick={handleButtonClick}>이전으로</button>
        </div>
        <h1>{foundData.title}</h1>
        <main>{foundData.contents}</main>
        <h4>작성자: {foundData.nickname}</h4>
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
