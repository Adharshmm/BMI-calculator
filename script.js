const height = document.getElementById('customRange2');
const weight = document.getElementById('customRange1');
let genvalue = "";
height.addEventListener("input", function () {
    document.getElementById("height_display").innerHTML = height.value;
});
weight.addEventListener("input", function () {
    document.getElementById("weight_display").innerHTML = weight.value;
});
function resetInp() {
    document.getElementById("height_display").innerHTML = "0";
    document.getElementById("weight_display").innerHTML = "0";
    document.getElementById("bmiValue").innerHTML = "0";
    document.getElementById("condition").innerHTML = "Your Condition"
    height.value = 0;
    weight.value = 0;
    genvalue = "";
    var element = document.getElementById('condition')
    element.style.boxShadow = "0px 4px 1px -1px white";
    const radioButtons = document.querySelectorAll('input[type="radio"]');
        radioButtons.forEach(function(radio) {
            radio.checked = false;
        });
}

    function appendGender(x){
        genvalue = x;
        console.log(genvalue);
    }
function imputCalculate() {
    
    if (height.value != 0 && weight.value != 0 && genvalue!="") {
        let heightValue = parseFloat(height.value);
        let weightValue = parseFloat(weight.value);
        let squareOfHeight = (heightValue / 100) * (heightValue / 100);
        let caluBmi = (weightValue / squareOfHeight)
        document.getElementById("bmiValue").innerHTML = caluBmi.toFixed(2);
        let condition = "";
        if (caluBmi < 18.5) {
            condition = "Underweight";
        } else if (caluBmi >= 18.5 && caluBmi < 24.9) {
            condition = "Healthy weight";
        } else if (caluBmi >= 25 && caluBmi < 29.9) {
            condition = "Overweight";
        } else {
            condition = "Obesity";
        }
        document.querySelector(".condition").innerHTML = condition;

        let conditionElement = document.querySelector(".condition");
        conditionElement.innerHTML = condition;

        // Adjust box-shadow color based on condition
        switch (condition) {
            case "Underweight":
                conditionElement.style.boxShadow = "0px 4px 1px -1px red";
                break;
            case "Healthy weight":
                conditionElement.style.boxShadow = "0px 4px 1px -1px green";
                break;
            case "Overweight":
                conditionElement.style.boxShadow = "0px 4px 1px -1px orange";
                break;
            case "Obesity":
                conditionElement.style.boxShadow = "0px 4px 1px -1px red";
                break;
            default:
                // Handle default case if needed
                conditionElement.style.boxShadow = "0px 4px 1px -1px white";
                break;
        }
    } else {
        alert(`input your height,weight and gender`)
    }
}
