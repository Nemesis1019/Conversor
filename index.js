function convertMetersToFeet() {
    const metersInput = parseFloat(document.getElementById('metersInput').value);
    const feet = metersInput * 3.28;
    document.getElementById('ResultM').textContent = `${metersInput} metros son aproximadamente ${feet.toFixed(2)} pies.`;
}

function convertCelsiusToFahrenheit() {
    const celsiusInput = parseFloat(document.getElementById('celsiusInput').value);
    const fahrenheit = (celsiusInput*9/5)   + 32;
    document.getElementById('ResultC').textContent = `${celsiusInput} grados Celsius son aproximadamente ${fahrenheit.toFixed(2)} grados Fahrenheit.`;
}

function convertKilogramsToOunces() {
    const kilogramsInput = parseFloat(document.getElementById('kilogramsInput').value);
    const ounces = kilogramsInput * 35.274;
    document.getElementById('ResultK').textContent = `${kilogramsInput} kilogramos son aproximadamente ${ounces.toFixed(2)} onzas.`;
}