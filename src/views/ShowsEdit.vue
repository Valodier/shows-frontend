<template>
  <div>
    <form v-on:submit.prevent="showUpdate(show)">
      Title:
      <input type="text" v-model="showsEditParams.title" />
      Plot:
      <input type="text" v-model="showsEditParams.plot" />
      Year:
      <input type="text" v-model="showsEditParams.year" />
      <br />
      <input type="submit" value="Update" />
    </form>
    <button v-on:click="showDestroy(show)">Destroy</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      showsEditParams: {},
      errors: {},
      show: {},
    };
  },

  created: function () {
    axios.get("/shows/" + this.$route.params.id + ".json").then((response) => {
      console.log("Show retrieved", response.data);
      this.show = response.data;
      // redefines show to data
      this.showsEditParams = this.show;
      // redefined the edit params to be the fields within show
      // this is why there is real time editing, I think
    });
  },
  methods: {
    showUpdate: function (show) {
      axios
        .patch("/shows/" + show.id + ".json", this.showsEditParams)
        .then((response) => {
          console.log("Show Updated", response.data);
          this.$router.push("/shows");
        })
        .catch((error) => {
          console.log("Error updating show", error.response);
          this.errors = error.response.data.errors;
        });
    },
    showDestroy: function (show) {
      axios.delete("/shows/" + show.id + ".json").then((response) => {
        console.log("Show Destroyed!", response.data);
        this.$router.push("/shows");
      });
    },
  },
};
</script>
