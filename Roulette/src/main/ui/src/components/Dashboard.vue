<template>
  <div class="hello">
    <Header />
    <div class="container mrgnbtm">
      <div class="row">
        <div class="col-md-8">
          <CreateUser 
          @createUser="play($event)"
          :actualMoney="actualMoney"
          @getMoney="getMoney()"
          />
        </div>
        <div class="col-md-4">
          <DisplayBoard
            :numberOfUsers="numberOfUsers"
            :numColor="numColor"
            @getbet="getBet()"
          />
        </div>
      </div>
    </div>
    <div class="row mrgnbtm">
      <Users 
      :name="name"
      :selection="selection"
      @getuser="getUsers()"
      />
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import CreateUser from "./CreateUser.vue";
import DisplayBoard from "./DisplayBoard.vue";
import Users from "./Users.vue";
import { getBet, play, getUsers, getMoney } from "../services/UserService";

export default {
  name: "Dashboard",
  components: {
    Header,
    CreateUser,
    DisplayBoard,
    Users,
  },
  data() {
    return {
      users: [],
      numColor: "",
      numberOfUsers: 0,
      name: "",
      selection: 0,
      selectedColor: "",
      actualMoney: 0,
    };
  },
  methods: {
    getBet() {
      getBet().then((response) => {
        console.log(response);
        this.numColor = response[0];
        this.numberOfUsers = response[1];
      });
    },
    getMoney(){
      getMoney().then((response)=> {
        console.log(response);
        this.actualMoney = response;
      });
    },
    getUsers() {
      getUsers().then((response) => {
        console.log(response);
        this.users = response;
        this.name = response[0];
        this.selection = response[1];
        this.selectedColor = response[2];
        this.actualMoney = response[3];
      });
    },
    play(data) {
      console.log("data:::", data);
      play(data).then((response) => {
        console.log(response);
        this.getBet();
        this.getMoney();
      });
    },
  },
  mounted() {
    this.getBet();
  },
};
</script>