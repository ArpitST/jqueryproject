$(document).ready(function(){
	// $("#btn1").click(function(){
	$(".btn1").click(function(e){
		e.preventDefault();
		var heading = $('.head1').val();
		console.log(heading)
		$("main").append('<h1> ' +heading + '</h1>');
	});
});
