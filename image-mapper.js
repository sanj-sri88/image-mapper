var table = document.getElementById("myTable");
var imgDetailsTable = document.getElementById("imgDetailsTable");
// Load Img 
var loadFile = function (event) {
    var pointerElems = document.querySelectorAll('.pointer');
    if(pointerElems.length){
        pointerElems.forEach(function(ele){
            ele.remove()
        })
    }
    table.innerHTML = '';
    imgDetailsTable.style.display = 'none';
    var output = document.getElementById('output');
    var imgDetails = document.getElementById('imgDetails');
    var random = Math.random();
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function () {
        imgDetails.innerHTML = '<span>Image Name :' + event.target.files[0].name + '</span> | <span> Dimensions :' + this.width + " * " + this.height + '</span> | <span>MIME Type :' + event.target.files[0].type + '</span>';
        URL.revokeObjectURL(output.src)
        document.getElementById("inputFile").value = "";
    }

    
    
};
// Add Description 
document.getElementById('output').addEventListener('click', function (event) {
    let dimensionsTxt = prompt("Please enter Description", "Description Not add properly");
    let element = document.createElement("span"),
        elStyle = {
            top: event.pageY + "px",
            left: event.pageX + "px",
        };
    let row = table.insertRow(0);
    row.insertCell(0).innerHTML = event.pageY;
    row.insertCell(1).innerHTML = event.pageX;
    row.insertCell(2).innerHTML = dimensionsTxt;
    imgDetailsTable.style.display = 'block';
    imgDetailsTable.style.height = window.innerHeight - 120 +'px';
    imgDetailsTable.style.overflowY= 'scroll';
    // .style.overflowX = 'hidde'
    element.setAttribute("class", "pointer");
    Object.keys(elStyle).forEach(function (property) {
        element.style[property] = elStyle[property];
    });
    element.innerHTML = '<span class="active">' + dimensionsTxt + '</span>';
    document.body.appendChild(element);
});


function refreshImage(imgElement, imgURL){    
    // create a new timestamp 
    var timestamp = new Date().getTime();  
  
    var el = document.getElementById(imgElement);  
  
    var queryString = "?t=" + timestamp;    
   
    el.src = imgURL + queryString;    
}
