<template>
  <div
    id="contact"
    v-observe-visibility="{
      callback: setActiveRoute,
      intersection: {
        threshold: 0.4,
      },
    }"
    class="bg-app-dark-blue py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24 text-white"
  >
    <div class="relative max-w-xl mx-auto">
      <!--
      <svg class="absolute left-full transform translate-x-1/2 text-app-light-blue fill-current" width="404" height="404" viewBox="0 0 404 404" aria-hidden="true">
        <defs>
          <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
      </svg>
      <svg class="absolute right-full bottom-0 transform -translate-x-1/2" width="404" height="404" fill="none" viewBox="0 0 404 404" aria-hidden="true">
        <defs>
          <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
      </svg>-->
      <SectionHeader title="Let's Talk" caption="Wanna work with me?" />
      <div>
        <v-generic-form
          ref="genericForm"
          v-slot="{ formData: form, firstError }" class="text-black" :schema="schema" @submit="sendEmail"
        >
          <p v-if="sentMessage" class="text-green-500 success mt-4 mb-3">
            {{ sentMessage }}
          </p>
          <div class="grid grid-cols-1 gap-y-6">
            <AppInput
              id="name"
              v-model="form.name"
              name="name"
              label="Name"
              :error="firstError('name')"
              autocomplete="given-name"
            />
            <AppInput
              id="email"
              v-model="form.email"
              :error="firstError('email')"
              name="email"
              label="Email"
              autocomplete="email"
            />
            <AppInput
              id="phone"
              v-model="form.phone"
              :error="firstError('phone')"
              name="phone"
              label="Phone Number(optional)"
              autocomplete="phone"
            />
            <AppTextarea
              id="message"
              v-model="form.message"
              :error="firstError('message')"
              name="message"
              label="Message"
            />
            <div>
              <button
                type="submit"
                :disabled="loading"
                :class="loading ? 'opacity-40 pointer-events-none' : ''"
                class="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-app-light-blue duration-200 hover:bg-opacity-87 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-black"
              >
                Let's talk
              </button>
            </div>
          </div>
        </v-generic-form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'
import { useActiveRoute } from '~/composables/useActiveRoute'
const sentMessage = ref('')
const genericForm = ref<any>(null)
const loading = ref(false)
const { setActiveRoute } = useActiveRoute('contact')
interface ContactForm {
  name?: string
  email?: string
  phone?: string
  message?: string
}
const schema = {
  name: {
    rules: {
      isRequired: true,
    },
  },
  email: {
    rules: {
      isRequired: true,
      email: {
        message: '^Please enter a valid email.',
      },
    },
  },
  phone: {
    rules: {
      presence: false,
      format: {
        pattern:
          // eslint-disable-next-line no-useless-escape
          /^$|[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
        flags: 'i',
        message: '^Please enter a valid phone number.',
        allowEmpty: true,
      },
    },
  },
  message: {
    rules: {
      isRequired: true,
    },
  },
}

const sendEmail = async(form: ContactForm) => {
  loading.value = true
  sentMessage.value = ''
  const emailBase = 'traynorthern@yahoo.com'
  setTimeout(() => {
    // Optimistic response 🤷🏾‍♀️
    sentMessage.value = `Thank you ${form.name}, I've received your message.`
    loading.value = false
    genericForm.value.initializeForm()
  }, 600)
  try {
    await axios.post('https://personalport-be.herokuapp.com/email', {
      subject: `Message from website by: ${form.name}`,
      from: 'foodeater563@outlook.com',
      to: emailBase,
      html: `
        Hi Trayvon, I'm ${form.name},
        <br>
        ${form.message}
        <br>
        <br>
        Also, my email is: ${form.email}
        <br>
        ${form.phone ? `My phone number is: ${form.phone}` : ''}
        `,
    })
  }
  catch (error) {
    console.log('error', error)
  }
}
</script>
