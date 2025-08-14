document.addEventListener('DOMContentLoaded', () => {
    const priceInput = document.getElementById('price');
    const buyButton = document.getElementById('buyButton');
    const sellButton = document.getElementById('sellButton');
    const targetMessage = document.getElementById('target');
    const slMessage = document.getElementById('sl');
    const showPrice = document.getElementById('showPrice');


    buyButton.addEventListener('click', () => {
        // const price=parseFloat(priceInput.value).toFixed(2);
        // showMessage.textContent=calculatePriceBuy(priceInput.value,5);
        showPrice.innerHTML = priceInput.value;
        targetMessage.style.display = "block";
        slMessage.style.display = "block";

        targetMessage.innerHTML = "TG at 2% = " + calculatePriceBuy(priceInput.value, 2) + "<br>" + "TG at 3% = " + calculatePriceBuy(priceInput.value, 3) + "<br>" + "TG at 5% = " + calculatePriceBuy(priceInput.value, 5) + "<br>" + "TG at 7% = " + calculatePriceBuy(priceInput.value, 7) + "<br>" + "TG at 10% = " + calculatePriceBuy(priceInput.value, 10) + "<br>" + "TG at 12% = " + calculatePriceBuy(priceInput.value, 12) + "<br>";

        slMessage.innerHTML = "Sl at 1% = " + calculatePriceSell(priceInput.value, 1) + "<br>" + "Sl at 1.5% = " + calculatePriceSell(priceInput.value, 1.5) + "<br>" + "Sl at 2% = " + calculatePriceSell(priceInput.value, 2) + "<br>" + "Sl at 2.5% = " + calculatePriceSell(priceInput.value, 2.5) + "<br>" + "Sl at 3% = " + calculatePriceSell(priceInput.value, 3) + "<br>" + "Sl at 4% = " + calculatePriceSell(priceInput.value, 4) + "<br>" + "Sl at 5% = " + calculatePriceSell(priceInput.value, 5) + "<br>";
    })
    sellButton.addEventListener('click', () => {
        // const price = parseFloat(priceInput.value).toFixed(2);
        // targetMessage.textContent = calculatePriceSell(priceInput.value, 5) + "erg";
        showPrice.innerHTML = priceInput.value;
        targetMessage.style.display = "block";
        slMessage.style.display = "block";
        targetMessage.innerHTML = "TG at 2% = " + calculatePriceSell(priceInput.value, 1) + "<br>" + "TG at 3% = " + calculatePriceSell(priceInput.value, 1.5) + "<br>" + "TG at 5% = " + calculatePriceSell(priceInput.value, 2) + "<br>" + "TG at 7% = " + calculatePriceSell(priceInput.value, 2.5) + "<br>" + "TG at 10% = " + calculatePriceSell(priceInput.value, 3) + "<br>" + "TG at 12% = " + calculatePriceSell(priceInput.value, 4) + "<br>";

        slMessage.innerHTML = "Sl at 1% = " + calculatePriceBuy(priceInput.value, 1) + "<br>" + "Sl at 1.5% = " + calculatePriceBuy(priceInput.value, 1.5) + "<br>" + "Sl at 2% = " + calculatePriceBuy(priceInput.value, 2) + "<br>" + "Sl at 2.5% = " + calculatePriceBuy(priceInput.value, 2.5) + "<br>" + "Sl at 3% = " + calculatePriceBuy(priceInput.value, 3) + "<br>" + "Sl at 4% = " + calculatePriceBuy(priceInput.value, 4) + "<br>" + "Sl at 5% = " + calculatePriceBuy(priceInput.value, 5) + "<br>";

    })

})

function calculatePriceBuy(price, percentage) {
    const cal = (price * (percentage / 100)) + parseFloat(price);
    return cal.toFixed(2);
}
function calculatePriceSell(price, percentage) {
    const cal = parseFloat(price) - (price * (percentage / 100));
    return cal.toFixed(2);

}

