import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  height: 48px;

  margin-bottom: 30px;
  padding: 15px 20px;

  background: #fdfcfc;
  box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.122623);
  border-radius: 10px;
`

const Input = styled.input`
  background: transparent;
  margin-left: 15px;
  border: 0;

  height: 48px;
  width: 100%;

  font-size: 16px;
  line-height: 18px;

  &:focus {
    outline: 0;
  }
`

const Icon = styled.p`
  padding: 0;
  color: #f0f0f0;

  &:hover {
    color: #cccccc;
  }

  transition: color 0.15s ease;
`

const Link = styled.a`
  &:hover {
    cursor: pointer;
  }
`

export { Wrapper, Input, Icon, Link }
