import styled from 'styled-components'

const Form = styled.form`
  label {
    display: inline-block;
    font-size: 16px;
    line-height: 18px;
    font-weight: 500;

    padding: 0;
    margin: 0 0 10px 0;
  }

  textarea {
    width: 100%;
    height: 228px;

    background: #fdfcfc;
    box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.4926);
    border-width: 0;
    border-radius: 10px;

    font-size: 16px;
    line-height: 18px;

    padding: 10px 10px 10px 10px;

    &:focus {
      outline: 0;
    }

    resize: none;
  }

  input {
    width: 100%;
    height: 48px;

    background: #fdfcfc;
    box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.4926);
    border-width: 0;
    border-radius: 10px;

    font-size: 16px;
    line-height: 18px;

    padding: 5px 10px 5px 10px;

    &:focus {
      outline: 0;
    }
  }

  p {
    margin: 5px 0 20px 0;
    padding: 0;

    font-style: italic;
    font-size: 14px;

    line-height: 25px;
    letter-spacing: 0.2px;

    text-align: justify;

    color: rgba(49, 49, 49, 0.6);
  }
`

export { Form }
