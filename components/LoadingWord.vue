<script setup>
</script>

<template>
  <div>
    <ul>
      <li>
        <div class="loader">
          <div class="child" />
        </div>
      </li>

      <li>
        <div class="text" />
      </li>
    </ul>
  </div>
</template>

<style lang="css" scoped>
.loader {
  width: 100px;
  height: 3px;
  background-color: #061428;
  border-radius: 20px;
  overflow: hidden;
}

.child {
  width: 60px;
  height: 3px;
  background-color: #061428;
  border-radius: 20px;
  z-index: 0;
  margin-left: -60px;
  animation: go 1s 0s infinite;
}

@keyframes go {
  from {
    margin-left: -100px;
    width: 80px;
  }
  to {
    width: 30px;
    margin-left: 110px;
  }
}

ul {
  list-style: none;
}

.text {
  width: 100px;
  height: 30px;
  background-color: transparent;
  margin-top: 20px;
  text-align: center;
}

.text::before {
  content: "Loading";
  color: white;
  animation: text 1s 0s infinite;
}

@keyframes text {
  0% {
    content: "Loading";
  }

  30% {
    content: "Loading.";
  }

  60% {
    content: "Loading..";
  }

  100% {
    content: "Loading...";
  }
}
</style>
