const btnEl = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const totalSpan = document.getElementById("total");

function calculateTotal() {
    
    const billValue = parseFloat(billInput.value);
    const tipValue = parseFloat(tipInput.value);

    if (!isNaN(billValue) && !isNaN(tipValue)) {
        const totalValue = billValue * (1 + tipValue / 100);
        totalSpan.innerText = `Rs ${totalValue.toFixed(2)}`;
    } else {
        totalSpan.innerText = "Enter valid numbers.";
    }
}

btnEl.addEventListener("click", calculateTotal);
