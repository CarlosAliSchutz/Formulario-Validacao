  const form = document.getElementById("form-send");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const fields = form.querySelectorAll('input[type="text"], input[type="email"], textarea');

    fields.forEach((field) => {
      if (field.value.trim() === "") {
        field.classList.add("text-required");
        const span = field.nextElementSibling;
        if (span.classList.contains("required")) {
          span.classList.add("ativo");
        }
      } else {
        field.classList.add("field");
        const span = field.nextElementSibling;
        if (span.classList.contains("required")) {
          span.classList.remove("ativo");
        }
      }
    });
  });
