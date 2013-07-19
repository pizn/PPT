(function() {

  var index = 1;
  var time = 14;
  var timeElem = $('#time');
  var slideNumElem = $('#slide-number');
  var interval2 = null;

  function start() {
    restartTimer();
    var intervalID = setInterval(function() {
      index += 1;
      restartTimer();

      if(index === 21) { 
        window.clearInterval(intervalID) 
        window.clearInterval(intervalID2) 
        timeElem.text('0');
      } else {
        impress().next();
      };
    }, 15000);
  };

  function restartTimer() {
    intervalID2 = setInterval(function() {
      timeElem.text(time);
      slideNumElem.text(index);
      time -= 1;
      if(time === 0) { 
        window.clearInterval(intervalID2) 
        time = 14;
      };
    }, 1000);
  };

  //Ignite =  {
  //  start: start
  //};

})();
