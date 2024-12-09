// URL del Google Apps Script
const postUrl = "https://script.google.com/macros/s/AKfycbwSSYR7qq4vHyvqPOV_ThS2cWSGfitklgGE1_cnJx4BnHq-Z8rL_NhaYJ9nQSLObOn8/exec";

// Función para enviar el POST
function sendPost() {
    const qrCode = "A7DhWBBm"; // Código QR simulado
    const result = "Permitido"; // Resultado simulado
    const timestamp = new Date().toISOString();

    fetch(postUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            qrCode: qrCode,
            result: result,
            timestamp: timestamp,
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.success) {
                document.getElementById("result").innerText = "Envío exitoso: Registro guardado.";
                console.log("Registro guardado correctamente:", data);
            } else {
                document.getElementById("result").innerText = "Error en el envío.";
                console.error("Error en el registro:", data.error);
            }
        })
        .catch((error) => {
            document.getElementById("result").innerText = "Error al conectar.";
            console.error("Error en el POST:", error);
        });
}

// Agregar evento al botón
document.getElementById("sendPost").addEventListener("click", sendPost);
