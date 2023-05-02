import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const ADD_LIST = "ADD_LIST";
const DELETE_LIST = "DELETE_LIST";
//const SWITCH_TODO = "SWITCH_TODO";

const initialState = [
  {
    id: uuidv4(),
    nickname: "지윤",
    title: "혼자 여행가기",
    contents: "제주도 한 달 살기",
  },
  {
    id: uuidv4(),
    nickname: "요니",
    title: "외국어 회화 공부하기",
    contents: "외국인 친구사귀기",
  },
];

const bucketlistsSlice = createSlice({
  name: "bucklists",
  initialState,
  reducers: {
    addList: (state, action) => {
      return [...state, action.payload];
    },
    deleteList: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addList, deleteList } = bucketlistsSlice.actions;
export default bucketlistsSlice.reducer;
