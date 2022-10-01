import { createApp } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'
import App from './App.vue'
import Contacts from './Contacts.vue'
import Login from './Login.vue'
import { createRouter, createWebHistory } from 'vue-router';

library.add(fas, faFacebook, faGoogle)

const router = createRouter({
    history: createWebHistory(),
    routes : [
        {
            name: 'MyLogin',
            path: '/',
            component: Login,
        },

        {
            name: 'MyContacts',
            path: '/contacts',
            component: Contacts
        }
    ]
})

createApp(App).use(router).component('fas', FontAwesomeIcon).mount('#app')
