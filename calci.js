let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll('button');

let text = "";
// console.log(buttons)
buttons.forEach(button => {
    console.log(button)
    button.addEventListener('click', (e) => {
        console.log(e)
        console.log(e.target)

        if (e.target.innerText === '=') {
            text = eval(text);
            input.innerText = text;

        }
        else if (e.target.innerText == 'AC') {
            text = "";
            input.innerText = text;
        }
        else
            text += e.target.innerText;
        input.value = text;



    })
})
