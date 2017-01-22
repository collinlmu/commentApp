function userCom() {
  var userName = document.getElementById("userName").value;
  var comment = document.getElementById("comment").value;

  var tweet = document.createElement("div");
  tweet.className = "bordertop";
  tweet.setAttribute("id", "tweet")
  var tweetUser = document.createElement("div");
  tweetUser.className = "borderbottom";

  var userText = document.createTextNode("username: " + userName);
  var commentText = document.createTextNode("Comment: " + comment);

  tweet.appendChild(userText);
  tweetUser.appendChild(commentText);

  var commentSection = document.getElementById("commentSection");

  var deleteButton = document.createElement("input");
  deleteButton.className = "deleteButton";
  deleteButton.setAttribute("onclick", "delete1();");
  deleteButton.setAttribute("type", "button");
  deleteButton.setAttribute("value", "delete comment");
  deleteButton.setAttribute("id", "deleteButton")


  commentSection.appendChild(tweet);
  commentSection.appendChild(tweetUser);
  commentSection.appendChild(deleteButton);

  function delete1() {
    commentSection.prependChild(tweet);
  }

}
