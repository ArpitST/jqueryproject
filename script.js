$(document).ready(function(){
	// $("#btn1").click(function(){
	$(".btn1").click(function(e){
		e.preventDefault();
		var heading = $('.head1').val();
		// console.log(heading)
		// $("main").append('<section> <h1>' +heading + '</h1>  </section>'); this one is correct
		$("main").append('<section><div> <h1>' +heading + '</h1> </div> </section>');
		$(".select1 option").remove()
		$(".select1").append('<option value="select">select</option>' )
		$('main section div h1').each(function(index,value){
			console.log(index,value)
			index=index+1;
			var head = $(this).text()
			console.log(head)	

			$(".select1").append('<option value="'+index+'">' +head + '</option>');
		})
		// $(".select1").append('<option>' +heading + '</option>');
	});

	$(".btn2").click(function(e){
		e.preventDefault();
		var subheading = $('.head2').val();
		// console.log(subheading)
		$("main section").append('<div> <h2> ' +subheading + '</h2> </div>');
		// $("main").append('<div> <h2> ' +heading + '</h2></div>');
		$(".select1").append('<option>' +subheading + '</option>');
	});

	$(".btn3").click(function(e){
		e.preventDefault();
		var heading=$('.head3').val();
		// console.log(heading)
		$("main section").append('<div> <h3> ' +heading + '</h3> </div>');
		$(".select1").append('<option>' +heading + '</option>');
	});
             
});




