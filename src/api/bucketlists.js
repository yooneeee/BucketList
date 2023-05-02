import axios from "axios";

//조회
const getBucketlists = async () => {
  const resposnse = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/bucketlists`
  );

  return resposnse.data;
};

// 추가
const addBucket = async (newBucket) => {
  await axios.post(
    `${process.env.REACT_APP_SERVER_URL}/bucketlists`,
    newBucket
  );
};

// 삭제
const deleteBucket = async (id) => {
  await axios.delete(`${process.env.REACT_APP_SERVER_URL}/bucketlists/${id}`);
};
export { getBucketlists, addBucket, deleteBucket };
