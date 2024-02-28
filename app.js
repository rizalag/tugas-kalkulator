let ui = document.querySelector(".userEntry");
let FinalCalc = document.querySelector(".FinalCalc");

document.querySelectorAll("button").forEach(button => {
    button.addEventListener('click', function(){
        if (button.innerText === "="){
            let result = eval(ui.textContent.replace("%","100").replace("MOD","%"));
            FinalCalc.textContent = result;
        } else if (button.innerText ==="AC"){
            ui.textContent = "";
            FinalCalc.textContent = "";
        } else if (button.innerText === "DEL"){
            ui.textContent = ui.textContent.slice(0,-1);
        } else {
            ui.textContent += button.innerText;
        } 
    });
});