// GET EACH ELEMENT (UNORDERED)
function read_all() {
  $.ajax({
    type: "GET",
    url: URL,
    success: function (res) {
      console.log("success!");
      console.log(res);
      htmlOutput(res);
    },
  });
}

// GET EACH ELEMENT BY JSON
function read_one() {
  $.ajax({
    type: "GET",
    url: URL,
    success: function (res) {
      $.each(res, function (index, element) {
        console.log("success");
        htmlOutput(element.name);
      });
    },
  });
}
