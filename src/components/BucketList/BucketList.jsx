import React from "react";
import { useSelector } from "react-redux";
import Bucket from "../Bucket/Bucket";

function BucketList() {
  const bucketlists = useSelector((state) => state.bucketlists);

  /*const { isLoading, isError, data } = useQuery("todos", getTodos);

  if (isLoading) {
    return <h1>로딩중입니다...!</h1>;
  }

  if (isError) {
    return <h1>오류가 발생하였습니다...!</h1>;
  }*/
  return (
    <div>
      <h3>BucketList</h3>
      <div style={{ border: "1px solid black", margin: "10px" }}>
        {bucketlists
          /* .filter((item) => item.isDone === !isActive) */
          .map((item) => {
            return <Bucket key={item.id} bucket={item} />;
          })}
      </div>
    </div>
  );
}

export default BucketList;
