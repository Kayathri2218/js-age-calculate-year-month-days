
//Age clculate in year, month, days

let form1 = document.querySelector("#form");
let date = document.querySelector("#date");
let calculate = document.querySelector("#calculate");
let age = document.querySelector("#age");

form1.addEventListener('submit', function (e) {
    e.preventDefault();
    let userDate = new Date(date.value);
    let today = new Date();
    let years = today.getFullYear() - userDate.getFullYear();
    let months = (today.getMonth() + 1) - (userDate.getMonth() + 1);
    let days = today.getDate() - userDate.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12;
        if (days < 0) {
            let daysToday = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
            days += daysToday;
            months--;
        }
    }

    age.innerText = `Age: ${years} years, ${months} months, and ${days} days`;
});
