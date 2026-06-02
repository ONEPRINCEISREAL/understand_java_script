const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
     
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height === '' || height === 0 || isNaN(height) ) {
        results.innerHTML = `Please enter valid height and weight ${height}`;
    } else if (weight === '' || weight === 0 || isNaN(weight) ) {
        results.innerHTML = `Please enter valid height and weight ${weight}`;
    }else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        //show the result
        results.innerHTML = `<span> ${bmi}</span>`;
        //show the category
        if (bmi < 18.6) {
            results.innerHTML += `<span> Underweight</span>`;
        } else if (bmi >= 18.6 && bmi < 24.9) {
            results.innerHTML += `<span> Normal</span>`;
        } else {
            results.innerHTML += `<span> Overweight</span>`;
        }
    }
});


