// Image input button //

let foodImage = document.getElementById('food-img');
let inputImage = document.getElementById('image-input');

inputImage.onchange = function(){
    foodImage.src = URL.createObjectURL(inputImage.files[0]);
}


// Dish title button //

let dishTitleDoc = document.getElementById('dish-title-input');
let dishTitlebtn = document.getElementById('dish-title-bttn');


dishTitlebtn.addEventListener('click',function (){

if(dishTitleDoc.style.display === 'none'){
dishTitleDoc.style.display = 'flex';
}
else{
dishTitleDoc.style.display = 'none';
}

})


// Ingredients button and input //

let postIng = document.getElementById('ing-btn');

postIng.addEventListener('click', function(){

    let inputValue = document.getElementById('input-ingredients').value;
    let li = document.createElement('li');
    let text = document.createTextNode(inputValue);
    li.appendChild(text);
    document.getElementById('ing-list').appendChild(li);
});


// Preparation button and text area //

function showInputPrep (){

    document.getElementById('input-prep').style = 'display: flex;margin-inline: auto;width: 92%;height: 300px;margin-top: 10px;text-align: start;font-family:"Rubik",sans-serif;font-size: 20px;padding: 10px 10px 10px 10px;line-height:22px'
}