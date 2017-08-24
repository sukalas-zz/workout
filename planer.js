class Planer{
  constructor(){
  	this.content;
  	this.closeButton = "<button class='close' href='#'>&times;</button>";
  }
  
 record(content, attribute){
 	this.content = content;
 	this.attribute = attribute;
 	return this;
  }

 display(counter){
 	this.template = "<"+this.attribute+" class='list-group-item' id='task_"+counter+"'>"+this.content+"</"+this.attribute+">";

 	return this.template;
 }

}