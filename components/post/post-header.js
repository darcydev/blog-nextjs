import CoverImage from "./cover-image";
import PostTitle from "./post-title";

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className='mb-8 md:mb-16 -mx-5 sm:mx-0'>
        <CoverImage title={title} url={coverImage.url} />
      </div>
    </>
  );
}
