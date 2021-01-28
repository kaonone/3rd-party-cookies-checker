import {
 EventData, hiddenStyle, FRAME_ID, THIRD_PARTY_URL
} from "./settings";

export function checkCookiesSupport(timeout: number = 3000): Promise<boolean> {
  return new Promise<boolean>((resolve, reject) => {
    window.addEventListener("message", (event) => {
      if (THIRD_PARTY_URL.includes(event.origin)) {
        if (event.data === EventData.CookiesSupported) {
          resolve(true);
        }
        if (event.data === EventData.CookiesUnsupported) {
          resolve(false);
        }
      }
      setTimeout(() => {
        reject(new Error("Timeout when checking third party cookies"));
      }, timeout);
    });

    let iframeElement = document.getElementById(FRAME_ID) as HTMLIFrameElement;

    if (!iframeElement) {
      iframeElement = document.createElement("iframe");
      iframeElement.setAttribute("id", FRAME_ID);
      iframeElement.style.cssText = hiddenStyle;

      document.body.appendChild(iframeElement);
    } else {
      iframeElement.src = THIRD_PARTY_URL;
    }
  });
}
