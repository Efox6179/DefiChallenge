var modal = document.getElementById('my-modal');

var modalBtn = document.getElementById('modalBtn');

var closeBtn = document.getElementsByClassName('close') [0];

// modalBtn.addEventListener('click', openModal);

modalBtn.onclick = function () {
    modal.style.display = 'block';
}

closeBtn.onclick = function(){
    modal.style.display = 'none';}

window.addEventListener('click', clickOutside);

// // function openModal(){
//     modal.style.diplay = 'block';
//     modal.innerHTML="";
//     console.log ("openModal");
// }

function closeModal(){
    modal.style.diplay = 'none';
}

function clickOutside(e){
    if(e.target == modal){
    modal.style.diplay = 'block';
  }
}

