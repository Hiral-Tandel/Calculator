let string = "";

let buttons = document.querySelectorAll('.btn');

let inputt = document.querySelector('input')

Array.from(buttons).forEach((b)=>{

    b.addEventListener('click' , (e)=>{

        //console.log(e.target.innerHTML);

        if(e.target.innerHTML == '='){
            string = eval(string);
            // document.querySelector('input').value = string;
            inputt.value=string;
        }
        else if(e.target.innerHTML == 'AC'){
           string = ""
             inputt.value=string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
              inputt.value=string;
         }
        else{
            string = string + e.target.innerHTML;
            inputt.value=string;
        }

        
       
    })

})