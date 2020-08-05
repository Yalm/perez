<template>
  <div>
    <div
      class="header w-100"
      :class="{ sticky_perez: showNavigation, absolute: headerAbsoulte }"
    >
      <div class="container p-0">
        <nav
          class="navbar navbar-expand-sm contact_details d-none d-md-block px-md-0"
          role="banner"
        >
          <div class="container-fluid">
            <ul class="navbar-nav d-flex align-items-center">
              <li class="nav-item">
                <h2 class="nav-link slogan p-0 m-0">
                  ASISTENCIA GRÚAS 24 HORAS LOS 365 DÍAS
                </h2>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link d-flex align-items-center"
                  href="tel:998308772"
                  @click="clickPhone"
                >
                  <i class="material-icons mr-1">phone_android</i> 998308772
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link d-flex align-items-center"
                  href="mailto:factoriagruasperez@gmail.com"
                  @click="clickPhone"
                >
                  <i class="material-icons mr-1">mail_outline</i
                  >factoriagruasperez@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <nav
          class="navbar nav_perez px-md-0 justify-content-md-between justify-content-start"
          role="navigation"
        >
          <router-link
            aria-label="Logo"
            class="navbar-brand p-0 m-0 order-1"
            to="/"
            type="link"
          >
            <img src="@/assets/svg/logo.svg" alt="logo" />
          </router-link>

          <button
            aria-label="open menu"
            type="button"
            class="open-nav d-md-none shadow-none btn p-0 mr-3 h-100 order-0"
            v-on:click="openMenu()"
            v-bind:class="{ active: open }"
          >
            <span class="burger d-block"></span>
          </button>

          <ul class="nav d-md-flex d-none order-2">
            <li
              class="nav-item"
              v-for="(menu, index) of menus"
              :key="'menu-desktop' + index"
            >
              <router-link
                class="nav-link p-0 position-relative text-white"
                :to="menu.path"
                :data-hover="menu.label"
                >{{ menu.label }}</router-link
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <nav
      class="mobile-nav w-100 h-100 fixed-top text-center"
      v-bind:class="{ active: open }"
      role="navigation"
    >
      <ul
        class="list-unstyled p-0 m-0 h-100 d-inline-flex justify-content-center align-items-center flex-column"
      >
        <li v-for="(menu, index) of menus" :key="'menu-mobile' + index">
          <router-link
            class="nav-link text-white position-relative font-weight-bold"
            :to="menu.path"
            >{{ menu.label }}</router-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import call from '../mixins/call';
export default {
  name: "Header",
  mixins: [call],
  data: () => ({
    showNavigation: false,
    headerAbsoulte: false,
    open: false,
    menus: [
      { label: "Inicio", path: "/" },
      { label: "Nosotros", path: "/nosotros" },
      { label: "Servicios", path: "/servicios" },
      { label: "Galería", path: "/galeria" },
      { label: "Contacto", path: "/contacto" }
    ]
  }),
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    openMenu() {
      this.open = !this.open;
    },
    handleScroll() {
      const { scrollTop } = document.scrollingElement;
      this.open = false;
      this.showNavigation = scrollTop > 200;
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler({ meta }) {
        this.headerAbsoulte = meta.headerAbsoulte;
        this.open = false;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.header {
  position: relative;
  z-index: 5;
  &.absolute {
    position: absolute;
  }
  &.sticky_perez {
    position: fixed;
    top: 0;
    animation: 400ms ease-in-out 0s normal none 1 running fadeInDown;
    background-color: rgba(35, 35, 90, 0.8);
    opacity: 0.97;
    .contact_details {
      display: none !important;
    }
    .nav_perez {
      height: 77px;
      .navbar-brand svg {
        width: 200px;
      }
    }
    &.absolute {
      position: fixed;
    }
  }
  @media (max-width: 767px) {
    position: relative;
    &.absolute {
      position: relative;
    }
    .container {
      max-width: 100%;
    }
  }
  .nav_perez {
    .navbar-brand {
      width: 25%;
      @media (max-width: 576px) {
        width: 37%;
      }
    }
    .nav-item {
      line-height: 60px;
      padding: 0 20px;
      a {
        font-size: 15px;
        font-weight: 600;
        opacity: 1;
        &::before {
          content: attr(data-hover);
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          overflow: hidden;
          color: #66ffd1;
          transition: all 0.6s cubic-bezier(0.86, 0, 0.07, 1);
        }
        &::after {
          content: "";
          display: block;
          width: 0;
          height: 3px;
          margin-top: -12px;
          transition: width 0.6s;
          background-color: #66ffd1;
        }
        &:hover,
        &.router-link-exact-active {
          &::before,
          &::after {
            width: 100%;
          }
        }
      }
    }
    @media (max-width: 950px) {
      .nav-item {
        padding: 0 8px;
      }
    }
    @media (max-width: 767px) {
      background: $info;
      position: relative;
      height: 50px !important;
    }
    .open-nav {
      position: relative;
      .burger {
        width: 20px;
        height: 2px;
        transition: all 0.2s ease-out;
        position: relative;
        background-color: #ffffff;
        border-radius: 50px;
        &:after,
        &:before {
          content: "";
          width: 20px;
          height: 2px;
          background-color: #ffffff;
          position: absolute;
          border-radius: 50px;
          left: 0;
          transition: all 0.2s ease;
        }
        &:after {
          bottom: -7px;
          width: 16px;
        }
        &:before {
          top: -7px;
        }
      }
      &.active .burger {
        background-color: transparent;
        &::before {
          top: 0;
          transform: rotateZ(45deg);
        }
        &::after {
          width: 20px;
          bottom: 0;
          transform: rotateZ(-45deg);
        }
      }
    }
  }
  .contact_details {
    color: #bbbbbb;
    .nav-link {
      font-size: 100%;
      i {
        color: #bbbbbb;
        font-size: 100%;
      }
    }
  }
}
.mobile-nav {
  z-index: 3;
  visibility: hidden;
  opacity: 0;
  transition: all 0.375s;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: -15px;
    background: $info;
    transform-origin: 0 0;
    transform: skew(-14deg) translateX(-120%);
    transition: all 0.275s 0.1s;
  }
  a {
    transform: translateY(0);
    font-size: 1.4em;
    padding: 12px 0;
  }
  .list-unstyled {
    transform: translateX(-18%) skew(-16deg);
  }
  &.active {
    opacity: 1;
    visibility: visible;
    &::before {
      transform: skew(-14deg) translateX(0);
    }
    @for $i from 1 through 5 {
      li:nth-child(#{$i}) a {
        transition: all 275ms #{125 + $i * 50}ms;
      }
    }
  }
}
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
</style>
