let number = 0;
function control(id) {
    document.getElementById('num').innerText = id;
}
function add() {
    number++; //adding number
    control(number);
}
function minus() {
   if (number == 0) {
       number = 0;
   }else{
    number--; //removing number
    control(number);
   }
}