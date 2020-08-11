const getBtn = document.getElementById("tickForm");

if(getBtn) {
  getBtn.addEventListener("submit", function(e) { 
    e.preventDefault(); 
    var tick = document.getElementById("ticker").value
    chrome.runtime.sendMessage({type: "sendTick", data: tick});
  })
}


chrome.runtime.onMessage.addListener(function(msg) {
	if(msg.type == "chartImg") {
    window.open(msg.data); 
    console.log(msg.data); 
  }
})