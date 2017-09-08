require("./style.css");

document.body.onload = function() {
  var field = document.createElement("input");
  field.type = "text";

  var posts = document.createElement("ul");
  field.onchange = function(event) {
    var newPost = document.createElement("li");
    var node = document.createTextNode(event.target.value);
    newPost.appendChild(node);
    posts.appendChild(newPost);
    document.body.appendChild(posts);
    event.target.value = "";
  };

  document.body.appendChild(field);
};
