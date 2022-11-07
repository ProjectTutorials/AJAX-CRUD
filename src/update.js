// DATA
const DATA2 = {
  name: "John",
  message: "I am John",
};

// UPDATE FUNCTION
function update_() {
  $.ajax({
    type: "PUT",
    url: URL + ID,
    contentType: "application/json",
    data: JSON.stringify(DATA2),
    success: function () {
      var msg = "update successful";
      console.log(msg);
      htmlOutput(msg);
    },
  });
}
