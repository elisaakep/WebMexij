function cambiarColor() {
    let colores = ["lightgray", "lightblue", "lightgreen", "lightcoral", "lightyellow"];
    let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = colorAleatorio;
}
