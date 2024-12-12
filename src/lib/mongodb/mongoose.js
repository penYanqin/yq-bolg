import mongoose from "mongoose";

let initialized = false;

// 设置重试的最大次数和间隔时间
const MAX_RETRIES = 50;
const RETRY_INTERVAL = 10000; // 每次重试间隔 10 秒

export async function connect() {
  mongoose.set("strictQuery", true); // 启用 strictQuery 配置

  if (initialized) return;

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      console.log(`正在尝试连接 MongoDB（第 ${attempt} 次尝试）...`);

      // 连接到 MongoDB
      await mongoose.connect(process.env.MONGODB_URI, {
        serverSelectionTimeoutMS: 60000, // 等待 MongoDB 节点响应时间
        socketTimeoutMS: 60000,         // 网络读写超时
        connectTimeoutMS: 60000,        // 初始连接超时设定
      });

      console.log("已成功连接到 MongoDB");
      initialized = true; // 确保连接只初始化一次
      break; // 如果成功连接，退出循环
    } catch (error) {
      console.error(`连接 MongoDB 失败（第 ${attempt} 次尝试）：`, error);

      if (attempt === MAX_RETRIES) {
        console.error("已达到最大重试次数，连接失败");
        process.exit(1); // 强制退出程序或根据需求进行其他操作
      } else {
        console.log(`将在 ${RETRY_INTERVAL / 1000} 秒后重试...`);
        await new Promise((resolve) => setTimeout(resolve, RETRY_INTERVAL)); // 等待重试间隔
      }
    }
  }
}
