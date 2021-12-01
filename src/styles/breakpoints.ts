export const breakpoints = { mobile: 375, tablet: 768, desktop: 1440 };

export type Breakpoint = keyof typeof breakpoints;

export const breakpointUpTo = (breakpoint: Breakpoint) => {
  return `@media screen and (max-width:${breakpoints[breakpoint] - 1}px)`;
};

export const breakpointFrom = (breakpoint: Breakpoint) => {
  return `@media screen and (min-width:${breakpoints[breakpoint]}px)`;
};
