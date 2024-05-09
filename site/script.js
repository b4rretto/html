let card = document.getElementById("card");

// Exibir a mensagem caso seja selecionado o 'sim'
document.querySelector("#yes").addEventListener("click", function () {
    let question = document.getElementById("question");
    let message = document.getElementById("answer");
  
  
    question.style.display = "none";
    message.style.display = "flex";
});

// Adicionando movimento ao elemento "não" quando o mouse estiver próximo
document.querySelector("#no").addEventListener("mousemove", function (event) {
    const proximityThreshold = 20; // Define a distância de proximidade em pixels
    let mouseX = event.clientX;
    let mouseY = event.clientY;
    let noX = this.getBoundingClientRect().left + this.offsetWidth / 2;
    let noY = this.getBoundingClientRect().top + this.offsetHeight / 2;
    let distance = Math.sqrt(Math.pow(mouseX - noX, 2) + Math.pow(mouseY - noY, 2));

    if (distance < proximityThreshold) {
        let numberOfMoves = 8; // Define o número de movimentos
        let delayBetweenMoves = 300; // Define o atraso entre os movimentos em milissegundos
        let clickAttempts = 0; // Contador de tentativas de clique
    
        let move = () => {
            let width = window.innerWidth - 50;
            let height = window.innerHeight - 50;
    
            this.style.position = "absolute";
            this.style.top = Math.random() * width + "px";
            this.style.left = Math.random() * height + "px";
    
            numberOfMoves--;
           
    
            if (numberOfMoves > 0) { // Verifica se ainda há movimentos restantes
                setTimeout(move, delayBetweenMoves);
            } else {
                alert("Porque você quer clicar no não????? ta doida???"); // Exibe o alerta após todos os movimentos
            }
        };
    
        move();
    }
    
});

