function maxNumber() {
    let num1 = +document.getElementById("num1-input").value;
    let num2 = +document.getElementById("num2-input").value;
    let num3 = +document.getElementById("num3-input").value;
    let max = num1;
    if (max > num2) {
        max = num1;
    } else max = num2;
    if (max > num3) {
        alert('Số lớn nhất là: ' + max)
    } else {
        max = num3;
        alert('Số lớn nhất là: ' + max)
    }
}