class Planer{
  constructor(){
  	this.content;
  }
  
 record(content, attribute){
 	this.content = content;
 	this.attribute = attribute;

 	return this;
  }
 display(counter){
 	this.template = "<"+this.attribute+" class='list-group-item' id="+counter+">"+this.content+" <button class='close' href='#'>&times;</button></"+this.attribute+">";

 	return this.template;
 }

}