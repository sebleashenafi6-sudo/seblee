<script>{
  const greeting = document.getElementById("greeting");
  const hour = new Date().getHours();
  let message = "";

  if (hour < 12) message = "Good Morning 🌞";
  else if (hour < 18) message = "Good Afternoon 🌤️";
  else message = "Good Evening 🌙";

  if (greeting) greeting.textContent = message;
});

// === DARK/LIGHT MODE TOGGLE ===
const themeBtn = document.getElementById("themeBtn");
themeBtn?.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const mode = document.body.classList.contains("dark-mode") ? "dark" : "light";
  localStorage.setItem("theme", mode);
});
window.addEventListener("load", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }
});

// === SMOOTH SCROLLING FOR NAV LINKS ===
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});

// === ACTIVE NAVIGATION LINK HIGHLIGHT ===
const navLinks = document.querySelectorAll("nav a");
window.addEventListener("scroll", () => {
  let fromTop = window.scrollY + 80;
  navLinks.forEach(link => {
    const section = document.querySelector(link.hash);
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
</script>
