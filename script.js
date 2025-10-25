// ✨ Button interaction
const magicButton = document.getElementById("magicButton");
const message = document.getElementById("message");

magicButton.addEventListener("click", () => {
  message.textContent = "🎉 You clicked the button! Great job!";
  message.style.color = "#2e8b57";
});

// 🌙 Dark mode toggle
const darkToggle = document.getElementById("darkModeToggle");

darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  darkToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// 💌 Contact form behavior
const contactForm = document.getElementById("contactForm");
const formResponse = document.getElementById("formResponse");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  formResponse.textContent = "✅ Message sent successfully (pretend 😉)";
  contactForm.reset();
});
