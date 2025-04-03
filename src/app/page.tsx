import Link from "next/link";
import { getPostMetadata } from "../lib/posts";

export default function Home() {
  const posts = getPostMetadata();

  return (
    <div className="blog-content">
      <div className="name">Amin Khorrami</div>
      <p className="description">
        Software engineer. Working on web technologies.
        <br />
        You can find me in: <a href="https://amin.contact">https://amin.contact</a>
      </p>
      <h1>Latest Thoughts</h1>

      {posts.map((post) => (
        <div key={post.slug} className="post-preview">
          <h2 className="post-title">
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </h2>
          <p className="post-date">{post.date}</p>
          <p>{post.excerpt}</p>
          <Link href={`/posts/${post.slug}`} className="label">
            Read more →
          </Link>
        </div>
      ))}

      {posts.length === 0 && <p>No posts yet. Check back soon!</p>}
    </div>
  );
}
