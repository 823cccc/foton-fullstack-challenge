import styled from 'styled-components'

type WrapperProps = {
  enabled?: boolean
}

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;

  align-items: center;
  text-align: center;

  color: ${(props) => (props.enabled ? '#000' : '#BFBEBF')};

  &:hover {
    color: ${(props) => (props.enabled ? '#000' : '#5A585A')};
  }

  transition: color 0.15s ease;
`

const Text = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;

  margin: 0;
  padding: 0;
`

export { Wrapper, Text }
