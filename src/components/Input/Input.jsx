import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import useInput from "../../hooks/useInput";
import { addBucket } from "../../api/bucketlists";
import { QueryClient } from "react-query";
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

  const [bucket, setBucket] = useState({
    nickname: "",
    title: "",
    contents: "",
  });

  const [nickname, onChangeNicknameHandler, setNickname] = useInput("");
  const [title, onChangeTitleHandler, setTitle] = useInput("");
  const [contents, onChangeContentsHandler, setContents] = useInput("");

  const getErrorMsg = (errorCode, params) => {
    switch (errorCode) {
      case "01":
        return alert(
          `[필수 입력 값 검증 실패 안내]\n\n닉네임과 제목, 내용은 모두 입력돼야 합니다. 입력값을 확인해주세요.\n
          입력된 값(닉네임 : '${params.nickname}, 제목 : '${params.title}', 내용 : '${params.contents}')`
        );
      case "02":
        return alert(
          `[내용 중복 안내]\n\n입력하신 제목('${params.title}')및 내용('${params.contents}')과 일치하는 TODO는 이미 TODO LIST에 등록되어 있습니다.\n기 등록한 BUCKET ITEM의 수정을 원하시면 해당 아이템의 [상세보기]-[수정]을 이용해주세요.`
        );
      default:
        return `시스템 내부 오류가 발생하였습니다.`;
    }
  };

  const handleSubmitButtonClick = (event) => {
    event.preventDefault();
    // 유효값 검증
    // "01" : 필수 입력값 검증 실패 안내
    if (!nickname || !title || !contents) {
      return getErrorMsg("01", { nickname, title, contents });
    }
    /*
    // 이미 존재하는 todo 항목이면 오류
    const validationArr = bucketlists.filter(
      (item) => item.title === title && item.contents === contents
    );
    // "02" : 내용 중복 안내
    if (validationArr.length > 0) {
      return getErrorMsg("02", { title, contents });
    } */

    const newBucket = {
      title,
      nickname,
      contents,
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
              onClick={handleSubmitButtonClick}
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
