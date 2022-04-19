<template>
  <h1>Every Show Ever!</h1>
  <div v-for="show in shows" :key="show.id">
    <h2>{{ show.title }}</h2>
    <!-- .title specified which field within the array to output -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      shows: [],
      // becomes response.data in showIndex
    };
  },
  created: function () {
    this.showIndex();
  },
  methods: {
    showIndex: function () {
      axios.get("/shows.json").then((response) => {
        this.shows = response.data;
        // redefines show variable to the data of the response
        console.log("Shows index", response.data);
      });
    },
  },
};
</script>
