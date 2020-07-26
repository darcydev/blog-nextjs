import Link from "next/link";
import styled from "styled-components";
import dayjs from "dayjs";
import { MdAccessTime } from "react-icons/md";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function Post({ title, coverImage, date, content, excerpt, author, slug }) {
  return (
    <StyledSection>
      <div className='content'>
        <div className='title-wrp'>
          <h1>{title}</h1>
        </div>
        <div className='img-wrp'>image</div>
        <div className='body-wrp'>{documentToReactComponents(content)}</div>
      </div>
    </StyledSection>
  );
}

const StyledSection = styled.section``;
