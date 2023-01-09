var Breakfast =
  "https://www.wholesomeyum.com/wp-content/uploads/2018/04/wholesomeyum-Easy-Keto-Almond-Flour-Pancakes-Recipe-24.jpg";
var Lunch =
  "https://s3-eu-west-1.amazonaws.com/images-marleyspoon-production/media/recipes/123983/main_photos/large/portobello_steak-922055e56db05202b43f2d1c0fc60ecf.jpeg";
var Dinner =
  "https://leitesculinaria.com/wp-content/uploads/fly-images/108891/bibimbap-recipe-1200x900-c.jpg";
var Water =
  "https://juicing-for-health.com/wp-content/uploads/2012/05/juice-and-water.png";

setInterval(function () {
  document.querySelector("#time").textContent = moment().format(
    "MMMM Do YYYY, h:mm:ss a"
  );

  var currentHour = moment().hour();

  var selectedSrc = "";

  if (currentHour >= 8 && currentHour < 10) {
    selectedSrc = Breakfast;
  } else if (currentHour >= 12.5 && currentHour < 14.5) {
    selectedSrc = Lunch;
  } else if (currentHour >= 19 && currentHour < 21) {
    selectedSrc = Dinner;
  } else {
    selectedSrc = Water;
  }

  console.log(selectedSrc);

  document.body.style.background = "url(" + selectedSrc + ")";
}, 1000);
