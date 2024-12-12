/*
 * @Descripttion: 
 * @version: 
 * @Author: pyq
 * @Date: 2024-12-07 13:58:02
 * @LastEditors: pyq
 * @LastEditTime: 2024-12-12 13:58:24
 */
import mongoose from "mongoose";

let initialized = false;

export async function connect() {
  mongoose.set("strictQuery", true); // 启用 strictQuery 配置

  if (initialized) return;

  try {
    // 连接到 MongoDB，只传入必要的配置
    await mongoose.connect(process.env.MONGODB_URI,{
        useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 50000,
  socketTimeoutMS: 45000,
  connectTimeoutMS: 50000, // 连接超时设定
    });

    console.log("Connected to MongoDB");
    initialized = true; // 确保连接只初始化一次
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}
