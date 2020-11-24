$(document).ready(function(){
	// from below local storage code begins
	// var arra=[];
	if(localStorage.getItem('arra')){
		var jkl=JSON.parse(localStorage.getItem('arra')); //parsing the data so that data becomes a javascript object
		$(jkl).each(function(index,value){   //for specifiying a function to run for each matched element
			index=index+1
			// console.log("index"); //value is coming
			// console.log("value"); //value is coming
			$('main').append('<section><h1>'+value.title+'<button onclick="MYfunction(this)">X</button></h1></section>');
			$(".sbhdg select").append('<option value="'+index+'">'+value.title+'</option>');
			// index=index+1
			$(value.subheading).each(function(index2,value2){
				$('main section:nth-child('+index+')').append('<div><h2>'+value2.subtitle+'<button onclick="MYfunction(this)">X</button></h2></div>');
				$(value2.form).each(function(index3,value3){
					if (value3.input == 'radio' || 'checkbox'){
						if(index3==0){
							var we=index2+2; 
							var aa = value3.option
							var qq = $('<p></p>');
							$(aa).each(function(key,sval){
								if(value3.input==sval){
									$(qq).append('<label>'+sval+'</label><input type="'+value3.input+'" class = "'+value3.class+'" value="'+value3.value+'" name="'+value3.name+'"  checked="checked"><button onclick="MYfunction(this)">X</button>');
								}
								else{
									$(qq).append('<label>'+sval+'</label><input type="'+value3.input+'" class = "'+value3.class+'" value="'+value3.value+'" name="'+value3.name+'"><button onclick="MYfunction(this)">X</button>');
								}
							});
							$('main section:nth-child('+index+') div:nth-child('+we+')').append(qq);
						}
					}
					else if(value3.input=='select'){
					// else if(index3%4==0 || index3==0){
						var we=index2+2;
						// if(value3.input=='select'){
						var vaalue=$('.vl').val();
						var opn=value3.option
						console.log(opn)
						var asw=$('<p><label>'+value3.label+'</label></p>')
						var aes=$('<select class='+value3.class+' name='+value3.name+'><option>select</option></select>').appendTo(asw);
						var ass=$('<button onclick="MYfunction(thise)">X</button>').appendTo(asw);
						for (i = 0; i<opn.length; i++){
							if(vaalue==opn[i]){
								$(aes).append('<option value="'+opn[i]+'" selected="selected">'+opn[i]+'</option>')
							}
							else{
								$(aes).append('<option value="'+opn[i]+'">'+opn[i]+'</option>')
							}
						}	
						$('main section:nth-child('+index+') div:nth-child('+we+')').append(asw);
					}	
					else{
						$('main section:nth-child('+index+') div:nth-child('+we+')').append('<p><label>'+value3.label+'</label><input type="'+value3.input+'" class="'+value3.class+'" value="'+value3.value+'" name="'+value3.name+'" option = "'+value3.option+'"><button onclick="MYfunction(this)">X</button></p>');   
					}
						
					var ws=index2+2;
						// console.log("ws");
					if (value3.disaablled==true){
						$('main section:nth-child('+index+') div:nth-child('+ws+') p input').attr('disabled','disabled'); //attr: to sets or returns the values of the selected element
					}
					if (value3.readonlyy==true){
						$('main section:nth-child('+index+') div:nth-child('+ws+') p input').attr('readonlyy','readonlyy');
					}
					if (value3.reeqquired==true){
						$('main section:nth-child('+index+') div:nth-child('+ws+') p input').attr('reeqquired','reeqquired');
					} 
				});         
			});
		});
	}
	var arra=[];

	// and locla storage code ends here
	$(".formfirst").submit(function(e){
		e.preventDefault();
		var heading = $('.head1').val();
		$("main").append('<section><h1>' +heading+ '<button onclick="Myfunction(this)">X</button>'+'</h1></section>');
		$(".select1 option").remove(); //to remove values from option
		$(".select1").append('<option value="select">select</option>');
		$(".select4 option").remove();
		$(".select4").append('<option value="select">select</option>');
		$('main section h1').each(function(index,value){
			index=index+1;									
			var head = $(this).text().replace('X','');
			$(".select1").append('<option value="'+index+'">' +head + '</option>');
			$(".select4").append('<option value="'+index+'">' +head + '</option>');
		});
		//below code is for lcoal storage
		arra.push({'title':heading,'subheading':[]})
		localStorage.setItem('arra',JSON.stringify(arra)); //convert javascript object into a string
		//
		$('.formfirst')[0].reset();
	}); 

	// this is for sub heading
	$(".formsecond").submit(function(e){
		e.preventDefault();
		var subheading = $('.head2').val();
		var headingindex = $('.select1').val();
		$("main section:nth-child("+headingindex+")").append('<div><h2> ' +subheading+ '<button onclick="Myfunction(this)">X</button>'+'</h2></div>');
		// $("main section:nth-child("+headingindex+")").append('<div><h2> ' +subheading+ '<button onclick="Myfunction(this)">X</button></h2></div>');
		//below code is for local storage
		arra[headingindex-1].subheading.push({'subtitle':subheading,'form':[]})  //tfor adding new item at the end of an array element
		localStorage.setItem('arra',JSON.stringify(arra));
		// till here is code of localStorage
		$('.formsecond')[0].reset();
		// $('.button2')[0].reset(); 
	});

	$(".select4").change(function(e){
		var headingindex = $('.select4').val(); //select4 is form select class
		var hhh = headingindex-1;
		$(".select2 option").remove() //select2 is dropdown subheading class
		$(".select2").append('<option value="select">Select Sub Heading</option>');
		$('main section:nth-child('+headingindex+') div h2').each(function(index2,value2){
			index2=index2+1;
				// var subhead = $(this).text()
			var subhead = $(this).text().replace('X','') //this line is added for removing the X sign in appending
			// key=key+1
			$('.select2').append('<option value="'+index2+'">' +subhead+ '</option>');
		});
	});  

	$(".frmhdg select").submit(function(e){
		$(".sbhdg select").append('<option value="select">Select Sub Heading</option>');
		var fdn=$(".frmhdg select").val();
		$('main section:nth-child('+fdn+') div h2').each(function(key){
			var subheads = $(this).text().replace('X',''); //this line is added for removing the X sign in appending
			key=key+1
			$('.sbhdg select').append('<option value="'+key+'">' +subheads+ '</option>')
		});
	});  

	$('.formfh').submit(function(e){
		e.preventDefault()
		var hjk=$(".frmhdg select").val();
		// console.log(hjk)
		var hhh=$(".sbhdg select").val();
		// console.log(hhh)
		var hhh = parseInt(hhh)+1;
		var fminin=$('.select3 ').val();
		// console.log(fminin)
		var lbbl=$('.lable').val();
		var naaame=$('.naaaam').val();
		var placcehol=$('.plachol').val();
		var claase=$('.clase').val();
		var vaalue=$('.vl').val();
		// console.log("value"+ vaalue)
		var opption=$('.opti').val();
		// console.log(opption)
		var disaablled=false;
		var readonlyy=false;
		var reeqquired=false; 

		if(fminin=='checkbox'){
			var opn=opption.split(',');
			var asw = $('<p></p>');
			$(opn).each(function(key, fucntionvalue){
				// key=key+1;
				// console.log("function value" +fucntionvalue)
				if(vaalue==fucntionvalue){
					$(asw).append('<label>'+fucntionvalue+'</label><input type="checkbox" value="'+vaalue+'" class= "'+claase+'" name="'+naaame+'"><button onclick="MYfunction(this)">X</button>');
				}
				else{
					$(asw).append('<label>'+fucntionvalue+'</label><input type="checkbox" value="'+vaalue+'" class= "'+claase+'" name="'+naaame+'"><button onclick="MYfunction(this)">X</button>');
				}
				// console.log(asw)
				// below code is for localStorage
				arra[hjk-1].subheading[hhh-2].form.push({'input':fminin,'label':fucntionvalue,'name':naaame,'class':claase,'value':vaalue,'disaablled':false, 'readonlyy':false,'reeqquired':false}) //for adding new item at the end of the array
				// till here is the code of localStorage
			});
			$('main section:nth-child('+hjk+') div:nth-child('+hhh+') ').append(asw);
		}	
			
		else if(fminin=='radio'){
			var opn=opption.split(',');
			var qq = $('<p></p>');
			$(opn).each(function(key,sval){
				if(vaalue==sval){
					$(qq).append('<label>'+sval+'</label><input type="'+fminin+'" class = "'+claase+'" value="'+vaalue+'" name="'+naaame+'"  checked="checked"><button onclick="MYfunction(this)">X</button>');
				}
				else{
					$(qq).append('<label>'+sval+'</label><input type="'+fminin+'" class = "'+claase+'" value="'+vaalue+'" name="'+naaame+'"><button onclick="MYfunction(this)">X</button>');
				}
				// below code is for localStorage
				arra[hjk-1].subheading[hhh-2].form.push({'input':fminin,'label':sval,'name':naaame,'class':claase,'value':vaalue,'option':opn,'disaablled':false, 'readonlyy':false,'reeqquired':false})
				// till here is the code of localStorage
			});
			$('main section:nth-child('+hjk+') div:nth-child('+hhh+') ').append(qq);
		}
		else if(fminin=='select'){
			var opn=opption.split(',');
			var aws=$('<p><label>'+lbbl+'</label></p>')
			var aes=$('<select class='+claase+' name='+naaame+'><option>Select Option</option></select>').appendTo(aws);
			var als=$('<button onclick="MYfunction(this)">X<button>').appendTo(aws);
			// var als=$('<button onclick="MYfunction(this)">X<button>');
			for(i=0; i<opn.length;i++){
				if(vaalue==opn[i]){
					$(aes).append('<option value="'+opn[i]+'" selected="selected">'+opn[i]+'</option>')
				}else
				{
					$(aes).append('<option value="'+opn[i]+'">'+opn[i]+'</option>')
				}
			}
			// below code is for localStorage
				arra[hjk-1].subheading[hhh-2].form.push({'input':fminin,'label':lbbl,'name':naaame,'class':claase,'value':vaalue,'option':opn,'disaablled':false, 'readonlyy':false,'reeqquired':false})
				// till here is the code of localStorage
			$('main section:nth-child('+hjk+') div:nth-child('+hhh+') ').append(aws);
		}

		else if(fminin=='textarea'){
			$('main section:nth-child('+hjk+') div:nth-child('+hhh+')').append('<p><label>'+lbbl+'</label><textarea name='+naaame+' placeholder='+placcehol+' rows="4" cols="10" value='+vaalue+'></textarea><button>X</button></p>');
			// below code is for localStorage
			arra[hjk-1].subheading[hhh-2].form.push({'input':fminin,'label':lbbl,'name':naaame,'class':claase,'value':vaalue,'placeholder':placcehol,'disaablled':false, 'readonlyy':false,'reeqquired':false})
			// till here is the code of localStorage
		}
		else {
			$('main section:nth-child('+hjk+') div:nth-child('+hhh+')').append('<p><label>'+lbbl+'</label><input type='+fminin+' name='+naaame+' placeholder='+placcehol+'  class='+claase+' value='+vaalue+'><button onclick="MYfunction(this)">X</button></p>');
			// below code is for localStorage
			arra[hjk-1].subheading[hhh-2].form.push({'input':fminin,'label':lbbl,'name':naaame,'class':claase,'value':vaalue,'placeholder':placcehol,'disaablled':false, 'readonlyy':false,'reeqquired':false})
			// till here is the code of localStorage
		}
		
		if($(".disable").is(':checked')){
			var sss=fminin
			if(fminin=='number' || fminin=='email' || fminin=='button' || fminin=='text' || fminin=='checkbox' || fminin=='file' || fminin=='radio')
			{
				sss='input'
			}
			$('main section:nth-child('+hjk+') div:nth-child('+hhh+') p:last-child '+sss).attr('disabled','disabled');
			// below code is for localStorage
			arra[hjk-1].subheading[hhh-2].form.push({'disaablled':true})
			// till here is the code of localStorage
		}
		// else{
		//    // below code is for localStorage
		//   arra[hjk-1].subheading[hhh-2].form.push({'disaablled':false})
		//   // till here is the code of localStorage
		// }

		if($(".readonly").is(':checked')){
			var sss=fminin
			if(fminin=='number' || fminin=='email' || fminin=='button' || fminin=='text' || fminin=='checkbox' || fminin=='file' || fminin=='radio')
			{
				sss='input'
			}
			$('main section:nth-child('+hjk+') div:nth-child('+hhh+') p:last-child '+sss).attr('readOnly','readOnly');
			 // below code is for localStorage
			arra[hjk-1].subheading[hhh-2].form.push({'readonlyy':true})
			// till here is the code of localStorage
		}
		// else{
		// //    // below code is for localStorage
		//   arra[hjk-1].subheading[hhh-2].form.push({'readonlyy':false})
		// //   // till here is the code of localStorage
		// }

		if($(".required").is(':checked')){
			var sss=fminin
			if(fminin=='number' || fminin=='email' || fminin=='button' || fminin=='text' || fminin=='checkbox' || fminin=='file' || fminin=='radio')
			{
				sss='input'
			}
			$('main section:nth-child('+hjk+') div:nth-child('+hhh+') p:last-child '+sss).attr('required','required');
			 // below code is for localStorage
			arra[hjk-1].subheading[hhh-2].form.push({'reeqquired':true})
			// till here is the code of localStorage
		}
		 // below code is for localStorage
		// else{
		//     arra[hjk-1].subheading[hhh-2].form.push({'reeqquired':false})
		// }
		localStorage.setItem('arra',JSON.stringify(arra));
			// till here is the code of localStorage
		$('.formfh')[0].reset()  //this for reset form after submitting
	});
});
	
function Myfunction(thisd){
	$(thisd).parent().parent().remove(); //deleting the elements on deleting heading this one is correct
	$(".select1 option").remove(); //comemnt it again this is for remove the sub-heading from from after deleting it and is incorrect because of not appending
	$(".select1").append('<option value="select heading">Select heading</option>'); //comemnt it again this is for remove the sub-heading from from after deleting it and is incorrect because of not appending
	// below is for removing from form
	$(".select4 option").remove(); //comment it again
	$(".select4").append('<option value="select heading">Select heading</option>');


	$('main section h1').each(function(key){
		key=key+1
		var opp=$(this).text().replace("X","");
		// $(".select1 select").append('<option value="'+key+'">'+opp+'</option>');
		$(".select1").append('<option value="'+key+'">'+opp+'</option>');
		// below line is added by me for avoiding the append in form
		$(".select4").append('<option value="'+key+'">'+opp+'</option>');
	});
};

function MYfunction(thise){
		// var q =$(thise).parent().remove();
	$(thise).parent().remove();
};