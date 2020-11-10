$(document).ready(function(){
	$(".btn1").click(function(e){
		e.preventDefault();
		var heading = $('.head1').val();
		$("main").append('<section><h1>' +heading + '</h1></section>');
		$(".select1 option").remove()
		$(".select1").append('<option value="select">select</option>');
		$(".select4 option").remove()
		$(".select4").append('<option value="select">select</option>');
		$('main section h1').each(function(index,value){
			index=index+1;									
			var head = $(this).text()
			$(".select1").append('<option value="'+index+'">' +head + '</option>');
			$(".select4").append('<option value="'+index+'">' +head + '</option>');
		});
	});

	$(".button2").click(function(e){
		e.preventDefault();
		var subheading = $('.head2').val();
		var headingindex = $('.select1').val();
		$("main section:nth-child("+headingindex+")").append('<div><h2> ' +subheading + '</h2></div>');
		// $(".select2").append('<option>' +subheading + '</option>');
	});
	

// for form section starts from here

	$(".select4").change(function(e){
		var headingindex = $('.select4').val();
		var hhh = headingindex-1;

		$(".select2 option").remove()
		$(".select2").append('<option value="select">Select Sub Heading</option>' )
		$('main section:nth-child('+headingindex+') div h2').each(function(index2,value2){
			index2=index2+1;
			var subhead = $(this).text()
			$('.select2').append('<option value="'+index2+'">' +subhead + '</option>')
		});
	});

    $('.formfh').submit(function(e){
    	e.preventDefault()
    	var hjk=$(".frmhdg select").val();
    	var hkj=$(".sbhdg select").val();
    	var hhh = parseInt(hkj)+1;
    	var fminin=$('.select3 ').val();
    	var lbbl=$('.lable').val();
    	var naaame=$('.naaaam').val();
    	var placcehol=$('.plachol').val();
    	var claase=$('.clase').val();
    	var vaalue=$('.vl').val();
    	var opption=$('.opti').val();
    	var disaablled=false;
    	var readonlyy=false;
    	var reeqquired=false; 

    	if (fminin=='checkbox'){
    		var opn=opption.split(',');
    		console.log(opn)
    		// var aws=$('<p></p>');
    		$(opn).each(function(key, fucntionvalue){
    			console.log(fucntionvalue)
    			if(vaalue==fucntionvalue){
    				$('main section:nth-child('+hjk+') div:nth-child('+hhh+')').append('<p><label>'+fucntionvalue+'</label><input type= '+fminin+' value='+vaalue+' class= '+claase+' name='+naaame+' selected="selected"><button onclick="MYfunction(this)">X</button></p>');
    			}
    			else{
    				$('main section:nth-child('+hjk+') div:nth-child('+hhh+')').append('<p><label>'+fucntionvalue+'</label><input type= '+fminin+' value='+vaalue+' class= '+claase+' name='+naaame+'><button onclick="MYfunction(this)">X</button></p>');
    			}
    		});
    	}	
    	
    	else if(fminin=='radio'){
    		var opn=opption.split(',');
    		console.log(opn)
    		// var fr=$('<p></p>');
    		$(opn).each(function(key,fucntionvalue){
    			console.log(fucntionvalue)
    			if(vaalue==fucntionvalue){
    				$('main section:nth-child('+hjk+') div:nth-child('+hhh+')').append('<p><label>'+fucntionvalue+'</label><input type="'+fminin+'" value="'+vaalue+'" class= '+claase+' name="'+naaame+'"checked="checked"><button onclick=MYfunction(this)">o</button></p>');
    			}
    			else{
    				$('main section:nth-child('+hjk+') div:nth-child('+hhh+')').append('<p><label>'+fucntionvalue+'</label><input type= '+fminin+' value='+vaalue+' class='+claase+' name='+naaame+'><button onclick=MYfunction(this)">o</button></p>');
    			}
    		});
    	}

    	// till above is correct

    	else if(fminin=='text'){
    		var opn=opption.split(',');
    		console.log(opn)
    		$(opn).each(function(key,fucntionvalue){
    			console.log(fucntionvalue)
    			if(vaalue==fucntionvalue){
    				$('main section:nth-child('+hjk+') div:nth-child('+hhh+')').append('<p><label>'+fucntionvalue+'</label><input type="'+fminin+'" value="'+vaalue+'" class= '+claase+' name="'+naaame+'"checked="checked"><button onclick=MYfunction(this)">o</button></p>');
    			}
    			else{
    				$('main section:nth-child('+hjk+') div:nth-child('+hhh+')').append('<p><label>'+fucntionvalue+'</label><input type= '+fminin+' value='+vaalue+' class='+claase+' name='+naaame+'><button onclick=MYfunction(this)">o</button></p>');
    			}
    		});
    	}
    });

  //   	else if(fminin=='select'){
  //   		var optiion=opn.split(',');
  //   		var aws=$('<p><label>'+lbl+'</label></p>');
  //   		var ae=$('<select claase='+cls+'name='+nm+'><option>select</option></select>').appendTo(aws);
  //   		for (i=0; i<opns.length; i++){
  //   			if(vaaalue==opns[i]){
  //   				$(ae).append('<option value="'+opns[i]+'" selected=" selected">'+opns[i]+'</option>')
  //   			}
  //   			else{
  //   				$(ae).append('<option value="'+opns[i]+'">'+opns[i]+'</option>')
  //   			}
  //   		}
  //   	}

  //   	else if(fminin=='textarea'){
  //   		$('main section:nth-child('+fsh+') div:nth-child('+fss+')').append('<p><label>'+lbl+'</label><input name='+nm+' placeholder='+plachol+' rows="4" cols="50" value='+vlu+'><button>X</button></p>');
  //   	}

  //   	if ($(".disable").is(':checked')){
		// 	var sss = fminin
		// 	if (fminin == 'number' || fminin == 'email' || fminin == 'button' || fminin == 'text' || fminin == 'checkbox' || fminin == 'file' || fminin == 'radio')
		// 	{
		// 		sss = 'input'
		// 	}
		// 	$('main section:nth-child('+fsh+') div:nth-child('+fss+')  p:last-child '+sss).attr('disabled', 'disabled');	
		//     [fsh-1].subheading[fss-2].form.push({'dis':true})	
		// }

		// if ($(".readonly").is(':checked')){
		// 	var sss=fminin
		// 	if (fminin == 'email' || fminin == 'number' || fminin == 'text' || fminin == 'button' || fminin == 'checkbox' || fminin == 'file' || fminin == 'radio'){
		// 		ddd = 'input'
		// 	}
		// 	$('main section:nth-child('+fsh+') div:nth-child('+fss+')  p:last-child '+sss).attr('disabled', 'disabled');	
		//     [fsh-1].subheading[fss-2].form.push({'dis':true})
		// }            
  //   })

  //   $("#btnGet").click(function(){
  //   	var selectedText=$(".select3").find("option:selected").text();
  //   	var selectedvalue=$(".select3").val();
  //   });
})