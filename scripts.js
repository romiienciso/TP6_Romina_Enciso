(function () {
    // Inicializar EmailJS
    emailjs.init("XE9b2IlUmaNJe5vRS");
  })();
  
  // Función para enviar notificación de inicio de sesión
  function sendLoginNotification(username) {
    const datetime = new Date().toLocaleString();
  
    const params = {
      datetime: datetime,
      To_Email: "Romina201412@gmail.com", // Reemplazar con tu correo
      From_Mail: "Romina201412@gmail.com",
    };
  
    emailjs.send("service_b44mrwd", "template_9648khl", params).then(
      () => {
        console.log("Correo enviado exitosamente.");
      },
      (error) => {
        console.error("Error al enviar el correo:", error);
      }
    );
  }
  
  // Función para manejar el inicio de sesión en la Página 1
  function handleLogin(event) {
    event.preventDefault();
  
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
  
    if (username && password === "12345") { // Simulación de contraseña correcta
      sendLoginNotification(username); // Enviar correo con los datos del usuario
      alert("Inicio de sesión exitoso.");
      window.location.href = "pagina2.html"; // Navegar a la Página 2
    } else {
      alert("Usuario o contraseña incorrectos.");
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    // Asignar evento al formulario de login
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", handleLogin);
    }
});
  
  // Función para manejar la bienvenida en la Página 2
  function handleWelcome(event) {
    event.preventDefault();
  
    const nameInput = document.getElementById("nameInput").value.trim();
    if (nameInput) {
      document.getElementById("usernameDisplay").innerText = nameInput;
      document.getElementById("welcomeMessage").style.display = "none";
      document.getElementById("nameForm").style.display = "none";
      document.getElementById("mainContent").style.display = "block";
    } else {
      alert("Por favor, ingresa tu nombre.");
    }
  }
  
  // Función para enviar formulario de la página 3
function sendPersonalForm(event) {
    event.preventDefault();
    const formData = {
        from_name: "Sistema Web", // Nombre genérico para identificar el sistema
        nombre: document.getElementById("name").value,
        apellido: document.getElementById("lastname").value,
        celular: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        para_: document.getElementById("email").value, // Correo destinatario
        mensaje: `Edad: ${document.getElementById("age").value}, Dirección: ${document.getElementById("address").value}, Ciudad: ${document.getElementById("city").value}, País: ${document.getElementById("country").value}`,
    };

    emailjs.send("service_b44mrwd", "template_fbov2zs", formData).then(
        () => {
            alert("Formulario enviado exitosamente.");
            document.getElementById("personalForm").reset();
        },
        (err) => {
            alert("Error al enviar el formulario: " + JSON.stringify(err));
        }
    );
}
  
  // Función para enviar formulario de la página 4
  function sendMessageForm(event) {
    event.preventDefault();
    const formData = {
        from_name: "Sistema Web", // Nombre genérico para identificar el sistema
        nombre: document.getElementById("name4").value,
        apellido: document.getElementById("lastname4").value,
        celular: document.getElementById("phone4").value,
        email: document.getElementById("email4").value,
        para_: document.getElementById("email4").value, // Correo destinatario
        mensaje: document.getElementById("message").value,
    };

    emailjs.send("service_b44mrwd", "template_fbov2zs", formData).then(
        () => {
            alert("Mensaje enviado exitosamente.");
            document.getElementById("messageForm").reset();
        },
        (err) => {
            alert("Error al enviar el mensaje: " + JSON.stringify(err));
        }
    );
}
  
  // Función para navegar entre páginas
  function navigate(url) {
    window.location.href = url;
  }
  
  // Asignar eventos a los formularios y páginas
  document.addEventListener("DOMContentLoaded", () => {
    // Página 3: Envío del formulario de datos personales y limpieza
    const personalForm = document.getElementById("personalForm");
    if (personalForm) {
        personalForm.addEventListener("submit", sendPersonalForm);

        // Evento para limpiar el formulario
        const resetButton = document.getElementById("resetForm3");
        if (resetButton) {
            resetButton.addEventListener("click", () => {
                personalForm.reset(); // Resetea el formulario
                alert("Formulario limpiado."); // Mensaje opcional
            });
        }
    }

    // Página 4: Envío del formulario de mensaje y limpieza
    const messageForm = document.getElementById("messageForm");
    if (messageForm) {
        messageForm.addEventListener("submit", sendMessageForm);

        // Evento para limpiar el formulario
        const resetButton4 = document.getElementById("resetForm4");
        if (resetButton4) {
            resetButton4.addEventListener("click", () => {
                messageForm.reset(); // Resetea el formulario
                alert("Formulario limpiado."); // Mensaje opcional
            });
        }
    }
});
  