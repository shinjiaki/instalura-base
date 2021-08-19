import { css } from 'styled-components'
import theme from '../index';

const { breakpoints } = theme;

export function breakpointsMedia(cssByBreakpoints) {
  const breakpointNames = Object.keys(cssByBreakpoints);
  return breakpointNames.map((breakpointName) => {
    return css`
      @media screen and (min-width: ${breakpoints[breakpointName]}px) {
        ${cssByBreakpoints[breakpointName]}
      }
    `
  });
}