function convertTemp() {
    // Get input values and result display element
    let tempInput = document.getElementById("temperature-input").value;
    const tempUnitBefore = document.getElementById("temp-unit-before").value;
    const tempUnitAfter = document.getElementById("temp-unit-after").value;
    const display = document.getElementById("result");

    let temp;
    let tempUnit;

    // Determine the unit for the result
    if (tempUnitAfter === "celcius") {
        tempUnit = "°C";
    } else if (tempUnitAfter === "fahrenheit") {
        tempUnit = "°F";
    }

    // Check if units are not selected
    if (tempUnitBefore === "" || tempUnitAfter === "") {
        display.textContent = "°";
    } else if (tempUnitBefore === tempUnitAfter) {
        // If units are the same, display the input value with the unit
        display.textContent = tempInput + "°";
    }

    // Convert temperature based on selected units
    if (tempUnitBefore === "fahrenheit" && tempUnitAfter === "celcius") {
        temp = (tempInput - 32) * 5 / 9;
        display.textContent = temp.toFixed(2) + tempUnit;
    } else if (tempUnitBefore === "celcius" && tempUnitAfter === "fahrenheit") {
        temp = tempInput * 9 / 5 + 32;
        display.textContent = temp.toFixed(2) + tempUnit;
    }
}
