// Encriptar
document.getElementById('encryptBtn').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const encryptedText = encryptText(inputText);
    document.getElementById('outputText').value = encryptedText;
});

// Desencriptar
document.getElementById('decryptBtn').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const decryptedText = decryptText(inputText);
    document.getElementById('outputText').value = decryptedText;
});

// Limpiar
document.getElementById('clearBtn').addEventListener('click', function() {
    document.getElementById('outputText').value = ''; // Limpia el contenido de la salida
    document.getElementById('inputText').value = '';  // Opcional: también limpia el campo de entrada
});

// Descargar
document.getElementById('downloadBtn').addEventListener('click', function() {
    const outputText = document.getElementById('outputText').value;
    if (outputText) { // Solo descarga si hay contenido
        downloadTextAsFile(outputText);
    } else {
        alert("No hay texto encriptado para descargar.");
    }
});

// Acerca de
document.getElementById('aboutBtn').addEventListener('click', function() {
    alert("Encriptador de texto AMG diseñado por Alvaro Muñoz para el Challenges de Alura-Oracle, versión 1.0.0");
});

// Función de encriptación
function encryptText(text) {
    let encryptedText = '';
    for (let char of text) {
        encryptedText += String.fromCharCode(char.charCodeAt(0) + 3);
    }
    return encryptedText;
}

// Función de desencriptación
function decryptText(text) {
    let decryptedText = '';
    for (let char of text) {
        decryptedText += String.fromCharCode(char.charCodeAt(0) - 3);
    }
    return decryptedText;
}

// Función para descargar texto como archivo
function downloadTextAsFile(text) {
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'texto_encriptado.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

