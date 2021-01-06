export default class MenuMobile {
  constructor(button, menu) {
    this.button = document.querySelector(button)
    this.menu = document.querySelector(menu)
    this.events = ['click']
    this.innerHeight = window.innerHeight
    this.handleClick = this.handleClick.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)
  }
  handleClick(event){
    event.preventDefault();
    this.menu.classList.toggle('ativo')
    this.button.classList.toggle('change')
    this.clickOutside(event)
  }
  clickOutside(event) {
  //  console.log(this.menu)
  //  console.log(event.currentTarget)
   window.addEventListener('click', this.handleClickOutside)
  }

    handleClickOutside(event) {
      event.preventDefault();
      if(!document.querySelector('.menu-nav').contains(event.target)) {
        this.menu.classList.toggle('ativo')
        this.button.classList.toggle('change')
        return window.removeEventListener('click', this.handleClickOutside)
    }
    
      }

  addEventBtn() {
    this.button.addEventListener(this.events, this.handleClick)
  }
  

  init(){
      this.addEventBtn();
    
    }

  }
