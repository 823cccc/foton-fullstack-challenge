import styled from 'styled-components'

type CoverProps = {
  url: string
}

const Cover = styled.div<CoverProps>`
  height: 153px;
  width: 100%;

  background-image: url(${(props) => props.url});

  margin-bottom: 10px;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const Title = styled.p`
  width: 100%;

  margin: 0;
  padding: 0;

  margin-bottom: 5px;

  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;

  color: rgba(49, 49, 49, 0.8);
`

const Author = styled.p`
  width: 100%;

  margin: 0;
  padding: 0;

  font-style: normal;
  font-weight: 900;
  font-size: 10px;
  line-height: 12px;

  color: rgba(49, 49, 49, 0.8);
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 15px;

  width: 99px;
`

export { Cover, Title, Author, Wrapper }
