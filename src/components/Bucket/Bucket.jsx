import React from "react";
import { useDispatch } from "react-redux";
//import { deleteList } from "../../redux/modules/bucketlists";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { deleteBucket } from "../../api/bucketlists";
import { useQueryClient, useMutation } from "react-query";
import Button from "../Button";
import { BiTrash } from "react-icons/bi";
import styled from "styled-components";

function Bucket({ bucket }) {
  const CONFIRM_MESSAGE = `[삭제 확인]\n\n"${bucket.title}" 항목을 정말로 삭제하시겠습니까?\n삭제를 원치 않으시면 [취소] 버튼을 눌러주세요.`;
  const navigate = useNavigate();

  const queryClient = useQueryClient();
  const mutation = useMutation(deleteBucket, {
    onSuccess: () => {
      navigate("/lists");
      queryClient.invalidateQueries("bucketlists");
    },
  });
  const handleDetailPageLinkClick = () => {
    navigate(`/lists/${bucket.id}`);
  };

  return (
    <div>
      <BucketContainer>
        <Button
          size={"large"}
          color={"white"}
          justifyContent={"center"}
          onClick={handleDetailPageLinkClick}
        >
          <Stdiv>
            <TitleContainer>
              <Title>{bucket.title}</Title>
              <Button
                size={"small"}
                color={"green"}
                onClick={() => {
                  if (window.confirm(CONFIRM_MESSAGE))
                    mutation.mutate(bucket.id);
                }}
              >
                <BiTrash color="white" />
              </Button>
            </TitleContainer>
            <User>작성자: {bucket.nickname}</User>
          </Stdiv>
        </Button>
      </BucketContainer>
    </div>
  );
}

export default Bucket;

const TitleContainer = styled.div`
  font-size: 30px;
  width: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;
const BucketContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  color: gray;
  font-size: 15px;
  margin-left: 30px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
`;

const Stdiv = styled.div``;
