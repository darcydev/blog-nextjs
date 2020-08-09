import styled from "styled-components";

export default function Person({ name, title, bio, pic, picOnRight }) {
  return (
    <StyledContainer picOnRight={picOnRight}>
      <div className='content'>
        <div className='text-wrp'>
          <h2>
            {name}, {title}
          </h2>
          {bio.map((para) => (
            <p>{para.content[0].value}</p>
          ))}
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

  @media (max-width: 800px) {
    padding: 60px 60px;
  }

  .content {
    display: flex;
    justify-content: space-between;

    @media (max-width: 800px) {
      flex-direction: column;
    }

    .text-wrp {
      order: ${({ picOnRight }) => (picOnRight ? 1 : 2)};
      width: 50%;

      @media (max-width: 800px) {
        order: 2;
        width: 100%;
      }
    }

    .img-wrp {
      order: ${({ picOnRight }) => (picOnRight ? 2 : 1)};
      margin-left: 50px;
      width: 50%;

      @media (max-width: 800px) {
        order: 1;
        width: 100%;
        margin-left: 0;
        margin-bottom: 30px;
      }

      img {
        max-width: 90%;
      }
    }
  }
`;
