<template>
  <div class="services pt-5">
    <div class="container d-flex flex-wrap px-0">
      <h1 class="col-12 text-white text-center pt-3 h1 font-weight-bold">
        Servicios
      </h1>
      <div class="col-12 mb-md-5 mb-4">
        <div class="separator-page"></div>
      </div>
      <carousel
        :perPageCustom="[
          [0, 1],
          [720, 2],
          [960, 3]
        ]"
        :paginationEnabled="false"
        :loop="true"
        class="carousel-perez-services col-12 mb-5"
      >
        <slide v-for="slide of sliders" :key="slide.id">
          <v-lazy-image :src="slide.img" alt="icon_service" />
          <h5 class="h5 font-weight-bold pt-4 pb-3">{{ slide.title }}</h5>
          <p class="mb-0">{{ slide.text }}</p>
        </slide>
      </carousel>
    </div>
    <div
      class="service_gallery position-relative d-flex justify-content-center pt-5 flex-column overflow-hidden"
    >
      <v-lazy-image
        src="https://storage.googleapis.com/perez-gruas.appspot.com/gallery/jpg/back.jpg"
        alt="icon_service"
        class="position-absolute img-back h-100 w-100"
        use-picture
      >
        <source
          srcset="https://storage.googleapis.com/perez-gruas.appspot.com/gallery/webp/back.webp"
          media="(min-width: 640px)"
          type="image/webp"
        />
        <source
          srcset="https://storage.googleapis.com/perez-gruas.appspot.com/gallery/webp/back-640.webp"
          media="(min-width: 0px)"
          type="image/webp"
        />

        <source
          srcset="https://storage.googleapis.com/perez-gruas.appspot.com/gallery/jpg/back.jpg"
          media="(min-width: 640px)"
          type="image/jpg"
        />
        <source
          srcset="https://storage.googleapis.com/perez-gruas.appspot.com/gallery/jpg/back-640.jpg"
          media="(min-width: 0px)"
          type="image/jpg"
        />
      </v-lazy-image>
      <div class="bg-white mx-auto text-center content-service-g">
        <i class="material-icons text-primary icon-camera">camera_alt</i>
        <h1 class="font-weight-bold h1 pb-4">
          Mire nuestra Galería fotográfica
        </h1>
        <ButtonLinkPerez to="/galeria" dark="true" text="Ir a galería" />
      </div>
      <ContactLinks />
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import ContactLinks from "../components/ContactLinksComponent";

export default {
  name: "services",
  components: { Carousel, Slide, ContactLinks },
  data: () => ({
    sliders: [
      {
        id: 1,
        title: "Mecánica Automotriz",
        text:
          "Somos especialistas en el funcionamiento y mantenimiento de los sistemas eléctricos y electrónicos de automóviles multimarca. Tenemos un equipo profesional tremendamente capacitado para el análisis y solución de fallas de su vehículo.",
        img:
          "https://storage.googleapis.com/perez-gruas.appspot.com/services/svg/1.svg"
      },
      {
        id: 2,
        title: "Auxilio Mecánico",
        text:
          "Servicio especializado de asistencia mecánica vehicular ofrecidos las 24 horas, los 365 días del año por batería descargada, fallas eléctricas y/o mecánicas ligeras, cambio de llanta, abrir puertas, desactivación de alarma y/o compra de combustible.",
        img:
          "https://storage.googleapis.com/perez-gruas.appspot.com/services/svg/2.svg"
      },
      {
        id: 3,
        title: "Rescates",
        text:
          "Gran experiencia en el servicio de rescate y salvamento con grúas especiales para la atención de siniestros o emergencias producidos en planta o ruta a lo largo y ancho de nuestro país.",
        img:
          "https://storage.googleapis.com/perez-gruas.appspot.com/services/svg/3.svg"
      }
    ]
  })
};
</script>

<style lang="scss" scoped>
.carousel-perez-services {
  .VueCarousel-slide {
    padding: 60px 30px;
    background-color: #ffffff;
    margin: 0 10px 0 0;
    text-align: center;
    position: relative;
    .v-lazy-image {
      width: 89px;
      height: 89px;
    }
    p {
      color: #4a4b59;
    }
    &:before {
      content: "";
      position: absolute;
      bottom: 0;
      right: 15%;
      width: 70%;
      height: 5px;
      background-color: #66ffd1;
    }
  }
}
.service_gallery {
  .icon-camera {
    font-size: 6rem;
  }
  .content-service-g {
    z-index: 2;
    margin: 180px 0;
    padding: 100px 180px;
    @media (max-width: 768px) {
      margin: 100px 0;
      padding: 50px 100px;
    }
    @media (max-width: 620px) {
      margin: 50px 0;
      padding: 50px;
    }
  }
}
</style>
