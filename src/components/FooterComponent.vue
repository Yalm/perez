<template>
  <div class="copyright text-center">
    © {{ year }} Grúas Pérez.Todos los derechos reservados.
  </div>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    year: new Date().getFullYear()
  })
};
</script>
<style lang="scss" scoped>
.copyright {
  border-top: 1px solid #1d2037;
  background-color: #030720;
  padding: 2rem 0 2rem;
  color: #848bba;
}
</style>
