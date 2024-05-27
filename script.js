const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const reset = document.getElementById("reset")
const h4 = document.getElementById("h4")
var count = 0;
plus.addEventListener('click',add
)
minus.addEventListener('click',subs
)
reset.addEventListener('click',res
)
function add(){
    count++
    h4.innerText=`${count}`;
}
function subs(){
    count--
    h4.innerText=`${count}`;
}
function res(){
    count=0;
    h4.innerText=`${count}`;
}