import styled from "styled-components";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function Person({ name, title, bio, pic, picOnRight }) {
  console.log("picOnRight :>> ", picOnRight);

  return (
    <StyledContainer picOnRight={picOnRight}>
      <div className='content'>
        <div className='text-wrp'>
          <h2>
            {name}, {title}
          </h2>
          <p>INSERT BIO...</p>
        </div>
        <div className='img-wrp'>
          <img src={pic.url} alt={name} />
        </div>
      </div>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  padding: 60px 30px;

  .content {
    display: flex;
    justify-content: space-between;

    .text-wrp {
      order: ${({ picOnRight }) => (picOnRight ? 1 : 2)};
    }

    .img-wrp {
      order: ${({ picOnRight }) => (picOnRight ? 2 : 1)};
    }
  }
`;
