import AnimaScroll from './modules/animaScroll.js'
import MenuMobile from './modules/menu-mobile.js';



const animaScroll = new AnimaScroll('[data-anime="scroll"],[data-anime="itens"] ')
animaScroll.init();

const menuMobile = new MenuMobile('.menu-mobile-button', '.menu-nav ul')
menuMobile.init();