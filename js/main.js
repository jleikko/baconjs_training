
$(function() {
	//var inputChange = $
	var mouseMoves = $("html").asEventStream("mousemove").map(e=>[e.clientX,e.clientY]).toProperty("");
	mouseMoves.onValue(function(coords) {
		$("#hello").css("top", coords[1]).css("left", coords[0]);
	})
});