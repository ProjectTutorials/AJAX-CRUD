// URL DECLARATION
var URL = "http://localhost:3000/Messages/";
var ID = "6366539d9749a850824f6c60";

// TO GET HTML OUTPUT
function htmlOutput(out) {
  $("body").append(
    $("<div>", {
      text: out,
    })
  );
}
