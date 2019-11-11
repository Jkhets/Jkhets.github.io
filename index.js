document.addEventListener(
  "DOMContentLoaded",
  () => {
    elem = document.createElement("div");
    elem.id = "myID";
    elem.innerHTML = "This div was made with JavaScript";
    document.body.insertBefore(elem, document.body.childNodes[0]);
  },
  false
);
