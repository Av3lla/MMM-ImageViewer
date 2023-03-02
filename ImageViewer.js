/* Magic Mirror
* Module: ImageViewer
*
* By Avella https://github.com/Av3lla
* MIT Licensed.
*/
Module.register("ImageViewer", {
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
    return ["ImageViewer.css"];
  },
  
  getHeader: function() {
    return `${this.config.headerText}`;
  },
  
  getDom: function() {
    var imageDiv = document.createElement("img");
    imageDiv.className = "image";
    imageDiv.setAttribute('src', 'https://i.ytimg.com/vi/xywPSq02xKk/maxresdefault.jpg');
    imageDiv.setAttribute('width', `${this.config.width}`);
    imageDiv.setAttribute('height', `${this.config.height}`);
    imageDiv.setAttribute('alt', 'image not loaded.');
    
    return imageDiv;
  }
});