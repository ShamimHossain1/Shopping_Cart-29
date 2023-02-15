
function getTextElementValueById(elementId) {
    const getElement = document.getElementById(elementId);
    const getElementString = getElement.innerText;
    const getElementValue = parseFloat(getElementString);
    return getElementValue;
}

// total calculations


function calculateSubTotal() {

    // subtotal

    const currentPhoneTotal = getTextElementValueById('Phone-price');
    const currentCaseTotal = getTextElementValueById('case-price');
    const subTotalPrice = currentCaseTotal + currentPhoneTotal;
    const getSubTotal = document.getElementById('sub-total');
    getSubTotal.innerText = subTotalPrice;

    // tax

    const getTax = document.getElementById('tax');
    const totalTaxFloat = (subTotalPrice * 9/100);
    const totalTax = parseFloat(totalTaxFloat);
    getTax.innerText = totalTax;

    // total
    const TotalPrice = subTotalPrice + totalTax;
    const getTotal = document.getElementById('total');
    getTotal.innerText = TotalPrice;

}






