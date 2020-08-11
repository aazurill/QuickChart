var site; 
console.log('hello'); 
chrome.runtime.onMessage.addListener(function(msg) {
	if(msg.type == "sendTick") {
    console.log(msg.data); 
    const charturl = "https://finviz.com/chart.ashx?t="+msg.data+"&ty=c&ta=1&p=d&s=l"
    window.open(charturl, "chart_popup", "width=900,height=360,status=no,scrollbars=no,resizable=no");
    
    // To get table data
    // const xhttp = new XMLHttpRequest;
    // xhttp.open("GET","https://finviz.com/quote.ashx?t="+msg.data, true); 
    // xhttp.onloadend = (event) => {
    //   console.log("xhttp.onloadend", event, xhttp.status, xhttp.statusText, xhttp.readyState, xhttp);
    //   var parser = new DOMParser(); 
      
    //   site = parser.parseFromString(xhttp.responseText,"text/xml"); 
    //   site = document.createElement("html");
    //   site.innerHTML = xhttp.responseText;

    //   // Get Table Data
    //   var data = site.querySelectorAll(".snapshot-td2"); 
    //   for(i = 0 ; i < data.length ; i++ ) { 
    //     console.log(data[i].innerHTML); 
    //   }

    //   if(event.loaded && xhttp.response) { 
    //     Promise.resolve(xhttp.response);
    //   }
    //   else { 
    //     PromiseRejectionEvent("error"); 
    //   }
    // }
    // xhttp.send(); 
  }
})


