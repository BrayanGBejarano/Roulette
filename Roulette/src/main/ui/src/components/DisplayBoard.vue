<template>
  <div class="display-board">
    <h4>Now playing</h4>
    <div class="number">
      {{ numberOfUsers }}
    </div>
    <h4>{{numColor}}</h4>
  </div>
</template>

<script>
export default {
  name: "DisplayBoard",
  props: ["numColor", "numberOfUsers"],
};
</script>