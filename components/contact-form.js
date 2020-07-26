import styled from "styled-components";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (values) => {
    console.log("values :>> ", values);

    const { name, company, phone, email, message } = values;

    console.log("email :>> ", email);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <div className='item'>
        <label for='name'>Name</label>
        <input name='name' ref={register({ required: true, minLength: 3, maxLength: 50 })} />
        <p className='error-msg'>{errors.name && errors.name.message}</p>
      </div>
      <div className='item'>
        <label for='company'>Company</label>
        <input name='company' ref={register({ minLength: 3, maxLength: 50 })} />
        <p className='error-msg'>{errors.company && errors.company.message}</p>
      </div>
      <div className='item'>
        <label for='phone'>Phone</label>
        <input name='phone' ref={register({ required: true, minLength: 6, maxLength: 15 })} />
        <p className='error-msg'>{errors.phone && errors.phone.message}</p>
      </div>
      <div className='item'>
        <label for='email'>Email</label>
        <input
          name='email'
          type='email'
          ref={register({
            required: "Please enter a valid email address",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Please enter a valid email address",
            },
          })}
        />
        <p className='error-msg'>{errors.email && errors.email.message}</p>
      </div>
      <div className='item'>
        <label for='message'>Message</label>
        <textarea name='message' ref={register({ required: true, minLength: 5, maxLength: 1000 })} />
        <p className='error-msg'>{errors.message && errors.message.message}</p>
      </div>
      <div className='item'>
        <button type='submit'>Submit</button>
      </div>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 800px) {
    flex-direction: column;
  }

  .item {
    flex: 0 0 45%;
    display: flex;
    flex-direction: column;
    margin: 15px;

    :nth-child(5) {
      flex: 0 0 95%;
    }

    :nth-child(6) {
      margin-top: 40px;
    }

    label {
      margin-bottom: 20px;
    }

    input,
    textarea {
      border: none;
      border-bottom: 1px solid #000;
      padding-left: 10px;
      height: 50px;
      outline: none;
      color: #787878;
      font-size: 16px;
      font-family: "Open Sans";
    }

    textarea {
      height: 200px;
    }

    .error-msg {
      color: red;
      font-size: 18px;
      margin-bottom: 0;
    }
  }
`;
