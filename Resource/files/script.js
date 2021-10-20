// Copy code
function copy() {
  // Create alertMessage for succesful copy 
  var alertMessage = document.createElement(`div`);
  var inserthere = document.querySelector("main");

  /* Get the text field */
  var copyText = document.querySelector(".language-html");

   /* Copy the text inside the Code tag */
  navigator.clipboard.writeText(copyText.innerText).then(function() {
    alertMessage.setAttribute("class","alert alert-success");
    var message = document.createTextNode("Code Coppied successfully")
    alertMessage.appendChild(message);
    // /* Alert the copied text */
    inserthere.appendChild(alertMessage);
    
  }, function(err) {
    alertMessage.setAttribute("class","alert alert-danger");
    var message = document.createTextNode("Code Coppying Error")
    alertMessage.appendChild(message);
    inserthere.appendChild(alertMessage);
  });

  // Delete Alert after 5 sec
  setTimeout(function(){
    var alertMessage = document.querySelector(".alert");
    inserthere.removeChild(alertMessage)
  },3000);

}