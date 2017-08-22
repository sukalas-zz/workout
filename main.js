var main = function(){
	var h = new helpers();
	var line = "<li class='list-group-item'><button class='close' id='delete' href='#'>&times;</button></li>";
	var attribute = "li";
	var category;
	var index = false;

	h.g("input-field").onkeydown = function(e){
	   if(e.keyCode == 13){// ENTER KEY
	   	var input = h.g("input-field").value;

	   	index = input.indexOf("#");
	   	console.log(index)

	   	if(index>0){
	   		console.log("hash found in the string")
			category =  input.substr(index+1);
			input = input.substr(0, index);
	   	}else{
	   		category = "default";
	   	}

	   	console.log(category)
		

	   	switch(category){
	   		case "t":
	   			attribute = "h3";
	   			break;	   		
	   		default:
	   			attribute = "li";
	   	}
	   	
	   
	   	var line = "<"+attribute+" class='list-group-item'>"+input+"<button class='close' id='delete' href='#'>&times;</button></"+attribute+">";

	    $("#content").append(line);

		 h.g("input-field").value = "";
		}
	};

	$(document).on("click", ".close", function(){
		$("#"+this.id).parent().remove();
	} );

}