const elementForm = document.querySelector("#form-contact");

const apiUrl =
  "https://us-central1-sending-emails-c80ff.cloudfunctions.net/api";

elementForm.addEventListener("submit", async (e) => {
  try {
    e.preventDefault();

    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;
    const phone = document.querySelector("#phone").value;

    const data = {
      contact: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        message: message,
        phone: phone,
      },
    };

    const response = await fetch(`${apiUrl}/marko-creativos/contact`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (response.ok === true) {
      alert("Mensaje enviado correctamente");
    } else {
      throw Error("Ocurrio un error al enviar el email!");
    }
  } catch (e) {
    alert("Error al enviar el mensaje, intentelo mas tarde");
    console.log("SendEmail->", e);
  }
});
