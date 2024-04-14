function main() {
    const skipButton = document.querySelector('.skip-button');
    // on click send a message to the content script listener to skip ad
    skipButton.addEventListener('click', async () => {
      // get the current active tab
      const [tab] = await chrome.tabs.query({ active: true });
  
      // send a message from the tab
      await chrome.tabs.sendMessage(tab.id, { action: 'skip' });
    });
  }
  
  main();