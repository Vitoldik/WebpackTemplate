import './index.html'
import '../styles/scss/main.scss'
import code from '../img/code_0.png'
import { mult, sum } from './calc'

const imgWrap = document.querySelector('.img')
const img = new Image()
img.src = code
img.width = 700
imgWrap.append(img)

console.log(mult(3, 4));
console.log(sum(3, 4));