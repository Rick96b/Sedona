city_images = document.querySelector(".main-reasons-list__item_city-img")


  if (window.matchMedia("(min-width: 940px)").matches) {
    city_images.src="images/photo-city.jpg"
    console.log("Hyi")
  } else if (window.matchMedia("(min-width: 770px)").matches) {
    city_images.src="images/photo-city-tablet.jpg"
  } else {
    city_images.src="images/photo-city-mobile.jpg"
  }
