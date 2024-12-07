/*
 * @Descripttion: 
 * @version: 
 * @Author: pyq
 * @Date: 2024-12-07 13:58:02
 * @LastEditors: pyq
 * @LastEditTime: 2024-12-07 16:46:53
 */
import mongoose from "mongoose";

let initialized = false;

export async function connect() {
  mongoose.set("strictQuery", true); // 启用 strictQuery 配置

  if (initialized) return;

  try {
    // 连接到 MongoDB，只传入必要的配置
    await mongoose.connect(process.env.MONGODB_URI,{
      dbName: "yq-blog",
    });

    console.log("Connected to MongoDB");
    initialized = true; // 确保连接只初始化一次
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}
