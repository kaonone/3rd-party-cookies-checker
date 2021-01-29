# 3rd-party-cookies-checker

Hosts external pages for [tpc-checker library](https://www.npmjs.com/package/tpc-checker) on github-pages: https://akropolisio.github.io/3rd-party-cookies-checker.

## Usage
To check if third-party cookies are enabled in browser:
* add an iframe with src attribute set to the above github-pages url,
* use checkTPC() from the tpc-checker library, or make your own implementation to read data from the 'message' event.
