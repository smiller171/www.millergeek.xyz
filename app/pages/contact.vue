<template>
  <main class="main">
    <div class="contactContainer">
      <v-card class="contactCard">
        <v-form
          name="contact"
          method="POST"
          netlify
          @submit.prevent="handleSubmit"
        >
          <h2>Contact Me</h2>
          <v-text-field
            id="contact-email"
            v-model="form.email"
            name="email"
            label="Email Address"
          />
          <v-text-field
            id="contact-subject"
            v-model="form.subject"
            name="subject"
            label="Subject"
          />
          <v-text-field
            id="contact-comments"
            v-model="form.comments"
            name="comments"
            label="Comments"
            multi-line
            auto-grow
          />
          <v-btn
            color="success"
            type="submit"
          >
            <span>Send</span>
          </v-btn>
        </v-form>
      </v-card>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        subject: '',
        comments: ''
      }
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&');
    },
    handleSubmit() {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({ 'form-name': 'contact', ...this.form }),
      })
        .then(() => alert('Success!'))
        .catch(error => alert(error));
    }
  }
};
</script>


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
