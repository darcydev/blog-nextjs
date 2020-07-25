import Link from "next/link";

export default function PostPreview({ title, coverImage, date, excerpt, author, slug }) {
  return (
    <div>
      <div className='mb-5'>
        <img src={coverImage.url} alt='' />
      </div>
      <h3 className='text-3xl mb-3 leading-snug'>
        <Link as={`/posts/${slug}`} href='/posts/[slug]'>
          <a>{title}</a>
        </Link>
      </h3>
      <p className='text-lg leading-relaxed mb-4'>{excerpt}</p>
    </div>
  );
}
