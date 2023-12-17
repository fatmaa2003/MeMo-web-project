function hide(divId) {
    console.log('here');
    document.getElementById(divId).classList.add("invisible");
    confirm("undo");
    if (confirm("undo") == true) {
        document.getElementById(divId).classList.remove("invisible");
      } else {
        text = "You canceled!";
        text = "You pressed undo!";
      }
    }

    var acc = document.getElementsByClassName("accordion");
    var i;
    
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      }
);

    }













