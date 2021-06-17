import styled from 'styled-components'

import {
  BigWavyCircle as BigWavyCircleSvg,
  BlueCircle as BlueCircleSvg,
  OutlinedBlueCircle as OutlinedBlueCircleSvg,
  RedCircle as RedCircleSvg,
  SmallWavyCircle as SmallWavyCircleSvg,
} from './icons'

const Header = styled.header`
  position: relative;

  height: 282px;
  max-height: 282px;

  background: #fff6e5;
  border-radius: 0px 0px 100px 0px;
`

const HeaderContent = styled.section`
  height: 100%;
  padding: 55px 33px 0 33px;
`

const Link = styled.a`
  &:hover {
    cursor: pointer;
  }
`

const BigWavyCircle = styled(BigWavyCircleSvg)`
  position: absolute;

  right: 0;
  top: 0;
`

const BlueCircle = styled(BlueCircleSvg)`
  position: absolute;

  left: 19.5%;
  top: 40.8%;
`

const OutlinedBlueCircle = styled(OutlinedBlueCircleSvg)`
  position: absolute;

  left: 66.15%;
  top: 30.5%;
`

const RedCircle = styled(RedCircleSvg)`
  position: absolute;

  left: 12.25%;
  top: 44.325%;
`

const SmallWavyCircle = styled(SmallWavyCircleSvg)`
  position: absolute;

  left: 64.65%;
  top: 77.3%;
`

export {
  Header,
  HeaderContent,
  Link,
  BigWavyCircle,
  BlueCircle,
  OutlinedBlueCircle,
  RedCircle,
  SmallWavyCircle,
}
