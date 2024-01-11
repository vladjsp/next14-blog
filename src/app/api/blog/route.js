import { NextResponse } from 'next/server';
import { Post } from '@/libs/models';
import { connectToDb } from '@/libs';

export const GET = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    return NextResponse.json(posts);
  } catch (err) {
    console.log(err);
    return NextResponse.error();
  }
};
