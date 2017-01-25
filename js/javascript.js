function userCom() {
  //save information entered by user
  var userName = document.getElementById("userName").value;
  var comment = document.getElementById("comment").value;

  //create the spaces, divs, to hold the user information and assign classes and id's
  var tweet = document.createElement("div");
  tweet.className = "borderbottom";
  tweet.setAttribute("id", "tweet")
  var tweetUser = document.createElement("div");
  tweetUser.className = "bordertop";

  //make the saved information into texts that can be given placed in spaces
  var userText = document.createTextNode("username: " + userName);
  var commentText = document.createTextNode("Comment: " + comment);

  //give the saved information to the divs in the form of texts
  tweet.appendChild(commentText);
  tweetUser.appendChild(userText);

  //select the space on the HTML for the saved user information, that has been transformed into text and placed in divs
  var commentSection = document.getElementById("commentSection");

  var deleteButton = document.createElement("input");
  deleteButton.className = "deleteButton";
  deleteButton.setAttribute("onclick", "delete1();");
  deleteButton.setAttribute("type", "button");
  deleteButton.setAttribute("value", "delete comment");
  deleteButton.setAttribute("id", "deleteButton")


  //place the divs hodling the user information into the HTML
  commentSection.appendChild(tweetUser);
  commentSection.appendChild(tweet);
  commentSection.appendChild(deleteButton);




}
function delete1() {
  var delete1 = document.getElementById("commentSection");
  var toBeDeleted = document.getElementById("tweet");
  var toBeDeleted1 = document.getElementById("deleteButton");

  delete1.removeChild(toBeDeleted);
  delete1.removeChild(toBeDeleted1);

}
