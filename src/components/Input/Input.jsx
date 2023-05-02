import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addList } from "../../redux/modules/bucketlists";
import { useNavigate } from "react-router-dom";
import useInput from "../../hooks/useInput";

function Input() {
  const dispatch = useDispatch();
  const bucketlists = useSelector((state) => state.bucketlists);

  const [nickname, onChangeNicknameHandler, setNickname] = useInput("");
  const [title, onChangeTitleHandler, setTitle] = useInput("");
  const [contents, onChangeContentsHandler, setContents] = useInput("");

  // 에러 메시지 발생 함수
  const getErrorMsg = (errorCode, params) => {
    switch (errorCode) {
      case "01":
        return alert(
          `[필수 입력 값 검증 실패 안내]\n\n닉네임과 제목, 내용은 모두 입력돼야 합니다. 입력값을 확인해주세요.\n입력된 값(닉네임 : '${params.nickname}'제목 : '${params.title}', 내용 : '${params.contents}')`
        );
      case "02":
        return alert(
          `[내용 중복 안내]\n\n입력하신 제목('${params.title}')및 내용('${params.contents}')과 일치하는 BUCKETLIST는 이미 BUCKETLIST에 등록되어 있습니다.\n기 등록한 BUCK ITEM의 수정을 원하시면 해당 아이템의 [상세보기]-[수정]을 이용해주세요.`
        );
      default:
        return `시스템 내부 오류가 발생하였습니다. `;
    }
  };

  // form 태그 내부에서의 submit이 실행된 경우 호출되는 함수
  const handleSubmitButtonClick = (event) => {
    // submit의 고유 기능인, 새로고침(refresh)을 막아주는 역함
    event.preventDefault();

    // 닉네임과 제목, 내용이 모두 존재해야만 정상처리(하나라도 없는 경우 오류 발생)
    // "01" : 필수 입력값 검증 실패 안내
    if (!title || !contents || !nickname) {
      return getErrorMsg("01", { title, contents, nickname });
    }

    // 이미 존재하는 bucketlist 항목이면 오류
    const validationArr = bucketlists.filter(
      (item) => item.title === title && item.contents === contents
    );

    // "02" : 내용 중복 안내
    if (validationArr.length > 0) {
      return getErrorMsg("02", { title, contents });
    }

    // 추가하려는 todo를 newTodo라는 객체로 세로 만듦
    const newBucket = {
      title,
      nickname,
      contents,
      id: uuidv4(),
    };

    // todo를 추가하는 reducer 호출
    // 인자 : payload
    dispatch(addList(newBucket));

    // state 두 개를 초기화
    setNickname("");
    setTitle("");
    setContents("");
  };

  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmitButtonClick}>
        <div>
          <div margin={10}>
            닉네임
            <br />
            <input
              id="nickname"
              label="닉네임"
              placeholder="닉네임을 입력해주세요. (5자 이내)"
              value={nickname}
              onChange={onChangeNicknameHandler}
              required
              maxLength={5}
            />
            <div height={10} />
            제목
            <br />
            <input
              id="title"
              label="제목"
              placeholder="제목을 입력해주세요. (20자 이내)"
              value={title}
              onChange={onChangeTitleHandler}
              required
              maxLength={20}
            />
            <div height={10} />
            내용
            <br />
            <textarea
              placeholder="내용을 입력해주세요. (200자 이내)"
              id="contents"
              label="내용"
              value={contents}
              onChange={onChangeContentsHandler}
              required
              maxLength={200}
              rows={20}
              cols={50}
            ></textarea>
          </div>
          <div>
            <button type="submit">제출</button>
            <button onClick={handleButtonClick}>취소</button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Input;
