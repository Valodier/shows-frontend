<template>
  <div>
    <p>{{ show.title }}</p>
    <p>{{ show.plot }}</p>
    <p>{{ show.year }}</p>
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
