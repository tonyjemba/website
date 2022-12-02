<template>
  <div class="w-full ">
    <TheTitle heading="About Me" underline-class="justify-start" />

    <div class="w-11/12  flex justify-center mx-auto ">
      <div class=" sm:w-10/12 flex flex-col space-y-20 md:space-y-0 md:flex-row  justify-center mx-auto">
        <div class="w-full md:grow font-gsans">
          <div class=" space-y-6">
            <p>
              Hello! My name is New and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I
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
            <div class="grid grid-cols-2  gap-y-2 text-sm ">
              <AboutSkillsList skill="JavaScript (TypeScript)" />
              <AboutSkillsList skill="Cypress & Jest" />
              <AboutSkillsList skill="React (Next)" />
              <AboutSkillsList skill="Git" />
              <AboutSkillsList skill="vue (Nuxt)" />
              <AboutSkillsList skill="Node.js" />
            </div>
          </div>
        </div>
        <div class="flex w-full justify-center md:justify-end">
          <AboutProfilePicture />
        </div>
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
