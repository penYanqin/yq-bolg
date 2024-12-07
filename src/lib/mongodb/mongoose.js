/*
 * @Descripttion: 
 * @version: 
 * @Author: pyq
 * @Date: 2024-12-07 13:58:02
 * @LastEditors: pyq
 * @LastEditTime: 2024-12-07 14:02:26
 */

import mongoose from 'mongoose'

let initialized = false

export  async function connect() {
    mongoose.set('strictQuery', true)
  if (initialized) return

  try {
    await mongoose.connect(process.env.MONGODB_URI,{
        dbName:"yq-blog",
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log('Connected to MongoDB')
    initialized = true
  } catch (error) {
    console.error('Error connecting to MongoDB:', error)
  }
}