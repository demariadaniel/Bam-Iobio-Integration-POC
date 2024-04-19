<style lang="scss">
@import "~bootstrap/dist/css/bootstrap.css";
@import url("https://fonts.googleapis.com/css?family=Quicksand:300");
@import url("https://fonts.googleapis.com/css?family=Overlock+SC");
@import url("https://fonts.googleapis.com/css?family=Open+Sans");
@import url("https://fonts.googleapis.com/css?family=Muli");

#main {
  margin-top: 60px;
}

.welcome-modal-body {
  font-size: 18px;
}
</style>

<template>
  <div id="app">
    <div id="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/partials/AppHeader.vue";
import HelpModal from "./components/partials/HelpModal.vue";

export default {
  name: "app",

  components: {
    AppHeader,
    HelpModal
  },

  data() {
    return {
      //showWelcomeModal: false,
    };
  },

  mounted: function() {
    if (this.$route.query.reset) {
      window.location.reload(true);
    }
  },

  methods: {
    modalClosed: function() {
      localStorage.setItem("welcomeModalAlreadyShown", true);
    }
  }
};
</script>
