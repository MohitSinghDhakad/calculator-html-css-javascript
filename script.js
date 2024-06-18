let string = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == "="){
            string = eval(string);
        }else if(e.target.innerHTML=="C"){
            string = "";
        }else{
            string = string + e.target.innerHTML;
        }
        document.querySelector(".inputDisplay").value=string;
    })
})


// for(let i=0; i<buttons.length; i++){
//     let button = buttons[i];
//     button.addEventListener('click', (e)=>{
//         console.log(e.target.innerHTML);
//     })
// }

