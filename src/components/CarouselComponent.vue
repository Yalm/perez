<template>
  <carousel
    :perPage="1"
    :paginationEnabled="false"
    :autoplay="true"
    :autoplayTimeout="4000"
    :loop="true"
    class="carousel-perez"
  >
    <slide v-for="slide of sliders" :key="slide.id">
      <div class="carousel-item active">
        <v-lazy-image
          :src="slide.default.url"
          :alt="slide.default.alt"
          use-picture
        >
          <source
            v-for="image of slide.images"
            :key="image.id"
            :srcset="image.url"
            :media="image.media"
            :type="image.type"
          />
        </v-lazy-image>
        <div class="carousel-caption text-left">
          <h3>{{ slide.title }}</h3>
          <p class="text-primary">{{ slide.text }}</p>
        </div>
      </div>
    </slide>
  </carousel>
</template>
<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  components: { Carousel, Slide },
  data: () => ({
    sliders: [
      {
        id: 1,
        title: "Servicio de Grúa",
        text: "Precisión y experencia",
        default: {
          url:
            "https://storage.googleapis.com/perez-gruas.appspot.com/jpg/slider_02.jpg",
          alt: "Servicio de grúa"
        },
        images: [
          {
            id: 1,
            url:
              "https://storage.googleapis.com/perez-gruas.appspot.com/webp/slider_02.webp",
            media: "(min-width: 640px)",
            type: "image/webp"
          },
          {
            id: 2,
            url:
              "https://storage.googleapis.com/perez-gruas.appspot.com/jpg/slider_02.png",
            media: "(min-width: 640px)",
            type: "image/jpg"
          },
          {
            id: 3,
            url:
              "https://storage.googleapis.com/perez-gruas.appspot.com/webp/slider_02-640px.webp",
            media: "(min-width: 0px)",
            type: "image/webp"
          },
          {
            id: 4,
            url:
              "https://storage.googleapis.com/perez-gruas.appspot.com/jpg/slider_02-640px.jpg",
            media: "(min-width: 0px)",
            type: "image/jpg"
          }
        ]
      },
      {
        id: 2,
        title: "Servicio de Mecanica",
        text: "A cualquier hora al servicio de nuestros clientes",
        default: {
          url:
            "https://storage.googleapis.com/perez-gruas.appspot.com/jpg/slider_01.jpg",
          alt: "Servicio de Mecanica"
        },
        images: [
          {
            id: 1,
            url:
              "https://storage.googleapis.com/perez-gruas.appspot.com/webp/slider_01.webp",
            media: "(min-width: 640px)",
            type: "image/webp"
          },
          {
            id: 2,
            url:
              "https://storage.googleapis.com/perez-gruas.appspot.com/jpg/slider_01.png",
            media: "(min-width: 640px)",
            type: "image/jpg"
          },
          {
            id: 3,
            url:
              "https://storage.googleapis.com/perez-gruas.appspot.com/webp/slider_01-640px.webp",
            media: "(min-width: 0px)",
            type: "image/webp"
          },
          {
            id: 4,
            url:
              "https://storage.googleapis.com/perez-gruas.appspot.com/jpg/slider_01-640px.jpg",
            media: "(min-width: 0px)",
            type: "image/jpg"
          }
        ]
      }
    ]
  })
};
</script>
<style lang="scss" scoped>
.carousel-perez {
  min-height: 500px;
  @media (max-width: 767px) {
    min-height: 300px;
  }
}
.carousel-caption {
  right: auto;
  bottom: auto;
  overflow: hidden;
  top: 40%;
  left: 8%;
  h3 {
    font-size: 86px;
    transform: translateY(120px);
    animation: text 1s linear forwards;
  }
  p {
    font-size: 26px;
    transform: translateY(120px);
    animation: text 2s linear forwards;
  }
  @media (max-width: 918px) {
    h3 {
      font-size: 56px;
    }
    p {
      font-size: 20px;
    }
  }
  @media (max-width: 767px) {
    top: 20%;
    width: 85%;
  }
  @media (max-width: 616px) {
    h3 {
      font-size: 26px;
    }
    p {
      font-size: 18px;
    }
  }
}
@keyframes text {
  100% {
    transform: translateY(0);
  }
}
</style>
