(function(){
  window.$commands = {};
  /* Define links */


  /* Create Commands */
  $commands.hhh = ()=> window.history.back();
})();

/* Key Event Handler */
(function() {
  const commandLength = 3;
  var keyQueue = "";
  $commands.keys = Object.keys($commands);

  document.onkeypress = function (oPEvt) {
    //console.log('key');
    var oEvent = oPEvt || window.event, nChr = oEvent.charCode, sNodeType = oEvent.target.nodeName.toUpperCase();
    if (nChr === 0 || oEvent.target.contentEditable.toUpperCase() === "TRUE" || sNodeType === "TEXTAREA" || sNodeType === "INPUT" && oEvent.target.type.toUpperCase() === "TEXT") { return true; }
    if (keyQueue.length < commandLength) {
      keyQueue += String.fromCharCode(nChr);
    }
    else if (keyQueue.length == commandLength) {
      if ($commands.keys.includes(keyQueue)) {
        $commands[keyQueue]();
        keyQueue = "";
      }
      else {
        keyQueue = keyQueue.slice(-2);
      }
    }
    else { alert("too many characters!");}
    return true;
  }
})();