let input = document.querySelector('input');
let button = document.querySelector('button');
let p = document.querySelector('p');

// let customTime = new Date();




button.addEventListener('click',changeDate);

function changeDate(){
    let pDate = new persianDate(new Date(changes));
    p.innerHTML = pDate.format('YYYY-MM-DD');
}


let changes;
input.addEventListener('change', function(event){
     changes = event.target.value;
     console.log(changes);
});