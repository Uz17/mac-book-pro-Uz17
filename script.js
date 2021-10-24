// Extra Memory Cost Update

document.getElementById('extra-memory').addEventListener('click', function () {
    document.getElementById('extra-memory-cost').innerText = 180;
    calculateTotal(180);

})
document.getElementById('regular-memory').addEventListener('click', function () {
    document.getElementById('extra-memory-cost').innerText = 0;
    calculateTotal(0);

})
// Extra Storage Cost Update 
document.getElementById('regular-storage').addEventListener('click', function () {
    document.getElementById('extra-storage-cost').innerText = 0;
    calculateTotal(0);
})
document.getElementById('extra-storage').addEventListener('click', function () {
    document.getElementById('extra-storage-cost').innerText = 100;
    calculateTotal(100);
})
document.getElementById('extra-extra-storage').addEventListener('click', function () {
    document.getElementById('extra-storage-cost').innerText = 180;
    calculateTotal(180);
})

// Delivery Cost Update 
document.getElementById('regular-delivery').addEventListener('click', function () {
    document.getElementById('delivery-cost').innerText = 0;
    calculateTotal(0);
})
document.getElementById('fast-delivery').addEventListener('click', function () {
    document.getElementById('delivery-cost').innerText = 20;
    calculateTotal(20);
})

// Total Price Update 

function calculateTotal(cost) {
    const bestPrice = document.getElementById('best-price').innerText;
    const memoryCost = document.getElementById('extra-memory-cost').innerText;
    const storageCost = document.getElementById('extra-storage-cost').innerText;
    const deliveryCost = document.getElementById('delivery-cost').innerText;
    const bestPricecost = parseFloat(bestPrice);
    const memoryCostc = parseFloat(memoryCost);
    const storageCostc = parseFloat(storageCost);
    const deliveryCostc = parseFloat(deliveryCost);
    const price = bestPricecost + memoryCostc + storageCostc + deliveryCostc;
    document.getElementById('total-cost').innerText = price;
    document.getElementById('total-costs').innerText = price;
}

// Promo 

document.getElementById('promo-button').addEventListener('click', function () {
    const discount = document.getElementById('promo');
    const totPrice = document.getElementById('total-cost');
    const tPrice = totPrice.innerText;
    const beforeDisPrice = parseFloat(tPrice);
    const code = discount.value;

    if (code == 'stevekaku') {
        const finalPrice = beforeDisPrice * 0.8;
        document.getElementById('total-cost').innerText = finalPrice;
        document.getElementById('total-costs').innerText = finalPrice;
        discount.value = '';
    }
})