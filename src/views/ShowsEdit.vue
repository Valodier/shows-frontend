<template>
  <div>
    <form v-on:submit.prevent="showUpdate(show)">
      Title:
      <input type="text" v-model="showsEditParams.title" />
      Plot:
      <input type="text" v-model="showsEditParams.plot" />
      Year:
      <input type="text" v-model="showsEditParams.year" />
      <input type="submit" value="Update" />
    </form>
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
      this.editShowParams = this.show;
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
          this.$route.push("/shows");
        })
        .catch((error) => {
          console.log("Error updating show", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
