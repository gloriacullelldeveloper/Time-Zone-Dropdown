
  
let cities = document.querySelector("#cities");
cities.addEventListener('change', function () {

    let citySelected = cities.value;
   

    switch (citySelected) {
         case 'paris':
            alert('It is currently ${parisDate} in Europe/Paris');
             let parisDate = moment()
          .tz("Europe/Paris")
          .format("dddd, MMMM D, YYYY LT");
      break;
    case 'madrid':
      alert('It is currently in Europe/Madrid');
      break;
    case 'berlin':
      alert('It is currently in Europe/Berlin');
      break;

    }


}); 
    
