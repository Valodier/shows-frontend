<template>
  <div>
    <h1>Title:{{ show.title }}</h1>
    <p>Plot: {{ show.plot }}</p>
    <p>Year: {{ show.year }}</p>
    <router-link v-bind:to="`/shows/${show.id}/edit`"> Edit </router-link> |
    <router-link to="/shows"> Back to All Shows </router-link>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      show: {},
    };
  },
  created: function () {
    axios.get("/shows/" + this.$route.params.id + ".json").then((response) => {
      console.log("Show show", response.data);
      this.show = response.data;
    });
  },
};
</script>
