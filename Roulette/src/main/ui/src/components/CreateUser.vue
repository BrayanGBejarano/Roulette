<template>
  <div class="container">
    <div class="row">
      <div class="col-md-7 mrgnbtm">
        <h2>Create User</h2>
        <form>
          <div class="row">
            <div class="form-group col-md-6">
              <label htmlFor="exampleInputEmail1">Name</label>
              <input
                type="text"
                class="form-control"
                v-model="firstName"
                name="firstname"
                id="firstname"
                aria-describedby="emailHelp"
                placeholder="First Name"
              />
            </div>
            <div class="form-group col-md-6">
              <label htmlFor="exampleInputEmail1">Bet</label>
              <input
                type="text"
                class="form-control"
                v-model="bet"
                name="bet"
                id="bet"
                aria-describedby="emailHelp"
                placeholder="Bet (A value between 0.11 and 0.19)"
              />
            </div>
            <div class="form-group col-md-6">
              <label htmlFor="exampleInputEmail1">Number</label>
              <input
                type="text"
                class="form-control"
                v-model="number"
                name="number"
                id="number"
                aria-describedby="emailHelp"
                placeholder="Number"
              />
            </div>
            <div class="form-group col-md-6">
              <label htmlFor="exampleInputEmail1">Color</label>
              <input
                type="text"
                class="form-control"
                v-model="color"
                name="color"
                id="color"
                aria-describedby="emailHelp"
                placeholder="Color (Black, Red or Green)"
              />
            </div>
            <div class="form-group col-md-6">
              <label htmlFor="exampleInputEmail1">Money</label>
              <input
                type="text"
                class="form-control"
                v-model="money"
                name="money"
                id="money"
                aria-describedby="emailHelp"
                placeholder="15000"
              />
            </div>
          </div>
          <button type="button" @click="createUser()" class="btn btn-danger">
            Play
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateUser",
  props: ["actualMoney"],
  data() {
    return {
      firstName: "",
      bet: "",
      color: "",
      number: "",
      money: "15000",
      empty: "",
    };
  },
  methods: {
    createUser() {
      console.log(this.firstName);
      const payload = {
        firstName: this.firstName,
        bet: this.bet,
        color: this.color,
        number: this.number,
        money: this.money,
        empty: this.empty,
      };
      this.$emit("createUser", payload);
      this.clearForm();
    },
    play() {
      console.log(this.firstName);
      const payload = {
        firstName: this.firstName,
      };
      this.$emit("play", payload);
      //this.clearForm();
    },
    clearForm() {
      this.bet = "";
      this.number = "";
      this.color = "";
      this.money = this.actualMoney;
    },
  },
};
</script>