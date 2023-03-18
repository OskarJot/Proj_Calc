const priceValue = document.querySelector('.price');
const peopleValue = document.querySelector('.numberPerson');
const chepValue = document.querySelector('.chep');
const alertMsg = document.querySelector('.alert');
const caclBtn = document.querySelector('.buttonCalc');

const checkValue = () => {
	if (priceValue.value == '' || priceValue.value == '0')
		throw (alertMsg.innerHTML = 'Musisz podać kwote do zapłaty');

	if (peopleValue.value == '' || peopleValue.value == '0')
		throw (alertMsg.innerHTML = 'Nie możesz dzielić rachunku na 0 osób');

	if (
		chepValue.value !== '10' &&
		chepValue.value !== '20' &&
		chepValue.value !== '30'
	) {
		throw (alertMsg.innerHTML = 'Musisz wybrać wysokość napiwku');
	}

	caclBill();
};

const caclBill = () => {
	const bill =
		(priceValue.value * 1 + priceValue.value * (chepValue.value * 0.01)) /
		peopleValue.value;

	const finalBill = bill.toFixed(2);

	alertMsg.innerHTML = finalBill + ' zł';
};

caclBtn.addEventListener('click', checkValue);

// (kwota do zapłaty + (kwota do zapłaty * napiwek)) / ilość osób
