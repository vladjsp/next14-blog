import { PostCard } from '@/components';
import styles from './blog.module.css';
import { getPosts } from '@/libs';

export const metadata = {
  title: 'Blog Page',
  description: 'Blog description',
};

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/blog', {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error('Something went wrong');
  }

  return res.json();
};

const BlogPage = async () => {
  // Fetch posts with an api
  const posts = await getData();

  // Fetch posts without an api
  // const posts = await getPosts();

  return (
    <div className={styles.container}>
      {posts &&
        posts.map((post) => (
          <div className={styles.post} key={post.id}>
            <PostCard post={post} />
          </div>
        ))}
    </div>
  );
};

export default BlogPage;
