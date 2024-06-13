 let cities = document.querySelector("#cities");
  cities.addEventListener('change', function () {

    let citySelected = cities.value;
    let parisDate = moment().tz("Europe/Paris").format("dddd, MMMM D, YYYY LT");
    let madridDate = moment().tz("Europe/Madrid").format("dddd, MMMM D, YYYY LT")
    let berlinDate = moment().tz("Europe/Berlin").format("dddd, MMMM D, YYYY LT")

    switch (citySelected) {
      case 'paris':
        alert(`It is currently ${parisDate} in Europe/Paris`);
        break;
      case 'madrid':
        alert(`It is currently ${madridDate} in Europe/Madrid`);
        break;
      case 'berlin':
        alert(`It is currently ${berlinDate} in Europe/Berlin`);
        break;
    }
  });

