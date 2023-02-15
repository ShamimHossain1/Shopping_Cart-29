// Case price

// Case  quantity plus


function caseQuantity(isIncrease) {
    const getcaseQuantity = document.getElementById('case-quantity');
    const caseQuantityArray = getcaseQuantity.value;
    const caseQuantity = parseInt(caseQuantityArray);

    let NewcaseQuantity;
    if (isIncrease === true) {
        NewcaseQuantity = caseQuantity + 1;
    }
    else {
        NewcaseQuantity = caseQuantity - 1;
        if (NewcaseQuantity === -1) {
            return;
        }

    }
    getcaseQuantity.value = NewcaseQuantity;
    return NewcaseQuantity;

}

function updateCaseTotalPrice(NewcaseQuantity) {
    const getcasePrice = document.getElementById('case-price');
    const casePrice = NewcaseQuantity * 671;
    getcasePrice.innerText = casePrice;

}

document.getElementById('case-plus').addEventListener('click', function () {

    const NewcaseQuantity = caseQuantity(true);
    updateCaseTotalPrice(NewcaseQuantity);
    calculateSubTotal();


})
// Phone quantity minus

document.getElementById('case-minus').addEventListener('click', function () {

    const NewcaseQuantity = caseQuantity(false);
    updateCaseTotalPrice(NewcaseQuantity);
    calculateSubTotal();
 



})

