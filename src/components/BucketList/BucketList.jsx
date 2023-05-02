import React, { useEffect, useState } from "react";
import Bucket from "../Bucket/Bucket";
import { getBucketlists } from "../../api/bucketlists";
import { useQuery } from "react-query";

function BucketList() {
  const { isLoading, isError, data } = useQuery("bucketlists", getBucketlists);

  if (isLoading) {
    return <h1>로딩중입니다...!</h1>;
  }

  if (isError) {
    return <h1>오류가 발생하였습니다...!</h1>;
  }
  return (
    <div>
      <h3>BucketList</h3>
      <div style={{ border: "1px solid black", margin: "10px" }}>
        {data?.map((item) => {
          return <Bucket key={item.id} bucket={item} />;
        })}
      </div>
    </div>
  );
}

export default BucketList;
