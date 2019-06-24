let modal = document.getElementById("myModal");

let content = document.getElementById("modal-content");

let btn = document.getElementById("myBtn");

let span = document.getElementsByClassName("close")[0];

btn.onclick = ()=> modal.style.display = "block";

span.onclick = ()=> modal.style.display = "none";

window.onclick = (event)=> {
  if (event.target == modal || event.target == content) {
    modal.style.display = "none";
  }
}