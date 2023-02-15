// Phone price

// phone quantity plus


function phoneQuantity(isIncrease) {
    const getPhoneQuantity = document.getElementById('phone-quantity');
    const phoneQuantityArray = getPhoneQuantity.value;
    const phoneQuantity = parseInt(phoneQuantityArray);

    let NewPhoneQuantity;
    if (isIncrease === true) {
        NewPhoneQuantity = phoneQuantity + 1;
    }
    else {
        NewPhoneQuantity = phoneQuantity - 1;
        if (NewPhoneQuantity === -1) {
            return;
        }

    }
    getPhoneQuantity.value = NewPhoneQuantity;
    return NewPhoneQuantity;

}

// calculate phone quantity
function NewPhoneTotalPrice(NewPhoneQuantity){
    const getPhonePrice = document.getElementById('Phone-price');
    const PhonePrice = NewPhoneQuantity * 1363;
    getPhonePrice.innerText = PhonePrice;



}

// phone quantity plus

document.getElementById('phone-plus').addEventListener('click', function () {

    const NewPhoneQuantity = phoneQuantity(true);
    NewPhoneTotalPrice(NewPhoneQuantity)
    calculateSubTotal();



});
// Phone quantity minus

document.getElementById('phone-minus').addEventListener('click', function () {

    const NewPhoneQuantity = phoneQuantity(false);
    NewPhoneTotalPrice(NewPhoneQuantity)
    calculateSubTotal();

   



});

