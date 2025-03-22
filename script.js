function calculateBMI() {
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    let result = document.getElementById("result");

    if (height && weight) {
        let bmi = (weight / (height * height)).toFixed(2);
        let category = "";

        if (bmi < 18.5) category = "Underweight";
        else if (bmi >= 18.5 && bmi < 24.9) category = "Normal weight";
        else if (bmi >= 25 && bmi < 29.9) category = "Overweight";
        else category = "Obese";

        result.innerHTML = `<h3>BMI: ${bmi}</h3><h4>Category: ${category}</h4>`;
    } else {
        result.innerHTML = "<p>Please enter valid values.</p>";
    }
}
