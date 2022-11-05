// URL DECLARATION
var deleteURL = URL + ID;

// DELETE FUNCTION
function delet() {
  $.ajax({
    type: "DELETE",
    url: deleteURL,
    success: function () {
      var msg = "delete successful";
      console.log(msg);
      htmlOutput(msg);
    },
  });
}
