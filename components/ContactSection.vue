<template>
  <TheTitle heading="Get In Touch" underline-class="justify-start" />
  <div class="text-center">
    <div class="w-11/12 sm:w-8/12 md:w-8/12 lg:w-5/12 mx-auto text-center">
      <div class="font-gsans ">
        Although I’m not currently looking for any new opportunities, my inbox is
        always open. Whether you have a question or just want to say hi, I’ll try my
        best to get back to you!
      </div>
      <div class="flex justify-center my-8 mb-56">
        <div class=" cursor-pointer  textLcolor   border rounded resume-btn">
          <div class="text-center mt-3 mb-3 mr-5 ml-5 font-gsans font-bold">
            Contact me
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dark-mode .textLcolor {
  color: #00FFE1;
  transition: color .3s ease-in-out;
}
.textLcolor {
  color: #00FFE1;
}
.light-mode .textLcolor {
  transition: color .3s ease-in-out;

  color: rgba(0,0,0,0.8);
}
.light-mode .textLcolor:hover{
  transition: color .3s ease-in-out;

  color: #00FFE1;
}
.dark-mode .resume-btn {
  border-color: #00FFE1;
  background-color: #061428;
  transition: background-color .3s ease-in-out;
}
.light-mode .resume-btn {
  border-color: #00FFE1;
  background-color: #f1f1f1;
  transition: background-color .3s ease-in-out;
}
.resume-btn:hover {
  background-color: #00ffe11a;
  transition: background-color .3s ease-in-out;
}
</style>
