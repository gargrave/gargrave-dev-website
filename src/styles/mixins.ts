import { css, SerializedStyles } from '@emotion/core'

export function screenSizeSm(emotionCss: SerializedStyles) {
  return css`
    @media only screen and (max-width: 768px) {
      ${emotionCss}
    }
  `
}

export function screenSizeLg(emotionCss: SerializedStyles) {
  return css`
    @media only screen and (min-width: 769px) {
      ${emotionCss}
    }
  `
}

export const cleanList = css`
  & {
    list-style: none;
  }

  ${screenSizeSm(css`
    & {
      line-height: 1.6rem;
      padding-left: 0;
    }
  `)}

  ${screenSizeLg(css`
    & {
      line-height: 1.4rem;
      padding-left: 1rem;
    }
  `)}
`
