var main = function(){
	var h = new helpers();
	var line;
	var attribute = "li";
	var content = {id:"", input:"", category:"", numbers:"", index:"", colored:false};
	var index = false;

	var items = new Array();
	var counter = 0;

	var schedule = new Planer();


	//Workout Cloud
	var workouts = new Array();
	var workout = [
		{id:0, title:"Push ups", color:"black"},
		{id:1, title:"Pull ups", color:"red"},
		{id:2, title:"Crantches", color:"pink"},
		{id:3, title:"Running", color:"white"},
		{id:4, title:"Walking", color:"black"},
		{id:5, title:"Swimming", color:"pink"},
		{id:6, title:"Joging", color:"white"},
		{id:7, title:"Climbing", color:"black"},
		{id:8, title:"Hiking", color:"pink"},
		{id:9, title:"Diving", color:"white"},
		{id:10, title:"Dancing", color:"black"}];

	cloudGenerator();


	//WHEN ENTER KEY IS PRESSED
	document.body.onkeydown = function(e){
		if(e.keyCode == 13 && h.g("input-field").value !==""){// ENTER
		   	var output = filterInput("input-field");
		    output = findAttribute(output.category);

		   	schedule.record(output.input, output.attribute);
		    var line = schedule.display(counter);

		   	if(output){
		   		$("#content").append(line);
		   		items[counter] = output;
		   	}

	        var numbers = output.numbers;
	        output.id = "#content #task_"+counter;

	        var replace = "'\\/word\\:\\w*$'";
			var regex = new RegExp(replace, "g");

	        for(number in numbers){
	        		$(output.id).html($(output.id).html().replace(output.numbers[number], function(){
	        			
	        			// if(output.numbers[number]===

	        			var string = "<span class='highlight'>"+output.numbers[number]+"</span>";
	        			return string;
	        		}));
	        }
			$(output.id).append(schedule.closeButton);

			h.g("input-field").value = "";
			counter++;
		}
	};

//UTILITIES

	function filterInput(target){
		var sNumbers =  new Array();

		content.input = h.g(target).value;
		index = content.input.indexOf("#");

		var numbers = content.input.match(/\d+/g);

		content.numbers = numbers;

		content.id = counter;		

		if(index>0){
			content.category = content.input.substr(index+1);
			content.input = content.input.substr(0, index);
	   	}else{
	   		content.category = "default";
	   	}
 		return content;
	}

	function findAttribute(category){
	   	switch(category){
	   		case "u":
	   			content.attribute = "ul";
	   			break;
	   		case "t":
	   			content.attribute = "h3";
	   			break;	   		
	   		default:
	   			content.attribute = "li";
	   	}
	   	return content;
   	}

	function cloudGenerator(){
		for(var i=0;i<10;i++){
			var element = h.c("span");
			element.className = "cloud-spans";
			element.innerHTML = workout[i].title; 
			h.g("cloud").append(element);
		}
	}


//LISTENERS

	$(document).on("click", ".close", function(){
		var elem = h.g(this.parentElement.id);
		$(elem).remove();
		items.splice(elem, 1);
	} );	
	
	$(document).on("click", ".cloud-spans", function(){
		var elem = this.innerHTML;
		h.g("input-field").value += " "+elem;
	} );

}