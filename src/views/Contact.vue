<template>
  <div class="contacto pb-5 pt-5">
    <div class="container pb-5 px d-flex flex-wrap">
      <h1 class="col-12 text-white text-center pt-3 h1 font-weight-bold">
        Contacta con nosotros
      </h1>
      <div class="col-12 mb-md-5 mb-4">
        <div class="separator-page"></div>
      </div>
      <div class="col-md-4 pr-md-0 mb-4">
        <div class="content text-secondary px-5 pb-4 pt-5">
          <h1 class="text-white font-weight-bold h1 mb-3">Grúas Pérez</h1>
          <h6 class="text-primary font-weight-bold h-6 mb-4">
            A tu disposioción en cualquier momento
          </h6>
          <p>
            Jirón Irribarren
            <br />498, SURQUILLO
          </p>
          <p>
            Lunes- Viernes
            <br />07:00 am - 06:30 pm
          </p>
          <p>
            Sabado- Domingos
            <br />07:00 am - 5:30 pm
          </p>
        </div>
        <v-lazy-image
          src="https://storage.googleapis.com/perez-gruas.appspot.com/contact/1.png"
          alt="about_home"
          class="img-fluid"
          use-picture
        >
          <source
            srcset="https://storage.googleapis.com/perez-gruas.appspot.com/contact/1.webp"
            type="image/webp"
          />
          <source
            srcset="https://storage.googleapis.com/perez-gruas.appspot.com/contact/1.png"
            type="image/jpg"
          />
        </v-lazy-image>
        <a
          href="mailto:factoriagruasperez@gmail.com"
          class="d-block text-center"
          >factoriagruasperez@gmail.com</a
        >
        <a
          href="tel:998308772"
          class="text-secondary d-block text-center text-decoration-none"
          >+51 998 308 772</a
        >
      </div>
      <form class="col-md-8 pl-md-5 pt-md-5 column_attr" @submit="send">
        <h2 class="font-weight-bold h2 mb-4">Escribe un mensaje</h2>
        <div class="alert alert-success" role="alert" v-if="success">
          ¡Gracias por contactarnos!
        </div>
        <div class="alert alert-danger" role="alert" v-if="error">
          Oh, oh, algo salió mal... Error inesperado
        </div>
        <div class="row">
          <div class="form-group col-md-6 pb-md-3">
            <input
              v-model="name"
              type="text"
              class="form-control shadow-none"
              name="name"
              aria-describedby="nombre"
              placeholder="Tu nombre"
              required
            />
          </div>
          <div class="form-group col-md-6 pb-md-3">
            <input
              v-model="email"
              type="email"
              class="form-control shadow-none"
              name="email"
              aria-describedby="correo"
              placeholder="Tu correo"
              required
            />
          </div>
          <div class="form-group col-md-12 pb-3">
            <input
              v-model="subject"
              type="text"
              class="form-control shadow-none"
              name="subject"
              aria-describedby="nombre"
              placeholder="Asunto"
              required
            />
          </div>
          <div class="form-group col-md-12">
            <textarea
              v-model="message"
              class="form-control shadow-none"
              name="subject"
              rows="3"
              placeholder="Mensaje"
              required
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          class="btn btn-outline-primary w-100"
          :disabled="load"
        >
          {{ load ? "Cargando..." : "Enviar el mensaje" }}
        </button>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "contacto",
  data: () => ({
    name: null,
    subject: null,
    email: null,
    message: null,
    success: false,
    error: false,
    load: false
  }),
  methods: {
    send(e) {
      this.load = true;
      axios
        .post(
          "https://us-central1-perez-gruas.cloudfunctions.net/sendContact",
          {
            name: this.name,
            subject: this.subject,
            message: this.message,
            email: this.email
          }
        )
        .then(
          () => {
            this.name = this.subject = this.email = this.message = null;
            this.success = true;
            setTimeout(() => {
              this.success = false;
            }, 3000);
            this.load = false;
          },
          () => {
            this.error = true;
            setTimeout(() => {
              this.error = false;
            }, 3000);
            this.load = false;
          }
        );
      e.preventDefault();
    }
  }
};
</script>
<style lang="scss" scoped>
.content {
  background-color: #0a0a2c;
}
.column_attr {
  background-color: #f1f2f9;
  .btn-outline-primary {
    padding: 11px 20px;
    &:hover,
    &:focus {
      background-color: $primary;
      color: #ffffff;
    }
  }
  .form-group .form-control {
    background-color: rgba(241, 242, 249, 1);
    border: none;
    border-radius: 0;
    border-bottom: 3px solid #dadbe4;
    &:focus {
      border-color: $primary;
    }
  }
}
</style>
