# AJAX CRUD

Demo of CRUD operations from AJAX (Asynchronous JavaScript and XML) with the help of jQuery

### Get started

1. Run the [backend](https://github.com/ProjectTutorials/message-API)

2. Open `index.html` and click on particular operations

3. Refer `console` for details of both working and code

![image](https://user-images.githubusercontent.com/109010929/200133983-d996d1dc-4463-4c72-a81e-64927b85fd8d.png)

4. NOTE:

   - for `update` and `delete` operations you require **ID**

     ![image](https://user-images.githubusercontent.com/109010929/200133916-abd0cc6d-a24f-4788-863b-cf7616742d9f.png)

   - You can get it from `console`

   - _Paste_ that id in `var ID` of `app.js`

### Screenshots

![image](https://user-images.githubusercontent.com/109010929/200134002-585944db-1d66-4baa-a88e-47a374924f70.png)

![image](https://user-images.githubusercontent.com/109010929/200134013-b755b871-9f9a-46a1-b72a-5c97040c1c0f.png)

### CRUD Operations

- [x] Create
- [x] Read
- [x] Update
- [x] Delete

### CREATE

```js
function create_() {
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
```

### READ

##### GET EACH ELEMENT (UNORDERED)

```js
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
```

##### GET EACH ELEMENT BY JSON

```js
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
```

### UPDATE

```js
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
```

### DELETE

```js
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
```

### Fetch

Also refer [Fetch-CRUD](https://github.com/ProjectTutorials/Fetch-CRUD)

### References

- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

- [W3Schools](https://www.w3schools.com/js/js_ajax_intro.asp)

- [jQuery](https://api.jquery.com/jquery.ajax/)

- [StackOverflow](https://stackoverflow.com/questions/20035101/what-does-json-stringify-do)

- [JSON](https://www.json.org/json-en.html)

- [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
