const priceValue = document.querySelector('.price');
const peopleValue = document.querySelector('.numberPerson');
const chepValue = document.querySelector('.chep');
const alertMsg = document.querySelector('.alert');
const caclBtn = document.querySelector('.buttonCalc');

const checkValue = () => {
	if (priceValue.value == '' || priceValue.value == '0')
		throw console.log('Musisz podać kwote do zapłaty');

	if (peopleValue.value == '' || peopleValue.value == '0')
		throw console.log('Nie możesz dzielić rachunku na 0 osób');

	if (
		chepValue.value !== 10 + '%' &&
		chepValue.value !== 20 + '%' &&
		chepValue.value !== 30 + '%'
	) {
		throw console.log('Musisz wybrać wysokość napiwku');
	}

	console.log(priceValue.value);
	console.log(peopleValue.value);
	console.log(chepValue.value);
};

caclBtn.addEventListener('click', checkValue);
