## To replicate flash of unstyled content

For this issue: https://github.com/remix-run/remix/issues/7516#issuecomment-1737587623

1. run app with `yarn && yarn dev` (or npm commands)
2. open up browser dev tools and disable caching
   * the flash _can_ happen without the dev tools open at all but it's rarer to see since the actual computation of the styles is quicker
   * this would obviously be more problematic on a site that has more styles and content
3. Switch between the homepage and about page
4. See elements flex after the styles have been applied

video of me switching between:

https://i.imgur.com/nDN78sh.mp4