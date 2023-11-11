document.getElementById("spinBtn").addEventListener("click", function () {
    const slots = document.querySelectorAll(".slot");
    const resultElement = document.getElementById("result");
    
    // Gere um número aleatório entre 0 e 2 para selecionar um slot aleatório.
    const randomIndex = Math.floor(Math.random() * 3);
    
    // Determine o resultado com base no slot selecionado.
    const selectedSlot = slots[randomIndex];
    const result = selectedSlot.textContent;
    
    // Exiba o resultado.
    resultElement.textContent = `Você ganhou no ${result}!`;
});
