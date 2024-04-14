function skipAd() {
    // get the video element, and the skip button that YouTube renders
    const videoElement = document.querySelector('video');
    const skipButton = document.querySelector('button.ytp-ad-skip-button-modern');
  
    // move current video time to the end and click the skip button
    if (videoElement && isFinite(videoElement.duration)) {
      videoElement.currentTime = videoElement.duration;
    }
    if (skipButton) {
      skipButton.click();
    }
  }
  
  function main() {
    // listen to messages from the Chrome Extension APIs
    chrome.runtime.onMessage.addListener(
      async (request, sender, sendResponse) => {
        if (request.action === 'skip') {
          skipAd();
        }
      }
    );
  }
  
  main();