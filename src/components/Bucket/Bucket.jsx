import React from "react";
import { useDispatch } from "react-redux";
//import { deleteList } from "../../redux/modules/bucketlists";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { deleteBucket } from "../../api/bucketlists";
import { useQueryClient, useMutation } from "react-query";

function Bucket({ bucket }) {
  // 삭제 확인 용 메시지 관리
  const CONFIRM_MESSAGE = `[삭제 확인]\n\n"${bucket.title}" 항목을 정말로 삭제하시겠습니까?\n삭제를 원치 않으시면 [취소] 버튼을 눌러주세요.`;

  // hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 완료, 취소를 handling하는 함수
  //const handleSwitchButton = () => dispatch(switchTodo(todo.id));

  // [삭제] 버튼 선택 시 호출되는 함수(user의 confirmation 필요)
  /*  const handleDeleteButton = () => {
    if (window.confirm(CONFIRM_MESSAGE)) dispatch(deleteBucket(bucket.id));
  };
   */
  const queryClient = useQueryClient();
  const mutation = useMutation(deleteBucket, {
    onSuccess: () => {
      navigate("/lists");
      queryClient.invalidateQueries("bucketlists");
    },
  });

  /*   const onDeleteButtonClickHandler = async (id) => {
    await axios.delete(`http://localhost:4001/bucketlists/${id}`);
  };
 */
  // [상세보기]를 선택하는 경우 이동하는 함수
  const handleDetailPageLinkClick = () => {
    navigate(`/lists/${bucket.id}`);
  };

  return (
    <div
      onClick={handleDetailPageLinkClick}
      style={{ border: "1px solid green", margin: "20px" }}
    >
      <div>
        <h3>{bucket.title}</h3>
        {/*  <p onClick={handleDetailPageLinkClick}>[상세보기]</p> */}
      </div>
      <div height={10} />
      <p>작성자: {bucket.nickname}</p>
      <div height={20} />
      {console.log(bucket.id)}
      <div>
        <button
          onClick={() => {
            if (window.confirm(CONFIRM_MESSAGE)) mutation.mutate(bucket.id);
          }}
        >
          삭제
        </button>
        {/*  <button onClick={handleDeleteButton}>삭제</button> */}
        {/*  <button onClick={onDeleteButtonClickHandler}>삭제</button> */}
      </div>
    </div>
  );
}

export default Bucket;
