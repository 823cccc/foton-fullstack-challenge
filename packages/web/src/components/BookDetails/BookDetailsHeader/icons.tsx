import React from 'react'

type Props = {
  className?: string
}

const BlueCircle = ({ className }: Props): JSX.Element => {
  return (
    <svg
      width="63"
      height="63"
      viewBox="0 0 63 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="31.5" cy="31.5" r="31.5" fill="#00173D" />
    </svg>
  )
}

const OutlinedBlueCircle = ({ className }: Props): JSX.Element => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="13" cy="13" r="12" stroke="#4550A7" strokeWidth="2" />
    </svg>
  )
}

const RedCircle = ({ className }: Props): JSX.Element => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="7.5" cy="7.5" r="7.5" fill="#FF6978" />
    </svg>
  )
}

const SmallWavyCircle = ({ className }: Props): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="64"
      height="64"
      fill="none"
      viewBox="0 0 64 64"
      className={className}
    >
      <circle
        cx="32"
        cy="32"
        r="24"
        fill="url(#pattern0)"
        transform="rotate(25 32 32)"
      ></circle>
      <defs>
        <pattern
          id="pattern0"
          width="0.846"
          height="0.149"
          patternContentUnits="objectBoundingBox"
        >
          <use transform="scale(.02488)" xlinkHref="#image0"></use>
        </pattern>
        <image
          id="image0"
          width="34"
          height="6"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAGCAYAAACmekziAAAABGdBTUEAALGOfPtRkwAAAY5JREFUKBW9Uj1IQlEUPuf6pCQofI9+CLMhaynInwyKfrYgGgxRCyEICpyaImh0aomaJKjFagjhUVRDRJNNDv61tLokgRROiZV6T/cFwitsKjpwOYfvnPN9H/deA/xjdM4stTS19W81dw+VN0OBfDwep7o81gt9DofDTByux35bK3afh4BHAPGMgKYByIKElwjswmTCmy9G2p1+G6fqOgHaEPGItbLzp7j68pMJ2+xaU7Hw6AGiVTFTIYQ7JMhKzJgtpGI5wUFml98KvBZBogGGUug5q95qfBrOeHVeaGn77k8jst03LtxuANIkAu4hwwyv8RVEmALAK4Z40ovKdTp9UNFIlBH/KK/VloFgQcxkBLSPxCqCw05IDrHjEMJmIZISvWHGcLerj23fq+q7tv89rBNBM8oOb4IIOhjAjslkiOYTark+aBnzy6VXHgDgQSAcFKJR0ZsTDysJc4dkMB4Xk7GH+rw+a+Sl0ptLkiBXSJ7m9L2GteL0ebU/0bCpA2X3Yo/s9Ia129PBf1Z+AO3ViTcdfWOLAAAAAElFTkSuQmCC"
        ></image>
      </defs>
    </svg>
  )
}

const BigWavyCircle = ({ className }: Props): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="78"
      height="99"
      fill="none"
      viewBox="0 0 78 99"
      className={className}
    >
      <circle
        cx="67"
        cy="32"
        r="50"
        fill="url(#pattern0)"
        transform="rotate(25 67 32)"
      ></circle>
      <defs>
        <pattern
          id="pattern0"
          width="0.406"
          height="0.072"
          patternContentUnits="objectBoundingBox"
        >
          <use transform="scale(.01194)" xlinkHref="#image0"></use>
        </pattern>
        <image
          id="image0"
          width="34"
          height="6"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAGCAYAAACmekziAAAABGdBTUEAALGOfPtRkwAAAY5JREFUKBW9Uj1IQlEUPuf6pCQofI9+CLMhaynInwyKfrYgGgxRCyEICpyaImh0aomaJKjFagjhUVRDRJNNDv61tLokgRROiZV6T/cFwitsKjpwOYfvnPN9H/deA/xjdM4stTS19W81dw+VN0OBfDwep7o81gt9DofDTByux35bK3afh4BHAPGMgKYByIKElwjswmTCmy9G2p1+G6fqOgHaEPGItbLzp7j68pMJ2+xaU7Hw6AGiVTFTIYQ7JMhKzJgtpGI5wUFml98KvBZBogGGUug5q95qfBrOeHVeaGn77k8jst03LtxuANIkAu4hwwyv8RVEmALAK4Z40ovKdTp9UNFIlBH/KK/VloFgQcxkBLSPxCqCw05IDrHjEMJmIZISvWHGcLerj23fq+q7tv89rBNBM8oOb4IIOhjAjslkiOYTark+aBnzy6VXHgDgQSAcFKJR0ZsTDysJc4dkMB4Xk7GH+rw+a+Sl0ptLkiBXSJ7m9L2GteL0ebU/0bCpA2X3Yo/s9Ia129PBf1Z+AO3ViTcdfWOLAAAAAElFTkSuQmCC"
        ></image>
      </defs>
    </svg>
  )
}

export {
  BigWavyCircle,
  BlueCircle,
  OutlinedBlueCircle,
  RedCircle,
  SmallWavyCircle,
}
