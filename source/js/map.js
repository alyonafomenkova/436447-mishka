var isEnableJS = document.querySelector(".contacts__map");
var myMap;
var myPlacemark;

if (isEnableJS) {
  isEnableJS.classList.remove("contacts__map-nojs");
  isEnableJS.classList.add("contacts__map-js");

  if (ymaps) {
    ymaps.ready(init);
  }
}

function init() {
  myMap = new ymaps.Map("map", {
    center: [59.938631, 30.323055],
    zoom: 16
  });

  myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {}, {
    iconLayout: "default#image",
    iconImageHref: "img/icon-map-pin.svg",
    iconImageSize: [67, 100],
    iconImageOffset: [-30, -90]
  });

  myMap.geoObjects.add(myPlacemark);
}
