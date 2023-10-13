function updateAge() {
    let ageElement = document.getElementById('age_count');
    let currentAge = parseInt(ageElement.textContent);

    // update the age  by 1 second
    currentAge += 1;

    ageElement.textContent = currentAge;
}
setInterval(updateAge, 1000);