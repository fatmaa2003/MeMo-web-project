function hide() {
    console.log('here');
    document.getElementById("check-box-container").classList.add("invisible");
    confirm("undo");
    if (confirm("undo") == true) {
        text = "You pressed undo!";
      } else {
        text = "You canceled!";
        document.getElementById("check-box-container").classList.remove("invisible");
      }
      
    
}
