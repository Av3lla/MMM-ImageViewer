/* Magic Mirror
* Module: ImageViewer
*
* By Avella https://github.com/Av3lla
* MIT Licensed.
*/
Module.register("MMM-ImageViewer", {
  defaults: {
    headerText: 'Image',
    url: null,
    width: 800,
    height: 450
  },
  
  start: function() {
    // define global variables
    Log.info("Starting module: " + this.name);
    // load data
    this.getDom();
  },
  
  getStyles: function() {
    return ["MMM-ImageViewer.css"];
  },
  
  getHeader: function() {
    return `${this.config.headerText}`;
  },
  
  getDom: function() {
    var mainDiv = document.createElement("div");
    var imageDiv = document.createElement("img");
    imageDiv.className = "image";
    imageDiv.setAttribute('src', `${this.config.url}`);
    imageDiv.setAttribute('width', `${this.config.width}`);
    imageDiv.setAttribute('height', `${this.config.height}`);
    imageDiv.setAttribute('alt', 'image not loaded.');
    
    var developedbyDiv = document.createElement("div");
    developedbyDiv.className = "devby";
    developedbyDiv.innerHTML = "이지원 Github @Av3lla";

    mainDiv.append(imageDiv, developedbyDiv);

    return mainDiv;
  }
});