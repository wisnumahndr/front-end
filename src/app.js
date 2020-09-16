import 'regenerator-runtime';
import './styles/style.css';
import './script/component/app-bar.js';
import png from './img/logo.png';
import main from './script/view/main.js';
document.addEventListener("DOMContentLoaded", main);
CONTENT.innerHTML = `<img src="${png}" />`;