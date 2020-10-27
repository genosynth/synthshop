function ageInDays() {
var birthYear = prompt("What year were you born? ");
var ageInDayz = (2020 - birthYear) * 365;
var h1 = document.createElement('h1');
var textAnswer = document.createTextNode('You are ' + ageInDayz + ' days old.');
h1.setAttribute('id', 'ageInDays');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);

}

function reset(){
    document.getElementById('ageInDays').remove();
}


function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('gencat');
    image.src = "https://media3.giphy.com/media/xThuWpoG470Q0stGmI/giphy.gif";
    div.appendChild(image);

}

function resetCats() {
        
       
       document.getElementById("gencat").remove();


       
}
    
    
   
    
    
    