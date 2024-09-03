///function toggleLanguage(event) {
///    const circle = document.createElement("span");
///    const button = document.getElementById("language-toggle");
///    const rect = button.getBoundingClientRect();
///    const size = Math.max(rect.width, rect.height);
///    
///    circle.classList.add("circle");
///    circle.style.width = circle.style.height = `${size}px`;
///    circle.style.left = `${event.clientX - rect.left - size / 2}px`;
///    circle.style.top = `${event.clientY - rect.top - size / 2}px`;
///    
///    button.appendChild(circle);
///    circle.addEventListener("animationend", () => {
///        circle.remove();
///    });
///}