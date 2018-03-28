<template>
  <main class="main">
    <div class="contactContainer">
      <v-card class="contactCard">
        <v-form
          name="contact"
          method="POST"
          netlify
        >
          <h2>Contact Me</h2>
          <v-text-field
            id="contact-email"
            name="email"
            label="Email Address"
          />
          <v-text-field
            id="contact-subject"
            name="subject"
            label="Subject"
          />
          <v-text-field
            id="contact-comments"
            name="comments"
            label="Comments"
            multi-line
            auto-grow
          />
          <v-btn
            color="success"
            type="submit"
          >
            Send
          </v-btn>
        </v-form>
      </v-card>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.contactContainer {
  display: flex;
  justify-content: center;
  padding: 1rem;
}
.contactCard {
  max-width: 775px;
  padding: 1rem;
  flex-grow: 1;
}
</style>
