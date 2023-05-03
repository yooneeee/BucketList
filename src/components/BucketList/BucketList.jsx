import React, { useEffect, useState } from "react";
import Bucket from "../Bucket/Bucket";
import { getBucketlists } from "../../api/bucketlists";
import { useQuery } from "react-query";
import styled from "styled-components";

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
      <H1>BucketList</H1>
      <div>
        {data?.map((item) => {
          return <Bucket key={item.id} bucket={item} />;
        })}
      </div>
    </div>
  );
}

export default BucketList;

const H1 = styled.div`
  font-size: 40px;
  font-weight: bold;
  margin: 10px;
  color: #76b474;
`;
