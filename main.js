// Delay before start
setTimeout(function() {
  
  // Click function
  function autoClickHuntButton() {
    
    // Get button
    var element = document.querySelector('[name="huntGryff"]');
    
    if (!element || element.offsetParent == null) {
      console.log("Couldn't find the button. Stopping script.");
      clearInterval(clickInterval);
      return; // Exit
    }

    element.click();
    console.log("Clicked hunt button!");
  }

  // Initial click after 3 seconds delay
  autoClickHuntButton();

  // Then start clicking every 3 seconds
  var clickInterval = setInterval(autoClickHuntButton, 500); // Half second between clicks
}, 2000); // Initial delay 2 seconds
