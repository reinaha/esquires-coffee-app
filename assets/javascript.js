var isSidebarOpen = false;

function showList() {
	if (isSidebarOpen) {
		document.getElementById('nav').style.height = 100 + "vh";
		isSidebarOpen = false;
	}
	
	else {
		document.getElementById('nav').style.height = 0 + "vh";
		isSidebarOpen = true;
	}
}


$(function() {

  $(".numbers-row").append('<div class="inc button">+</div><div class="dec button">-</div>');

  $(".button").on("click", function() {

    var $button = $(this);
    var oldValue = $button.parent().find("input").val();

    if ($button.text() == "+") {
      var newVal = parseFloat(oldValue) + 1;
    } else {
     // Don't allow decrementing below zero
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 0;
      }
    }

    $button.parent().find("input").val(newVal);

  });

});