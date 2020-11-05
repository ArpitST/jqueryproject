$(document).ready(function(){
	$(".btn1").click(function(e){
		e.preventDefault();
		var heading = $('.head1').val();
		$("main").append('<section><h1>' +heading + '</h1></section>');
		$(".select1 option").remove()
		$(".select1").append('<option value="select">select</option>' )
		$('main section h1').each(function(index,value){
			index=index+1;
			var head = $(this).text()
			$(".select1").append('<option value="'+index+'">' +head + '</option>');
		})
	});

	$(".button2").click(function(e){
		e.preventDefault();
		var subheading = $('.head2').val();
		var headingindex = $('.select1').val();
		console.log(subheading);
		console.log(headingindex);
		$("main section:nth-child("+headingindex+")").append('<div><h2> ' +subheading + '</h2></div>');
		$(".select2").append('<option>' +subheading + '</option>');
	});

// till above is correct

	$(".btn3").click(function(e){
		e.preventDefault();
		var heading=$('.head3').val();
		$("main section").append('<h3> ' +heading + '</h3>');
		$(".select3").append('<option>' +heading + '</option>');
	});
    
	// to check button value select
    // $(".select3").on('click',function(e){
    // 	output=$('input[name=option]:checked').val();
    // 	document.querySelector('.output').textContent=output;
    // });     
});




