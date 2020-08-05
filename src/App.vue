<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
    <MobileButtons />
    <picture>
      <source
        srcset="https://storage.googleapis.com/perez-gruas.appspot.com/home/webp/2.webp"
        type="image/webp"
      />
      <source
        srcset="https://storage.googleapis.com/perez-gruas.appspot.com/home/jpg/2.jpg"
        type="image/jpg"
      />
      <img
        src="https://storage.googleapis.com/perez-gruas.appspot.com/home/jpg/2.jpg"
        alt="about_home"
        class="img-back position-absolute w-100"
      />
    </picture>
  </div>
</template>
<script>
import Header from "@/components/HeaderComponent.vue";
import Footer from "@/components/FooterComponent.vue";
import MobileButtons from "@/components/MobileButtonsComponent.vue";

export default {
  components: { Header, Footer, MobileButtons }
};
</script>
<style lang="scss">
.img-back {
  top: 0;
  left: 0;
  z-index: -1;
  height: 100%;
  object-fit: cover;
}
</style>
