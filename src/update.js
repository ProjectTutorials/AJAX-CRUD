// URL DECLARATION
var updateURL = URL + ID;

// DATA
const DATA2 = {
  name: "John",
  message: "This is John",
};

// UPDATE FUNCTION
function updat() {
  $.ajax({
    type: "PUT",
    url: updateURL,
    contentType: "application/json",
    data: JSON.stringify(DATA2),
    success: function () {
      var msg = "update successful";
      console.log(msg);
      htmlOutput(msg);
    },
  });
}
