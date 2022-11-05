// DATA
const DATA1 = {
  name: "Jane Doe",
  message: "This is Jane Doe",
};

// CREATE FUNCTION

function creat() {
  $.ajax({
    type: "POST",
    url: URL,
    contentType: "application/json",
    data: JSON.stringify(DATA1),
    success: function () {
      var msg = "create successful";
      console.log(msg);
      htmlOutput(msg);
    },
  });
}
