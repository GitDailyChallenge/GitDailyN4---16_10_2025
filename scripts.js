// Simple form verification and warning message
console.log("Form validation script loaded.");

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  const password = document.getElementById("password");
  const strength = document.getElementById("strength");

  password.addEventListener("input", () => {
    const val = password.value;
    let score = 0;

    if (val.length >= 8) score++;
    if (/[A-Z]/.test(val)) score++;
    if (/[a-z]/.test(val)) score++;
    if (/\d/.test(val)) score++;
    if (/[@$!%*?&#]/.test(val)) score++;

    const messages = ["Too weak", "Weak", "Medium", "Strong", "Very strong"];
    strength.textContent = messages[score] || "Too weak";
  });
  //previous project GitDailyChallengeN3
  // const warning = document.createElement("div");
  // warning.classList.add("warning");

  // warning.style.display = "none";
  // form.appendChild(warning);

  // form.addEventListener("submit", function (e) {
  //   e.preventDefault(); // Always prevent default submit action

  //   let valid = true;
  //   const requiredFields = form.querySelectorAll("[required]");
  //   let nomField = form.querySelector('[name="name"]');
  //   let mailField = form.querySelector('[name="email"]');
  //   let messageField = form.querySelector('[name="message"]');
  //   let button = form.querySelector('button[type="submit"]');
  //   let errorMsg = document.createElement("p");

  //   // Check required fields
  //   requiredFields.forEach((field) => {
  //     if (!field.value.trim()) {
  //       valid = false;
  //     }
  //   });

  //   // Validate "nom": more than 3 letters, no numbers
  //   if (nomField) {
  //     const nomValue = nomField.value.trim();
  //     if (nomValue.length <= 3) {
  //       valid = false;
  //       errorMsg += "Le nom doit contenir plus de 3 lettres. ";
  //     }
  //     if (/\d/.test(nomValue)) {
  //       valid = false;
  //       errorMsg += "Le nom ne doit pas contenir de chiffres. ";
  //     }
  //   }

  //   // Validate "message": no code or SQL injection
  //   if (messageField) {
  //     const messageValue = messageField.value.trim();
  //     // Simple checks for code or SQL injection patterns
  //     const codeOrSqlPattern =
  //       /(<script|<\/script|SELECT\s|INSERT\s|DELETE\s|UPDATE\s|DROP\s|--|;|\/\*|\*\/|<\?|<%|%>)/i;
  //     if (codeOrSqlPattern.test(messageValue)) {
  //       valid = false;
  //       errorMsg +=
  //         "Le message ne doit pas contenir de code ou d'injection SQL. ";
  //     }
  //   }
  //   if (!valid) {
  //     warning.textContent = errorMsg || "Please fill in all required fields.";
  //     warning.style.display = "block";
  //   } else {
  //     let messageFieldValue = document.createElement("p");
  //     messageFieldValue.classList.add("message-value");
  //     messageFieldValue.textContent = messageField.value;

  //     let nomFieldValue = document.createElement("p");
  //     nomFieldValue.classList.add("message-value");
  //     nomFieldValue.textContent = nomField.value;

  //     let mailFieldValue = document.createElement("p");
  //     mailFieldValue.classList.add("message-value");
  //     mailFieldValue.textContent = mailField.value;

  //     console.log(messageFieldValue, nomFieldValue, mailFieldValue);
  //     messageField.replaceWith(messageFieldValue);
  //     nomField.replaceWith(nomFieldValue);
  //     mailField.replaceWith(mailFieldValue);
  //     button.style.display = "none"; // Hide submit button on success
  //     // Show success message
  //     warning.style.color = "green";
  //     warning.textContent = "Le formulaire a été envoyé avec succès !";
  //     warning.style.display = "block";
  //   }
  // });
});
