$(document).ready(function(){
	$(".btn1").click(function(e){
		e.preventDefault();
		var heading = $('.head1').val();
		// $("main").append('<section><h1>' +heading + '</h1></section>');
    $("main").append('<section><h1>' +heading + '<button onclick="MYfunction(this)">X</button>'+'</h1></section>');
		$(".select1 option").remove()
		$(".select1").append('<option value="select">select</option>');
		$(".select4 option").remove()
		$(".select4").append('<option value="select">select</option>');
		$('main section h1').each(function(index,value){
			index=index+1;									
			var head = $(this).text().replace('X','')
			$(".select1").append('<option value="'+index+'">' +head + '</option>');
			$(".select4").append('<option value="'+index+'">' +head + '</option>');
		});
    $('.formfirst')[0].reset();
	});     

	$(".button2").click(function(e){
		e.preventDefault();
		var subheading = $('.head2').val();
		var headingindex = $('.select1').val();
		$("main section:nth-child("+headingindex+")").append('<div><h2> ' +subheading + '<button onclick="MYfunction(this)">X</button>' +'</h2></div>');
    $('.formsecond')[0].reset();
		// $(".select2").append('<option>' +subheading + '</option>');
	});

// form section starts from here

	$(".select4").change(function(e){
		var headingindex = $('.select4').val();
		var hhh = headingindex-1;
		$(".select2 option").remove()
		$(".select2").append('<option value="select">Select Sub Heading</option>')
		$('main section:nth-child('+headingindex+') div h2').each(function(index2,value2){
			index2=index2+1;
			var subhead = $(this).text()
			$('.select2').append('<option value="'+index2+'">' +subhead + '</option>')
		});
	});

  $('.formfh').submit(function(e){
    e.preventDefault()
    var hjk=$(".frmhdg select").val();
    var hhh=$(".sbhdg select").val();
    var hhh = parseInt(hhh)+1;
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


    if(fminin=='checkbox'){
      var opn=opption.split(',');
      var fr = $('<p></p>')
      $(opn).each(function(key, fucntionvalue){
    		if(vaalue==fucntionvalue){
    			$(fr).append('<p><label>'+fucntionvalue+'</label><input type= '+fminin+' value='+vaalue+' class= '+claase+' name='+naaame+' selected="selected"><button onclick="MYfunction(this)">X</button></p>');
    		}
    		else{
    			$(fr).append('<p><label>'+fucntionvalue+'</label><input type= '+fminin+' value='+vaalue+' class= '+claase+' name='+naaame+'><button onclick="MYfunction(this)">X</button></p>');
    		}
    	});
      $('main section:nth-child('+hjk+') div:nth-child('+hhh+') ').append(fr);
    }	
    	
    else if(fminin=='radio'){
    	var opn=opption.split(',');
      var fr = $('<p></p>')
      $(opn).each(function(key,sval){
        if(vaalue==sval){
          $(fr).append('<p><label>'+opn[key]+'</label><input type="'+fminin+'" class = '+claase+' value="'+vaalue+'" name="'+naaame+'"  checked="checked"><button onclick="MYfunction(this)">X</button></p>')
        }
        else{
          $(fr).append('<p><label>'+opn[key]+'</label><input type="'+fminin+'" class = '+claase+' value="'+vaalue+'" name="'+naaame+'"><button onclick="MYfunction(this)">X</button></p>');
        }
      });
      $('main section:nth-child('+hjk+') div:nth-child('+hhh+') ').append(fr);
    }
    else if(fminin=='select'){
      // $('main section:nth-child('+hjk+') div:nth-child('+hhh+')').append('<p><label>'+lbbl+'</label><input type='+fminin+' name='+naaame+' placeholder='+placcehol+'  class='+claase+' value='+vaalue+'><button onclick="MYfunction(this)">X</button></p>');
      var opns=opn.split(',');
      var aws=$('<p><label>'+lbbl+'</label></p>')
      var ae=$('<select class='+claase+' name='+naaame+'><option>select</option></select>').appendTo(aws)
      var as=$('<button onclick="MYfunction(this)">X<button>').appendTo(aws);
      for(i=0; i<opns.length;i++){
        if(vaalue==opns[i]){
          $(ae).append('<option value="'+opns[i]+'" selected="selected">' +opns[i]+'</option>')
        }else
        {
          $(ae).append('<option value="'+opns[i]+'" selected="selected">' +opns[i]+'</option>')
        }
      }
    }

    else if(fminin=='textarea'){
    	$('main section:nth-child('+hjk+') div:nth-child('+hhh+')').append('<p><label>'+lbbl+'</label><input name='+naaame+' placeholder='+placcehol+' rows="4" cols="10" value='+vaalue+'><button>X</button></p>');
    }
    else {
      $('main section:nth-child('+hjk+') div:nth-child('+hhh+')').append('<p><label>'+lbbl+'</label><input type='+fminin+' name='+naaame+' placeholder='+placcehol+'  class='+claase+' value='+vaalue+'><button onclick="MYfunction(this)">X</button></p>');
    }
    
    if($(".disable").is(':checked')){
      var sss=fminin
      if(fminin=='number' || fminin=='email' || fminin=='button' || fminin=='text' || fminin=='checkbox' || fminin=='file' || fminin=='radio')
      {
        sss='input'
      }
      $('main section:nth-child('+hjk+') div:nth-child('+hhh+') p:last-child '+sss).attr('disabled','disabled');
    }

    if($(".readonlyy").is(':checked')){
      var sss=fminin
      if(fminin=='number' || fminin=='email' || fminin=='button' || fminin=='text' || fminin=='checkbox' || fminin=='file' || fminin=='radio')
      {
        sss='input'
      }
      $('main section:nth-child('+hjk+') div:nth-child('+hhh+') p:last-child '+sss).attr('readonlyy','readonlyy');
    }

    if ($(".reeqquired").is(':checked')){
      var sss=fminin
  //   $('.formfh')[0].reset();
      if(fminin=='number' || fminin=='email' || fminin=='button' || fminin=='text' || fminin=='checkbox' || fminin=='file' || fminin=='radio')
      {
        sss='input'
      }
      $('main section:nth-child('+hjk+') div:nth-child('+hhh+') p:last-child '+sss).attr('reeqquired','reeqquired');
    }
    $('.formfh')[0].reset();
  });

  // $("#btnGet").click(function(){
  //   var selectedText=$(".select3").find("option:selected").text();
  //   var selectedvalue=$(".select3").val();  
  // });

  // below code is for localstorage
  // var arra=[];
  // if(localstorage.getItem('arra')){
  //   var aa=JSON.parse(localstorage.getItem('arra'));
  //   $(aa).each(function(index,vaalue){
  //     index=index+1
  //     $('main').append('<section><h2>'+vaalue.title+'<button onclick="MYfunction(this)">X</button></h2></section>');
  //     $(".sbhdg select").append('<option value="'+index+'">'+value.title+'</option>');
  //     $(value.subheading).each(function(index1,valuee){
  //       var h=index;
  //       $('main section:nth-child('+h+')').append('<div><h3>'+valuee.subtitle+'<button onclick="MYfunction(this)">X</button></h3></div>');
  //       $(valuee.form).each(function(index2,vaalue2){
  //         if(vaalue2.input=='select'){
  //           var value=$('.valuee').val()
  //           var opns=vaalue2.option
  //           var aws=$('<p><label>'+vaalue2.label+'</label></p>')
  //           var ae=$('<select claase='+vaalue2.claase+' name='+vaalue2.naaame+'><option>select</option>+'</select>').appendTo(aws);
  //         }
  //       })
  //     })  
  //   })
  // }
})

function MYfunction(thise){
  var q =$(thise).parent().remove()
}