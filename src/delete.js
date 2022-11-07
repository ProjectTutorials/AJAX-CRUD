// DELETE FUNCTION
function delete_() {
  $.ajax({
    type: "DELETE",
    url: URL + ID,
    success: function () {
      var msg = "delete successful";
      console.log(msg);
      htmlOutput(msg);
    },
  });
}
