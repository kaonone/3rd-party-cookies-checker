export const THIRD_PARTY_ORIGIN = 'https://akropolisio.github.io';
export const THIRD_PARTY_URL = 'https://akropolisio.github.io/3rd-party-cookies-checker/';
export const FRAME_ID = '3rd-party-cookies-checker';

export const hiddenStyle = `
  height: 0;
  width: 0;
  position: absolute;
  clip: rect(0 0 0 0);
  border: 0;
`;

export enum EventData {
  CookiesSupported = 'COOKIES_SUPPORTED',
  CookiesUnsupported = 'COOKIES_UNSUPPORTED',
}
