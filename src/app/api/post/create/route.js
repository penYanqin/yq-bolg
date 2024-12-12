/*
 * @Descripttion: 
 * @version: 
 * @Author: pyq
 * @Date: 2024-12-11 10:50:14
 * @LastEditors: pyq
 * @LastEditTime: 2024-12-12 13:51:20
 */
import Post from '../../../../lib/models/post.model.js';
import { connect } from '../../../../lib/mongodb/mongoose.js';
import { currentUser } from '@clerk/nextjs/server';
export const POST = async (req) => {
  const user = await currentUser();
  
    await connect();
    const data = await req.json();
    console.log(data);
    if (
      !user ||
      user.publicMetadata.userMongoId !== data.userMongoId ||
      user.publicMetadata.isAdmin !== true
    ) {
      return new Response('Unauthorized', {
        status: 401,
      });
    }
    const slug = data.title
      .split(' ')
      .join('-')
      .toLowerCase()
      .replace(/[^a-zA-Z0-9-]/g, '');
      console.log(slug);
      
    const newPost = await Post.create({
      userId: user.publicMetadata.userMongoId,
      content: data.content,
      title: data.title,
      image: data.image,
      category: data.category,
      slug,
    });
    await newPost.save();
    return new Response(JSON.stringify(newPost), {
      status: 200,
    });

};
