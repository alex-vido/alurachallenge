const crytografyButton = document.querySelector(".btn-encrypt");
const btnCopy =  document.querySelector(".btn-copy");
const outputContent = document.querySelector("output-content")

const showHidden = function() {
    if (btnCopy.style.display === "none") {
        btnCopy.style.display = "block";
        outputContent.style.display = "none";
    } else {
        btnCopy.style.display = "none";
        outputContent.style.display = "block";
    }
}

crytografyButton.onclick = function() {
    let text = document.querySelector(".text-input").value;
    if (/[A-Z-À-Ú-à-ú]/.test(text)){
        alert("Apenas letras minúsculas e sem acento!");
    }    
    else {
        let cryptography = text
        .replaceAll(/e/g, "enter")
        .replaceAll(/i/g, "imes")
        .replaceAll(/a/g, "ai")
        .replaceAll(/o/g, "ober")
        .replaceAll(/u/g, "ufat");

        document.querySelector(".text-output").innerHTML = cryptography;
        document.querySelector(".text-input").value = "";
        let hidden = document.getElementsByClassName("hidden");
        let show = document.getElementsByClassName("show");

        for(i =0;i < hidden.length ; i++){
            hidden[i].style.display = "block";
        }
        for(i =0;i < show.length ; i++){
            show[i].style.display = "none";
        }
    };
}

const decryptButton = document.querySelector(".btn-decrypt");

decryptButton.onclick = function() {
    let textencrypt = document.querySelector(".text-input").value;
    let decryptofy = textencrypt.replace(/enter/g, "e"); 
    decryptofy = decryptofy.replace(/imes/g, "i");
    decryptofy = decryptofy.replace(/ai/g, "a");
    decryptofy = decryptofy.replace(/ober/g, "o");
    decryptofy = decryptofy.replace(/ufat/g, "u");

    document.querySelector(".text-output").innerHTML = decryptofy;
}

const textOutput = document.querySelector(".text-output");
btnCopy.onclick = function () {
    textOutput.select();
    navigator.clipboard.writeText(textOutput.value)
    alert("Texto copiado")
}
