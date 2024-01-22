function criptografar() {
    let inputText = document.getElementById('inputText').value.toLowerCase();
    let outputText = '';

    for (let i = 0; i < inputText.length; i++) {
        switch (inputText[i]) {
            case 'e':
                outputText += 'enter';
                break;
            case 'i':
                outputText += 'imes';
                break;
            case 'a':
                outputText += 'ai';
                break;
            case 'o':
                outputText += 'ober';
                break;
            case 'u':
                outputText += 'ufat';
                break;
            default:
                outputText += inputText[i];
        }
    }

    document.getElementById('outputText').value = outputText;
}

function descriptografar() {
    let inputText = document.getElementById('outputText').value.toLowerCase();
    let outputText = '';

    for (let i = 0; i < inputText.length; i += 4) {
        let substring = inputText.substr(i, 4);

        switch (substring) {
            case 'enter':
                outputText += 'e';
                break;
            case 'imes':
                outputText += 'i';
                break;
            case 'ai':
                outputText += 'a';
                break;
            case 'ober':
                outputText += 'o';
                break;
            case 'ufat':
                outputText += 'u';
                break;
            default:
                outputText += substring;
        }
    }

    document.getElementById('inputText').value = outputText;
}

function copiarResultado() {
    let outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado para a área de transferência!');
}

function apagar() {
    document.getElementById('inputText').value = '';
    document.getElementById('outputText').value = '';
}
