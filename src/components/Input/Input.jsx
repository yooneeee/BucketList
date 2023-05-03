import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import useInput from "../../hooks/useInput";
import { addBucket } from "../../api/bucketlists";
import { useMutation, useQueryClient } from "react-query";
import styled from "styled-components";
import Button from "../Button";

function Input() {
  const queryClient = useQueryClient();
  const mutation = useMutation(addBucket, {
    onSuccess: () => {
      queryClient.invalidateQueries("bucketlists");
    },
  });

  // const bucketlists = useSelector((state) => state.bucketlists);

  const [nickname, onChangeNicknameHandler, setNickname] = useInput("");
  const [title, onChangeTitleHandler, setTitle] = useInput("");
  const [contents, onChangeContentsHandler, setContents] = useInput("");

  const handleSubmitButtonClick = (event) => {
    event.preventDefault();

    const newBucket = {
      title,
      nickname,
      contents,
      id: uuidv4(),
    };

    mutation.mutate(newBucket);
    alert("버킷리스트가 추가되었습니다!");
    setNickname("");
    setTitle("");
    setContents("");
    navigate("/lists");
  };
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/");
  };

  return (
    <St>
      <StForm onSubmit={handleSubmitButtonClick}>
        <div>
          <div>
            <InputWrap>
              닉네임
              <StInput
                id="nickname"
                label="닉네임"
                placeholder="닉네임을 입력해주세요. (5자 이내)"
                value={nickname}
                onChange={onChangeNicknameHandler}
                required
                maxLength={5}
              />
            </InputWrap>
            <InputWrap>
              제목
              <StInput
                id="title"
                label="제목"
                placeholder="제목을 입력해주세요. (20자 이내)"
                value={title}
                onChange={onChangeTitleHandler}
                required
                maxLength={20}
              />
            </InputWrap>
            <InputWrap>
              내용
              <StTextarea
                placeholder="내용을 입력해주세요. (200자 이내)"
                id="contents"
                label="내용"
                value={contents}
                onChange={onChangeContentsHandler}
                required
                maxLength={200}
                rows={20}
                cols={50}
              ></StTextarea>
            </InputWrap>
          </div>
          <ButtonWrap>
            <Button
              size="medium"
              color="green"
              justifyContent="center"
              type="submit"
            >
              제출
            </Button>
            <Button
              size="medium"
              color="green"
              justifyContent="center"
              onClick={handleButtonClick}
            >
              취소
            </Button>
          </ButtonWrap>
        </div>
      </StForm>
    </St>
  );
}
export default Input;

const StForm = styled.form`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const StInput = styled.input`
  box-sizing: border-box;
  height: 46px;
  width: 100%;
  outline: none;
  border-radius: 8px;
  padding: 0px 12px;
  font-size: 14px;
  border: 1px solid rgb(238, 238, 238);
  margin-top: 10px;
`;
const St = styled.div`
  /* height: calc(100vh - 45px); */
  background-color: rgb(255, 255, 255);
  padding: 100px;
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const StTextarea = styled.textarea`
  width: 100%;
  border: 1px solid rgb(238, 238, 238);
  padding: 12px;
  font-size: 14px;
  margin-top: 10px;
`;

const InputWrap = styled.div`
  padding-bottom: 20px;
  font-weight: bold;
`;
const ButtonWrap = styled.div`
  display: flex;
  padding: 20px;
`;
