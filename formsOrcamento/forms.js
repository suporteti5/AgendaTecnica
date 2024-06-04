/* SCROLL BUTTON */
window.addEventListener("scroll", function () {
  var topBtn = document.getElementById("topBtn");
  if (window.scrollY > 100) {
    topBtn.classList.add("active");
  } else {
    topBtn.classList.remove("active");
  }
});

/* HAMBURGUER MENU */
function showSidebar() {
  const sidebar = document.querySelector(".navItensContainerMobile");
  sidebar.style.display = "flex";
}

function hideSidebar() {
  const sidebar = document.querySelector(".navItensContainerMobile");
  sidebar.style.display = "none";
}

/* FORMS */

function handleCheckboxChange() {
  let outrosCheckbox = document.getElementById("Outros");
  let textarea = document.getElementById("mensagem");

  if (outrosCheckbox.checked) {
    textarea.style.display = "block";
  } else {
    textarea.style.display = "none";
  }
}

function handleRecaptcha() {
  let button = document.getElementById("submitButton");
  button.disabled = false;
  button.classList.remove("disabled");
}

document.addEventListener("DOMContentLoaded", () => {
  let isCaptchaVerified = false;
  let isSubmitting = false;

  const contactForm = document.getElementById("orcamentoForm");
  const alertForm = document.getElementById("alertForm");
  const alertMessage = document.getElementById("alertMessage");
  const submitButton = document.getElementById("submitButton");

  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (isCaptchaVerified || isSubmitting) {
      return;
    }

    const formData = {
      companyName: orcamentoForm.companyName.value,
      cnpj: orcamentoForm.cnpj.value,
      emailTo: orcamentoForm.emailTo.value,
      state: orcamentoForm.state.value,
      city: orcamentoForm.city.value,
      contactName: orcamentoForm.contactName.value,
      phone: orcamentoForm.phone.value,
      employeeCount: orcamentoForm.employeeCount.value,
      serviceAddress: orcamentoForm.serviceAddress.value,
      businessSector: orcamentoForm.businessSector.value,
      servicesInterest: Array.from(
        orcamentoForm.querySelectorAll('input[name="servicesInterest"]:checked')
      ).map((cb) => cb.value),
      mensagem: orcamentoForm.mensagem.value || "",
    };

    try {
      const res = await fetch("URL", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alertForm.style.display = "block";
        alert.classList.add("sucess");
        alertForm.style.backgroundColor = "rgb(185, 248, 185)";
        alertForm.style.color = "rgb(30, 70, 32)";
        alertMessage.innerHTML = `<img id="alertMessageImage" alt="icon" src="../Assets/IMGS/check.svg"> Mensagem enviada com sucesso`;
        submitButton.innerHTML = "Enviado";
        submitButton.style.opacity = 0.7;
      } else {
        alertForm.style.display = "block";
        alertForm.style.backgroundColor = "rgb(239 66 66)";
        alertForm.style.color = "rgb(255 255 255)";
        alertForm.classList.add("error");
        alertMessage.innerHTML = `<img id="alertMessageImage" alt="icon" src="../Assets/IMGS/exclamation-circle.svg"> Erro ao enviar o formulário!`;
        submitButton.innerHTML = "Erro";
        submitButton.style.opacity = 0.7;
      }
    } catch (error) {
      alertForm.style.display = "block";
      alertForm.style.backgroundColor = "rgb(239 66 66)";
      alertForm.style.color = "rgb(255 255 255)";
      alertForm.classList.add("error");
      alertMessage.innerHTML = `<img id="alertMessageImage" alt="icon" src="../Assets/IMGS/exclamation-circle.svg"> Erro ao enviar o formulário!`;
      submitButton.innerHTML = "Erro";
      submitButton.style.opacity = 0.7;
    }
  });

  window.handleCaptchaVerify = () => {
    isCaptchaVerified = true;
    submitButton.disabled = false;
  };

  window.handleCaptchaExpire = () => {
    isCaptchaVerified = false;
    submitButton.disabled = true;
  };
});

function send() {
  const submitButton = document.getElementById("submitButton");
  const companyName = document.getElementById("companyName");
  const businessSector = document.getElementById("businessSector");

  if (companyName.value && businessSector.value !== "") {
    submitButton.innerHTML = "Enviando...";
    submitButton.style.opacity = 0.7;
  }
}
