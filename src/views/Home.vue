<template>
  <div class="home">
    <Carousel />
    <div class="pb-5 container d-flex flex-wrap px-0">
      <div class="col-md-4 mb-5 mb-md-0 services-link">
        <v-lazy-image
          src="https://storage.googleapis.com/perez-gruas.appspot.com/svg/mechanic.svg"
          alt="icon_service"
        />
        <h2 class="text-white pt-4 pb-5 h2 font-weight-bold">
          Conozca
          <br />nuestros servicios
        </h2>
        <button-link-perez to="/servicios" text="Conoce más" />
      </div>
      <div class="col-md-8 d-flex flex-wrap px-0">
        <div
          class="col-md-6 p-md-0"
          v-for="element of services"
          :key="element.id"
          v-bind:class="[element.class]"
        >
          <div
            class="service position-relative"
            v-for="service of element.items"
            :key="service.id"
          >
            <v-lazy-image
              :src="service.image.url"
              :alt="service.image.alt"
              use-picture
            >
              <source
                v-for="image of service.images"
                :key="image.id"
                :srcset="image.url"
                :type="image.type"
              />
            </v-lazy-image>

            <router-link
              :data-number="'0' + service.id"
              class="position-absolute w-100 h-100 d-flex flex-column p-3 text-decoration-none"
              :class="[service.class]"
              to="/servicios"
            >
              <div class="separator my-3" />
              <h3
                class="text-white font-weight-bold mb-0"
                v-html="service.title"
              />
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="about_home py-5 mt-md-5 container d-flex flex-wrap px-0">
      <div class="col-md-7 pr-md-0 d-flex flex-column justify-content-end">
        <h2 class="pb-md-5 mb-5 font-weight-bold text-primary">
          Con más de 20 años de trayectoria en el servicio de remolque de
          vehículos
        </h2>
        <div class="content bg-info">
          <h1 class="text-white h6">
            Especialistas de gran tonelaje, Grúas Pérez se consolida como una de
            las empresas pioneras en gestión y servicio de grúas, marcados por
            el trabajo y el esfuerzo.
          </h1>
          <p class="text-secondary mb-0">
            Atención personalizada garantizando la calidad del servicio. La
            mejor empresa del Perú en servicios de grúas y auxilio mecánico.
            Contamos con grúas, plataformas hidráulicas (seguridad). Tenemos
            taller propio de mecánica.
          </p>
        </div>
      </div>
      <div
        class="col-md-5 pl-md-0 d-flex justify-content-center justify-content-xl-start pb-0 pb-xl-5"
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
      </div>
    </div>
    <div class="container pb-2 pb-md-5 pt-md-3">
      <div class="row icons_pe">
        <div
          class="col-6 col-xl-3 d-flex align-items-center flex-column flex-md-row mb-3 mb-xl-0"
          v-for="icon of icons"
          :key="icon.id"
        >
          <v-lazy-image :src="icon.url" alt="icon_service" />
          <p
            class="text-white font-weight-bold mb-0 h5 ml-md-2 mt-3 mt-md-0 h5"
          >
            {{ icon.name }}
          </p>
        </div>
      </div>
    </div>
    <div class="separator_home text-center position-relative">
      <h1
        class="text-white font-weight-bold h5 d-flex flex-column align-items-center m-0 pt-2 pt-md-4 position-absolute w-100"
      >
        Los mejores servicios en grúas y soluciones
      </h1>
      <v-lazy-image
        src="https://storage.googleapis.com/perez-gruas.appspot.com/home/jpg/3.jpg"
        alt="icon_service"
        class="img-fluid"
        use-picture
      >
        <source
          srcset="https://storage.googleapis.com/perez-gruas.appspot.com/home/webp/3.webp"
          media="(min-width: 640px)"
          type="image/webp"
        />
        <source
          srcset="https://storage.googleapis.com/perez-gruas.appspot.com/home/webp/3-640.webp"
          media="(min-width: 0px)"
          type="image/webp"
        />

        <source
          srcset="https://storage.googleapis.com/perez-gruas.appspot.com/home/jpg/3.jpg"
          media="(min-width: 640px)"
          type="image/jpg"
        />
        <source
          srcset="https://storage.googleapis.com/perez-gruas.appspot.com/home/jpg/3-640.jpg"
          media="(min-width: 0px)"
          type="image/jpg"
        />
      </v-lazy-image>
    </div>
    <div class="contact_home py-5 container d-flex flex-wrap px-0">
      <div class="col-md-7 contact_info pb-4 pb-md-0 text-center text-md-left">
        <i class="material-icons text-primary">drafts</i>
        <h1 class="text-white h1 font-weight-bold mt-2">
          Contacta con nosotros
        </h1>
        <h2 class="text-primary font-weight-bold mb-5 h4">
          Estamos encantados de ayudarte
        </h2>
        <p class="text-secondary">
          Jirón Irribarren
          <br />498, SURQUILLO
        </p>
        <p class="text-secondary">
          Lunes- Viernes
          <br />07:00 am - 06:30 pm
        </p>
        <p class="text-secondary">
          Sabado- Domingos
          <br />07:00 am - 5:30 pm
        </p>
      </div>
      <div class="col-md-4 col-lg-3 text-center contact_details ml-auto">
        <p class="text-secondary mb-4">Llámanos o visítanos</p>
        <a
          class="icon_phone_contact mb-4 d-block rounded-circle p-3 mx-auto text-decoration-none"
          href="tel:998308772"
        >
          <div class="line_1 rounded-circle p-3">
            <i
              class="material-icons text-body rounded-circle p-3 text-truncate d-block"
              >phone_iphone</i
            >
          </div>
        </a>
        <p class="text-primary font-weight-bold h4">+51</p>
        <a
          href="tel:998308772"
          class="text-white font-weight-bold h1 text-decoration-none"
          >998 308 772</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/CarouselComponent.vue";

export default {
  name: "Home",
  components: { Carousel },
  data: () => ({
    services: [
      {
        id: 1,
        class: "m-120",
        items: [
          {
            id: 1,
            class: "platform",
            title: "Plataforma",
            image: {
              url:
                "https://storage.googleapis.com/perez-gruas.appspot.com/services/jpg/1.jpg",
              alt: "Serivio de Plataforma"
            },
            images: [
              {
                id: 1,
                url:
                  "https://storage.googleapis.com/perez-gruas.appspot.com/services/webp/1.webp",
                type: "image/webp"
              },
              {
                id: 2,
                url:
                  "https://storage.googleapis.com/perez-gruas.appspot.com/services/jpg/1.jpg",
                type: "image/jpg"
              }
            ]
          },
          {
            id: 3,
            class: "mechanic",
            title: "Mecánica <br> Automotriz",
            image: {
              url:
                "https://storage.googleapis.com/perez-gruas.appspot.com/services/jpg/3.jpg",
              alt: "Serivio de Mecánica Automotriz"
            },
            images: [
              {
                id: 1,
                url:
                  "https://storage.googleapis.com/perez-gruas.appspot.com/services/webp/3.webp",
                type: "image/webp"
              },
              {
                id: 2,
                url:
                  "https://storage.googleapis.com/perez-gruas.appspot.com/services/jpg/3.jpg",
                type: "image/jpg"
              }
            ]
          }
        ]
      },
      {
        id: 2,
        items: [
          {
            id: 2,
            class: "transfer",
            title: "Traslado de autos",
            image: {
              url:
                "https://storage.googleapis.com/perez-gruas.appspot.com/services/jpg/2.jpg",
              alt: "Serivio de Traslado de autos"
            },
            images: [
              {
                id: 1,
                url:
                  "https://storage.googleapis.com/perez-gruas.appspot.com/services/webp/2.webp",
                type: "image/webp"
              },
              {
                id: 2,
                url:
                  "https://storage.googleapis.com/perez-gruas.appspot.com/services/jpg/2.jpg",
                type: "image/jpg"
              }
            ]
          },
          {
            id: 4,
            class: "mechanical_assistance",
            title: "Auxilio Mecánico",
            image: {
              url:
                "https://storage.googleapis.com/perez-gruas.appspot.com/services/jpg/4.jpg",
              alt: "Serivio de Auxilio Mecánico"
            },
            images: [
              {
                id: 1,
                url:
                  "https://storage.googleapis.com/perez-gruas.appspot.com/services/webp/4.webp",
                type: "image/webp"
              },
              {
                id: 2,
                url:
                  "https://storage.googleapis.com/perez-gruas.appspot.com/services/jpg/4.jpg",
                type: "image/jpg"
              }
            ]
          }
        ]
      }
    ],
    icons: [
      {
        id: 1,
        url:
          "https://storage.googleapis.com/perez-gruas.appspot.com/home/svg/1.svg",
        name: "Capacidad"
      },
      {
        id: 2,
        url:
          "https://storage.googleapis.com/perez-gruas.appspot.com/home/svg/2.svg",
        name: "Garantía"
      },
      {
        id: 3,
        url:
          "https://storage.googleapis.com/perez-gruas.appspot.com/home/svg/3.svg",
        name: "Eficiencia"
      },
      {
        id: 4,
        url:
          "https://storage.googleapis.com/perez-gruas.appspot.com/home/svg/4.svg",
        name: "Velocidad"
      }
    ]
  })
};
</script>
<style lang="scss" scoped>
.home {
  background-color: #030720;
  .m-120 {
    @media (min-width: 768px) {
      margin-top: 120px;
    }
  }
  .service a {
    left: 0;
    top: 0;
    .separator {
      width: 1px;
      background-color: #348880;
      height: 75%;
    }
    &::before {
      content: attr(data-number);
      font-size: 20px;
      font-weight: 700;
    }
    @media (max-width: 991px) {
      h3 {
        font-size: 1.2rem;
      }
    }
    @media (max-width: 768px) {
      &.mechanic::before {
        content: "02";
      }
      &.transfer::before {
        content: "03";
      }
    }
  }
  .services-link {
    padding-top: 10rem;
    img {
      width: 30%;
    }
    @media (max-width: 991px) {
      padding-top: 5rem;
    }
    @media (max-width: 768px) {
      padding-top: 1rem;
    }
  }
  .about_home {
    .content {
      padding: 80px 15% 65px;
    }
  }
  .icons_pe img {
    width: 40%;
  }
  .separator_home .h5 {
    top: 0;
    left: 0;
    z-index: 1;
    &::before {
      content: "";
      width: 1px;
      height: 80px;
      margin-bottom: 30px;
      background: #3a3d78;
      @media (max-width: 650px) {
        height: 40px;
        margin-bottom: 15px;
      }
    }
  }
  .contact_home {
    .contact_info i {
      font-size: 6rem;
    }
    .icon_phone_contact {
      border: 2px solid #11153b;
      width: 210px;
      height: 210px;
      .line_1 {
        border: 2px solid #11153b;
        box-shadow: 1px 1px 45px #0d1235;
        width: 140px;
        height: 140px;
        margin: 10%;
      }
      i {
        background: linear-gradient(135deg, #7eb0fb 0%, #5662d6 100%);
        font-size: 2.5rem;
        margin: 15%;
      }
    }
  }
}
</style>
