import styled from 'styled-components'

const Label = styled.p`
  font-size: 16px;
  line-height: 18px;
  font-weight: 500;

  padding: 0;
  margin: 0 0 10px 0;
`

const Input = styled.input`
  width: 100%;
  height: 48px;

  background: #fdfcfc;
  box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.4926);
  border-width: 0;
  border-radius: 10px;

  font-size: 16px;
  line-height: 18px;

  padding: 5px 10px 5px 10px;
  margin: 0 0 20px 0;

  &:focus {
    outline: 0;
  }
`

export { Label, Input }