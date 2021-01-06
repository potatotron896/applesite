export default class AnimaScroll {
  constructor(sections, itens) {
    this.sections = document.querySelectorAll(sections);
    this.itens = document.querySelectorAll(itens);
    this.windowMetade = window.innerHeight * 0.5;

    this.checkDistance = this.checkDistance.bind(this)
  }
  getPosition() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.windowMetade),
      }
    });
  }

  checkDistance() {
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add('ativo');
      } else if (item.element.classList.contains('ativo')) {
        item.element.classList.remove('ativo');
      }
    });
  }
 
    init() {
      if(this.sections.length) {
        this.getPosition();
        this.checkDistance();
        window.addEventListener('scroll', this.checkDistance)
      }
      return this
    }

  }