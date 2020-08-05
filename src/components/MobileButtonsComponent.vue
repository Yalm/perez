<template>
  <div class="buttons">
    <a
      aria-label="whatsappme"
      class="whatsappme__button position-fixed d-block"
      href="https://api.whatsapp.com/send?phone=51998308772"
      @click="clickWhatsapp"
    >
      <img src="@/assets/svg/whatsapp.svg" alt="whatsapp logo" />
    </a>

    <a
      aria-label="phone"
      class="phone d-block position-fixed rounded-circle d-md-none d-flex align-items-center justify-content-center text-decoration-none"
      href="tel:998308772"
      @click="clickPhone"
    >
      <i class="material-icons text-white text-truncate">phone_in_talk</i>
    </a>
  </div>
</template>
<script>
import call from '../mixins/call';
export default {
  name: "MobileButtons",
  mixins: [call],
  methods: {
    clickWhatsapp() {
      this.$ga.event({
        eventCategory: "call",
        eventAction: "click",
        eventLabel: "Call Whatsapp",
        eventValue: "whatsapp"
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.whatsappme__button {
  z-index: 400;
  bottom: 12px;
  right: 6px;
  background-color: #25d366;
  border-radius: 30px;
  box-shadow: 1px 6px 24px 0 rgba(7, 94, 84, 0.24);
  cursor: pointer;
  transition: background-color 500ms ease-in-out;
  img {
    margin: 0 12px;
  }
}
.phone {
  z-index: 400;
  bottom: 12px;
  left: 20px;
  width: 60px;
  height: 60px;
  background: radial-gradient(
    rgba(35, 35, 90, 0.8) 60%,
    rgba(35, 35, 90, 1) 62%
  );
  box-shadow: 0px 0px 25px 3px rgba(35, 35, 90, 0.8);
  i {
    font-size: 2rem;
  }
  &:before {
    content: "";
    position: absolute;
    width: 160%;
    height: 160%;
    animation-delay: 0s;
    animation: pulsate 2s;
    animation-direction: forwards;
    animation-iteration-count: infinite;
    animation-timing-function: steps;
    border-radius: 50%;
    border: 5px solid rgba(255, 255, 255, 0.75);
    top: -30%;
    left: -30%;
    background: rgba(198, 16, 0, 0);
  }
}
@keyframes pulsate {
  0% {
    transform: scale(0.6);
    opacity: 1;
    box-shadow: inset 0px 0px 25px 3px rgba(255, 255, 255, 0.75),
      0px 0px 25px 10px rgba(255, 255, 255, 0.75);
  }
  100% {
    transform: scale(1);
    opacity: 0;
    box-shadow: none;
  }
}
</style>
