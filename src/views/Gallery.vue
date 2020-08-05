<template>
  <div class="gallery pb-5 pt-5">
    <div class="container d-flex flex-wrap pb-5 px-0">
      <h1 class="col-12 text-white text-center pt-3 h1 font-weight-bold">
        Galería
      </h1>
      <div class="col-12 mb-md-5 mb-4">
        <div class="separator-page" />
      </div>
      <button class="col-md-6 zoom p-md-0 border-0" @click="showMultiple(0)">
        <img
          class="img-fluid"
          src="https://farm2.staticflickr.com/1976/44874237625_aee350b26b_b.jpg"
          alt="galeria-perez"
        />
      </button>
      <div class="col-md-6">
        <div class="row">
          <button
            class="col-md-6 p-md-0 zoom border-0"
            @click="showMultiple(1)"
          >
            <img
              class="img-fluid"
              src="https://farm5.staticflickr.com/4843/45737060192_ee03d570e6_b.jpg"
              alt="galeria-perez"
            />
          </button>
          <button
            class="col-md-6 p-md-0 zoom border-0"
            @click="showMultiple(2)"
          >
            <img
              class="img-fluid"
              src="https://farm2.staticflickr.com/1968/45737059832_82c71aa297_b.jpg"
              alt="galeria-perez"
            />
          </button>
          <button class="col-12 p-md-0 zoom border-0" @click="showMultiple(3)">
            <img
              class="img-fluid"
              src="https://farm5.staticflickr.com/4877/44874230415_0c59064a3a_b.jpg"
              alt="galeria-perez"
            />
          </button>
        </div>
      </div>
      <button class="col-md-3 p-md-0 zoom border-0" @click="showMultiple(4)">
        <img
          class="img-fluid"
          src="https://farm2.staticflickr.com/1944/44874231715_03291814fd_b.jpg"
          alt="galeria-perez"
        />
      </button>
      <div class="col-md-3">
        <div class="row">
          <button class="col-12 p-md-0 zoom border-0" @click="showMultiple(5)">
            <img
              class="img-fluid"
              src="https://farm5.staticflickr.com/4816/44874232555_a959c5a81d_b.jpg"
              alt="galeria-perez"
            />
          </button>
          <button class="col-12 p-md-0 zoom border-0" @click="showMultiple(6)">
            <img
              class="img-fluid"
              src="https://farm2.staticflickr.com/1918/31915866648_ac66e48e26_b.jpg"
              alt="galeria-perez"
            />
          </button>
        </div>
      </div>
      <button class="col-md-6 p-md-0 zoom border-0" @click="showMultiple(7)">
        <img
          class="img-fluid"
          src="https://farm2.staticflickr.com/1959/31915865128_65a37823d6_b.jpg"
          alt="galeria-perez"
        />
      </button>
    </div>
    <vue-easy-lightbox
      :visible="visible"
      :imgs="imgs"
      :index="index"
      @hide="handleHide"
    />
  </div>
</template>
<script>
import VueEasyLightbox from "vue-easy-lightbox";
export default {
  name: "gallery",
  components: { VueEasyLightbox },
  data: () => ({
    imgs: [
      "https://farm2.staticflickr.com/1976/44874237625_aee350b26b_b.jpg",
      "https://farm5.staticflickr.com/4843/45737060192_ee03d570e6_b.jpg",
      "https://farm2.staticflickr.com/1968/45737059832_82c71aa297_b.jpg",
      "https://farm5.staticflickr.com/4877/44874230415_0c59064a3a_b.jpg",
      "https://farm2.staticflickr.com/1944/44874231715_03291814fd_b.jpg",
      "https://farm5.staticflickr.com/4816/44874232555_a959c5a81d_b.jpg",
      "https://farm2.staticflickr.com/1918/31915866648_ac66e48e26_b.jpg",
      "https://farm2.staticflickr.com/1959/31915865128_65a37823d6_b.jpg"
    ], // Img Url , string or Array
    visible: false,
    index: 0 // default
  }),
  methods: {
    showMultiple(index) {
      this.index = index; // index of imgList
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    }
  }
};
</script>
<style lang="scss" scoped>
.zoom {
  position: relative;
  overflow: hidden;
  img {
    transition: all 0.3s;
    max-width: 100%;
  }
  &:hover img {
    transform: scale(1.1);
  }
}
</style>
