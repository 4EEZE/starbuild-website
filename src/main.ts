import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'
import We_have_slider from './components/we_have_slider.svelte'

const app = mount(App, {
  target: document.getElementById('app')!,
})

const we_have_slider_script = mount(We_have_slider, {
  target: document.getElementById('we_have_slider_script')!,
})


export default app
export { we_have_slider_script }
