import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
import { getBucketlists } from "../../api/bucketlists";
import Button from "../Button";

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
    navigate("/lists");
  };

  return (
    <St>
      <StLayout>
        <Stbox>
          <Stid>
            {/* <div>ID : {foundData.id}</div> */}
            <h4>작성자: {foundData.nickname}</h4>
          </Stid>
          <div>
            <StTitle>{foundData.title}</StTitle>
            <StContent>{foundData.contents}</StContent>
          </div>
          <ButtonContainer>
            <Button
              size={"medium"}
              color={"green"}
              justifyContent={"center"}
              onClick={handleButtonClick}
            >
              이전으로
            </Button>
          </ButtonContainer>
        </Stbox>
      </StLayout>
    </St>
  );
}

export default DetailBox;
const StLayout = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Stbox = styled.div`
  width: 800px;
  height: 600px;
  border: 1px solid rgb(238, 238, 238);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Stid = styled.div`
  display: flex;
  height: 80px;
  padding: 0px 24px;
  align-items: center;
  font-size: 17px;
  color: gray;
`;

const StTitle = styled.div`
  display: block;
  font-size: 40px;
  font-weight: bold;
  margin: 0.67em 0 0.67em 0;
  font-weight: bold;
`;

const StContent = styled.div`
  padding: 0px 24px;
  font-size: 20px;
`;

const St = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
