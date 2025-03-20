import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'
import WeHaveSlider from './components/we_have_slider.svelte'
import BannerSlider from './components/banner_slider.svelte'

const app = mount(App, {
  target: document.getElementById('app')!,
})

const we_have_slider = mount(WeHaveSlider, {
  target: document.getElementById('we_have_slider')!,
})

const banner_slider = mount(BannerSlider, {
  target: document.getElementById('banner')!,
})

export default app
