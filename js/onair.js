var IFRAMEWINDOW = document.createElement("iframe"); // create RTCS.Live in an IFRAME
IFRAMEWINDOW.src = "https://s.rtcs.live/newsreport";

IFRAMEWINDOW.onload = function(){ // start polling shortly after we connect
    setInterval(function(){
            IFRAMEWINDOW.contentWindow.postMessage({"getDetailedState":true}, "*");  // get details every second
        },1000);
}
document.body.appendChild(IFRAMEWINDOW); // add the vdo.ninja element to the page, so its active/visible

window.addEventListener("message", (e) => {
  if (e.source != IFRAMEWINDOW.contentWindow){return} // only listen for vdo.ninja events
  console.log(e.data);// print the messages inbound to the console log
});