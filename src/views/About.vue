<template>
  <div class="about pt-5">
    <div class="container d-flex flex-wrap px-0">
      <h1 class="col-12 text-white text-center pt-3 h1 font-weight-bold">
        Nosotros
      </h1>
      <div class="col-12 mb-md-5">
        <div class="separator-page"></div>
      </div>
      <div class="col-md-6 text-white pt-5 mt-md-5 mb-3">
        <h5 class="h5 pb-4">
          Grúas Pérez es una empresa peruana, líder en el servicio de grúas,
          auxilio mecánico y mecánica automotriz, con más de 20 años de
          experiencia en el mercado nacional. Contamos con la flota más moderna
          y especializada del país, personal técnico calificado y clientes de
          primer nivel
        </h5>
        <div class="bg-info p-5">
          <h2>Nuestra misión</h2>
          <p>
            Brindar un servicio de alta calidad en el transporte de cargas
            especiales y adversidades mecánicas, el cual satisface a nuestros
            clientes, mediante el esfuerzo y compromiso de un equipo humano que
            se desempeña en una empresa preocupada por la superación personal de
            todos sus colaboradores.
          </p>
        </div>
      </div>
      <div
        class="col-md-6 d-flex flex-column align-items-center align-items-md-start"
      >
        <v-lazy-image
          src="https://storage.googleapis.com/perez-gruas.appspot.com/home/jpg/1.jpg"
          alt="about_home"
          class="img-fluid"
          use-picture
        >
          <source
            srcset="https://storage.googleapis.com/perez-gruas.appspot.com/home/webp/1.webp"
            type="image/webp"
          />
          <source
            srcset="https://storage.googleapis.com/perez-gruas.appspot.com/home/jpg/1.jpg"
            type="image/jpg"
          />
        </v-lazy-image>
        <div class="bg-info p-5 text-white my-3">
          <h2>Nuestra visión</h2>
          <p class="mb-0">
            Ser la primera empresa especializada en el Perú en el transporte y
            mecánica automotriz, por medio de un servicio responsable y de
            calidad, el cual satisface las exigencias de todos nuestros clientes
          </p>
        </div>
      </div>
    </div>
    <div class="about_plus text-center">
      <div class="about_plus_content">
        <h1 class="text-white font-weight-bold h1">Se nuestro socio</h1>
        <p class="text-white pb-4">
          Si estás interesado en alguno de nuestros servicios,
          <br />no dudes en contactarnos.
        </p>
        <router-link class="link_contact text-decoration-none" to="/contacto"
          >Ir al contacto</router-link
        >
      </div>
      <ContactLinks />
    </div>
  </div>
</template>
<script>
import ContactLinks from "../components/ContactLinksComponent";
export default {
  name: "nosotros",
  components: { ContactLinks }
};
</script>
<style lang="scss" scoped>
.about_plus {
  background-color: #3b3ea7;
  .about_plus_content {
    padding: 8rem 0;
    .link_contact {
      border: 2px solid $primary;
      padding: 15px 30px;
      border-radius: 3px;
      color: $primary;
      &:hover {
        background-color: $primary;
        color: #ffffff;
      }
    }
  }
}
</style>
