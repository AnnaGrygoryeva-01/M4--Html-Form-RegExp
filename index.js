"use strict";

const form = document.querySelector(".userForm");

form.addEventListener("submit", submitHandler);

function submitHandler(e) {
  e.preventDefault();
  const elements = form.elements;

  // Full name:
  const rawFirstName = elements["user-first-name"].value.trim();
  const rawLastName = elements["user-last-name"].value.trim();
  const firstName = capitalizeFirstLetter(rawFirstName);
  const lastName = capitalizeFirstLetter(rawLastName);
  const fullName = `${firstName} ${lastName}`;

  // Email:
  const email = elements["user-email"].value.trim();
  const subject = elements["user-message-subject"].value;

  const p1 = elements["phone1"].value;
  const p2 = elements["phone2"].value;
  const p3 = elements["phone3"].value;

  const fullPhone = `+380${p1}${p2}${p3}`;

  // Message:
  let rawMessage = elements["user-message"].value;
  const cleanMessage = rawMessage.trim().replace(/\s+/g, " ");

  // Creating Object:
  const orderData = {
    name: fullName,
    email: email,
    phone: fullPhone,
    subject: subject,
    message: cleanMessage,
  };
  console.log("Data collected:", orderData);

  form.reset();
}

function capitalizeFirstLetter(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
