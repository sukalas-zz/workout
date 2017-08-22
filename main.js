var main = function(){
	var h = new helpers();
	var line = "<li class='list-group-item'><button class='close' id='delete' href='#'>&times;</button></li>";
	var attribute = "li";
	var category;
	var index = false;

	var items = new Array();
	var counter = 0;

	h.g("input-field").onkeydown = function(e){
	counter++;

	   if(e.keyCode == 13){// ENTER 
	   	var input = h.g("input-field").value;
	   	index = input.indexOf("#");
	   	// console.log(index)

	   	if(index>0){
	   		// console.log("hash found in the string")
			category =  input.substr(index+1);
			input = input.substr(0, index);
	   	}else{
	   		category = "default";
	   	}

	   	switch(category){
	   		case "t":
	   			attribute = "h3";
	   			break;	   		
	   		default:
	   			attribute = "li";
	   	}
	
	   	var line = "<"+attribute+" class='list-group-item' id="+counter+">"+input+" <button class='close' href='#'>&times;</button></"+attribute+">";

	    $("#content").append(line);

		 h.g("input-field").value = "";
		}
	};

	$(document).on("click", ".close", function(){
		var elem = h.g(this.parentElement.id);
		$(elem).remove();
	} );

}