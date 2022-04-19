<template>
  <div>
    <h1>Make a new one!</h1>
    <form v-on:submit.prevent="showCreate()">
      Title:
      <input type="text" v-model="newShowParams.title" />
      Plot:
      <input type="text" v-model="newShowParams.plot" />
      Year:
      <input type="text" v-model="newShowParams.year" />
    </form>
    <button v-on:click="showCreate()">Create Movie</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newShowParams: {},
      error: {},
    };
  },

  methods: {
    showCreate: function () {
      axios
        .post("/shows.json", this.newShowParams)
        .then((response) => {
          console.log("New Show Created!", response.data);
          this.$router.push("/shows");
        })
        .catch((error) => {
          console.log("Error creating Movie", error.response.data.errors);
        });
    },
  },
};
</script>
