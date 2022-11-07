// URL DECLARATION
var URL = "http://localhost:3000/Messages/";
var ID = "6368edb289f972b674aefd09";

// TO GET HTML OUTPUT
function htmlOutput(out) {
  $("body").append(
    $("<div>", {
      text: out,
    })
  );
  console.log("Printed");
}
