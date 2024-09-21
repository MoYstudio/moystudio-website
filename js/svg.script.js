"use strict";
const $ = document;
const root = $.querySelector(":root");
let activeItem = 0;
const sidebar = {
    items: $.querySelectorAll(".sidebar-item"),
}
for (let item of sidebar.items) {
    item.addEventListener("click", setNewActive)
}

function setNewActive() {
    let activeOffset = this.dataset.activeOffset;
    let activeIndex = parseInt(this.dataset.activeIndex);
    sidebar.items[activeItem].classList.remove("active");
    sidebar.items[activeIndex].classList.add("active");
    activeItem = activeIndex;
    root.style.setProperty("--active-offset", activeOffset)
}