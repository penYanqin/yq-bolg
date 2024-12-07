import mongoose from "mongoose";

let initialized = false;

export async function connect() {
  mongoose.set("strictQuery", true); // 启用 strictQuery 配置

  if (initialized) return;

  try {
    // 连接到 MongoDB，只传入必要的配置
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "yq-blog", // 指定数据库名
    });

    console.log("Connected to MongoDB");
    initialized = true; // 确保连接只初始化一次
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}
