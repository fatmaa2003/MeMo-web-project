function hide(divId) {
    console.log('here');
    document.getElementById(divId).classList.add("invisible");
    confirm("undo");
    if (confirm("undo") == true) {
        text = "You pressed undo!";
      } else {
        text = "You canceled!";
        document.getElementById(divId).classList.remove("invisible");
      }
      
    
}


















