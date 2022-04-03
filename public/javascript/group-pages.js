// need to create functions that filter which posts show according to the group page topic
// when creating a post, users must select from a dropdown of 4 options: Health, Creative, Education, General
// after selecting one, then that selection is made into a string for the Post model value of "post_topic"
// when loading the 4 group pages, the comments are then generated using a function
// the for loop will loop through the comments and an if statement will generate only those that are hardcoded to match the page topic
// if the comment's attribute of "post_topic" matches, then it's set to display = block. Otherwise, it's set to display = none
