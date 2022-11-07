// GET EACH ELEMENT (UNORDERED)
function read_all() {
  $.ajax({
    type: "GET",
    url: URL,
    success: function (data) {
      console.log("success!");
      console.log(data);
      htmlOutput(data);
    },
  });
}

// GET EACH ELEMENT BY JSON
function read_one() {
  $.ajax({
    type: "GET",
    url: URL,
    success: function (data) {
      $.each(data, function (index, element) {
        console.log("success!");
        htmlOutput(element.name);
      });
    },
  });
}
