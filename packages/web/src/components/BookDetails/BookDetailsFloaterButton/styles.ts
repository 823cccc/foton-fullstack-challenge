import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;

  justify-content: space-evenly;
  align-items: center;
`

const Text = styled.p`
  margin: 0;
  padding: 0;

  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;

  letter-spacing: 1px;

  color: #3f4043;
`

const Icon = styled.p`
  font-size: 20px;
  margin-right: 10px;

  color: #cfcbd2;
`

export { Wrapper, Text, Icon }
