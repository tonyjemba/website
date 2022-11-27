<template>
  <div class="w-full ">
    <TheTitle heading="About Me" />

    <div class="w-11/12  flex justify-center mx-auto">
      <div class=" w-10/12 flex justify-center mx-auto">
        <div class="grow font-gsans">
          <div class="w-5/6">
            <p>
              Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I
              decided to try editing custom Tumblr themes — turns
              out hacking together a custom reblog button taught me a lot about HTML & CSS!
            </p>
            <p>
              Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and
              a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences
              at Upstatement for a variety of clients.
            </p>
            <p>
              I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.
            </p>
            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>
        </div>
        <div><ProfilePicture /></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.headingColor {
  color: #ccd6f6;
}
.light-mode .headingColor {
  color: black;
}
.wid{
  width: 78%;
}
</style>
