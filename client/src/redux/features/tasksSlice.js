import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentTask: null,
  error: null,
  loading: false,
};

const TaskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTaskStart: (state) => {
      state.loading = true;
    },
    addTaskSuccess: (state, action) => {
      state.currentTask = action.payload;
      state.loading = false;
      state.error = null;
    },
    addTaskFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    updateTaskStart: (state) => {
      state.loading = true;
    },
    updateTaskSuccess: (state, action) => {
      state.currentTask = action.payload;
      state.loading = false;
      state.error = null;
    },
    updateTaskFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    deleteTaskStart: (state) => {
      state.loading = true;
    },
    deleteTaskSuccess: (state) => {
      state.currentTask = null;
      state.loading = false;
      state.error = null;
    },
    deleteTaskFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});
export const {
  addTaskStart,
  addTaskSuccess,
  addTaskFailure,
  updateTaskStart,
  updateTaskSuccess,
  updateTaskFailure,
  deleteTaskStart,
  deleteTaskSuccess,
  deleteTaskFailure,
} = TaskSlice.actions;

export default TaskSlice.reducer;
