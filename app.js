function con() {
    let amount = document.getElementById('amount').value;
    let usd = 0.027;

    let ex = amount * usd;

    document.getElementById('ex').innerText = ex.toFixed(3) + "$";
    document.getElementById('result').style.display = "block";
}