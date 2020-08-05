<template>
  <router-link
    :to="to"
    class="link-service text-decoration-none"
    :class="{ 'text-dark': dark, 'text-white': !dark }"
    >{{ text }}</router-link
  >
</template>
<script>
export default {
  name: "ButtonLinkPerez",
  props: ["to", "text", "dark"]
};
</script>
<style lang="scss" scoped>
.link-service {
  border: 2px solid #6379e1;
  padding: 0.7rem;
  border-radius: 3px;
  &:hover {
    background-color: #6379e1;
  }
}
</style>
