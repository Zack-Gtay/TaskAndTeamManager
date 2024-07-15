import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    default: "normal",
    enum: ["high", "medium", "normal", "low"],
    required: true,
  },
  stage: {
    type: String,
    default: "todo",
    enum: ["todo", "in progress", "completed"],
  },
  activities: {
    type: String,
    default: "assigned",
    enum: [
      "assigned",
      "started",
      "in progress",
      "bug",
      "completed",
      "commented",
    ],
  },
  activity: String,
  date: {
    type: Date,
    default: new Date(),
  },
  assignedBy: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  subTasks: [
    {
      Title: String,
      date: Date,
    },
  ],
  team: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
    },
  ],
  isTrashed: {
    type: Boolean,
    default: false,
  },
});
