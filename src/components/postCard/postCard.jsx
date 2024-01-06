import Image from 'next/image';
import styles from './postCard.module.css';
import Link from 'next/link';

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src='https://images.pexels.com/photos/18515836/pexels-photo-18515836/free-photo-of-portrait-of-a-starling-standing-outdoors.jpeg'
            alt=''
            fill
            className={styles.img}
          />
        </div>

        <span className={styles.date}>06.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>title</h1>
        <p className={styles.desc}>description</p>
        <Link className={styles.link} href={`/blog/post`}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;