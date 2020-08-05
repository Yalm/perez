<template>
  <div class="contact_about">
    <ul
      class="w-100 list-unstyled mb-0 d-flex justify-content-between container flex-wrap"
    >
      <li class="d-flex align-items-center mb-3">
        <a
          href="tel:998308772"
          class="material-icons no-link text-primary rounded-circle p-3 mr-2"
          >phone_in_talk</a
        >
        <a
          href="tel:998308772"
          class="phone_contact text-white text-decoration-none"
          >+51 998 308 772</a
        >
      </li>
      <li class="d-flex align-items-center mb-3">
        <a
          href="mailto:factoriagruasperez@gmail.com"
          class="material-icons no-link text-primary rounded-circle p-3 mr-2 text-decoration-none"
          >mail</a
        >
        <a
          href="mailto:factoriagruasperez@gmail.com"
          class="phone_contact text-white text-decoration-none"
          >factoriagruasperez@gmail.com</a
        >
      </li>
      <li class="mb-3">
        <router-link
          class="contact_about_link text-decoration-none text-white d-flex align-items-center"
          to="/contacto"
        >
          Contacta con nosotros
          <i class="material-icons">navigate_next</i>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.contact_about {
  background-color: #4e52cf;
  padding: 40px 0 24px 0;
  z-index: 2;
  a.no-link {
    background-color: #4145be;
  }
  .contact_about_link {
    border: 2px solid #5f63d9;
    padding: 15px 30px;
    border-radius: 3px;
    &:hover {
      background-color: #6379e1;
    }
  }
}
</style>
