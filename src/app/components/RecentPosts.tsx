/*
 * @Descripttion:
 * @version:
 * @Author: pyq
 * @Date: 2024-12-12 12:48:33
 * @LastEditors: pyq
 * @LastEditTime: 2024-12-12 17:17:37
 */
import PostCard from "./PostCard";
interface Post {
  _id: string;
  // 根据实际情况添加其他字段
}
export default async function RecentPosts({ limit }) {
  let posts: Post[] = [];
  try {
    const result = await fetch(process.env.URL + "/api/post/get", {
      method: "POST",
      body: JSON.stringify({ limit: limit, order: "desc" }),
      cache: "no-store",
    });
    const data = await result.json();
    posts = data.posts as Post[];
  } catch (error) {
    console.log("Error getting post:", error);
  }
  return (
    <div className="flex flex-col justify-center items-center mb-5">
      <h1 className="text-xl mt-5">Recent articles</h1>
      <div className="flex flex-wrap gap-5 mt-5 justify-center">
        {posts && posts.map((post) => <PostCard key={post._id} post={post} />)}
      </div>
    </div>
  );
}
