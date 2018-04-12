<template>
  <main class="main">
    <div class="contactContainer">
      <v-card class="contactCard">
        <v-form
          v-model="valid"
          name="contact"
          method="POST"
          @submit.prevent="handleSubmit"
        >
          <h2>Contact Me</h2>
          <v-text-field
            id="contact-email"
            v-model="form.email"
            :rules="emailRules"
            name="email"
            label="Email Address"
            required
            validate-on-blur
          />
          <v-text-field
            id="contact-subject"
            v-model="form.subject"
            name="subject"
            label="Subject"
          />
          <v-text-field
            id="contact-message"
            v-model="form.message"
            :rules="messageRules"
            name="message"
            label="Message"
            multi-line
            auto-grow
            required
          />
          <v-btn
            :disabled="!valid"
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
import punycode from 'punycode';
export default {
  data() {
    return {
      form: {
        email: '',
        subject: '',
        message: ''
      },
      valid: false,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(punycode.encode(v)) || 'E-mail must be valid'
      ],
      messageRules: [
        v => !!v || 'Message is required'
      ]
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
