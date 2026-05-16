const header = document.querySelector(".site-header");
const toggle = document.querySelector(".nav-toggle");

if (header && toggle) {
  toggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const contactForm = document.querySelector("[data-contact-form]");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const form = new FormData(contactForm);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const role = String(form.get("role") || "").trim();
    const message = String(form.get("message") || "").trim();

    const subject = encodeURIComponent(`MU-2 Flyers Association inquiry from ${name || "website visitor"}`);
    const body = encodeURIComponent([
      `Name: ${name}`,
      `Email: ${email}`,
      `Connection to the MU-2: ${role}`,
      "",
      message
    ].join("\n"));

    window.location.href = `mailto:mu2flyersassociation@gmail.com?subject=${subject}&body=${body}`;
  });
}
