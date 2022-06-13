import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config';

import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'
import '/node_modules/primeflex/primeflex.css'

import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import RadioButton from 'primevue/radiobutton';
import Card from 'primevue/card';
import Panel from 'primevue/panel'
import InputText from 'primevue/inputtext';
import InputMask from 'primevue/inputmask';
import Checkbox from 'primevue/checkbox';
import Dropdown from 'primevue/dropdown';
import InputNumber from 'primevue/inputnumber';
import Calendar from 'primevue/calendar';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';






const app = createApp(App);

app.use(PrimeVue);
app.use(ToastService);

app.component('Dialog', Dialog);
app.component('Button', Button);
app.component('RadioButton', RadioButton);
app.component('Card', Card);
app.component('Panel', Panel);
app.component('InputText' , InputText);
app.component('InputMask', InputMask);
app.component('Checkbox', Checkbox);
app.component('Dropdown', Dropdown);
app.component('InputNumber', InputNumber);
app.component('Calendar', Calendar);
app.component('Toast', Toast);

app.mount('#app')
