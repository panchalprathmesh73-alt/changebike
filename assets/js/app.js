const cl=console.log;
const bestbike=document.getElementById('bestbike');
let onchangebike=(eva)=>{
    let val=eva.target.value;
    let allimg=[...document.querySelectorAll('.all')];
        allimg.forEach(d=>{
            d.classList.add('d-none');
        });
    let selectdiv=[...document.getElementsByClassName(val)]
    selectdiv.forEach(d=>{
        d.classList.remove('d-none')
    })
}

bestbike.addEventListener('change',onchangebike)