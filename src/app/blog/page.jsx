import { PostCard } from '@/components';
import styles from './blog.module.css';
import { getPosts } from '@/lib/data';

// TODO: delete
// const getData = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
//     next: { revalidate: 3600 },
//   });

//   if (!res.ok) {
//     throw new Error('Something went wrong');
//   }

//   return res.json();
// };

const BlogPage = async () => {
  // TODO: delete
  // const posts = await getData();

  const posts = await getPosts();
  console.log('posts:', posts);
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
