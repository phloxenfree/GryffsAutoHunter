// Delay before start
setTimeout(function() {

  const foodValues = {
    1: 2, // morsel
    2: 2, // chunk
    3: 2, // small fish
    225: 2, // grayling
    863: 2, // sedges
    2369: 2, // bone frags
    2299: 2, // raspberries
    164: 3, // grass
    6866: 2, // gold apple
    7: 1, // pear
    8: 1 // apple
  }
  
  function selectFoodItem(itemNo) {
    var element = document.querySelector(`a[href="/feed_new.php?item=${itemNo}"]`);
    element.click();
  }

  function setFeederValue(itemNo) {
    var element = document.querySelector('input[id="fillValue"]');
    element.value = 
  }
  
  // body
  
}, 2000); // Initial delay 2 seconds
