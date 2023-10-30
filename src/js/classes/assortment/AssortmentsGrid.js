import NodeCreator from '../util/NodeCreator';
import View from '../util/View';

export default class AssortmentGrid extends View {
  limit = 6;

  constructor(products, imageCache) {
    const params = {
      tag: 'div',
      cssClasses: ['assortment-grid'],
    };
    super(params);
    this.page = 0;
    this.cache = imageCache;
    this.products = products;
    this.addSmallCards();
  }

  setPageNumber(num) {
    this.page = num;
    this.addSmallCards();
  }

  addSmallCards() {
    this.viewNode.removeAllChildren();
    const step = this.page * this.limit;
    const array = this.products.slice(step, step + this.limit);
    array.forEach((item, index) => {
      const container = new NodeCreator({
        tag: 'div',
        cssClasses: ['products-list__item'],
        callback: this.showLargeCard.bind(this, index),
      });
      this.loadImage(container, item.image);
      this.viewNode.addInnerNode(container);
    });
  }

  showLargeCard(index) {
    const container = new NodeCreator({
      tag: 'div',
      cssClasses: ['modal-container'],
      callback: (e) => e.stopPropagation(),
    });
    const prev = new NodeCreator({
      tag: 'button',
      cssClasses: ['modal__prev', 'modal-button'],
      callback: this.showLargeCard.bind(this, index - 1),
    });
    const next = new NodeCreator({
      tag: 'button',
      cssClasses: ['modal__next', 'modal-button'],
      callback: this.showLargeCard.bind(this, index + 1),
    });
    next.getNode().disabled = index + 1 >= this.products.length;
    prev.getNode().disabled = index <= 0;
    const content = new NodeCreator({
      tag: 'div',
      cssClasses: ['modal__content'],
    });
    const image = new NodeCreator({
      tag: 'div',
      cssClasses: ['modal__image'],
    });
    const info = new NodeCreator({
      tag: 'div',
      cssClasses: ['modal__info'],
    });
    const sequence = new NodeCreator({
      tag: 'p',
      cssClasses: ['modal__sequence'],
      textContent: `${index + 1} / ${this.products.length}`,
    });
    info.addInnerNode(
      ...this.createDescription(this.products[index]),
      sequence
    );
    this.loadImage(image, this.products[index].image, true);
    content.addInnerNode(image, info);
    container.addInnerNode(prev, content, next);
    this.showModal(container);
  }

  createDescription(product) {
    const title = new NodeCreator({
      tag: 'p',
      cssClasses: ['modal__title'],
      textContent: product.title,
    });
    const filling = new NodeCreator({
      tag: 'ul',
      cssClasses: ['modal__filling'],
    });
    const sostav = new NodeCreator({
      tag: 'li',
      textContent: 'Состав:',
    });
    filling.addInnerNode(sostav);
    product.filling.forEach((el) => {
      const item = new NodeCreator({
        tag: 'li',
        textContent: el,
      });
      filling.addInnerNode(item);
    });
    const weight = new NodeCreator({
      tag: 'p',
      cssClasses: ['modal__weight'],
      textContent: `Вес: ${product.weight}г`,
    });
    const size = new NodeCreator({
      tag: 'p',
      cssClasses: ['modal__size'],
      textContent: `Размер упаковки: ${product.packageSize.join('x')} см`,
    });
    return [title, filling, weight, size];
  }

  loadImage(node, url, modal = null) {
    node.addInnerNode(this.spinner());
    if (!this.cache.has(url)) {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        this.cache.set(url, img);
        node.removeAllChildren();
        node.addInnerNode(this.cache.get(url));
      };
    } else {
      node.removeAllChildren();
      if (modal) {
        node.addInnerNode(this.cache.get(url).cloneNode(true));
        return;
      }
      node.addInnerNode(this.cache.get(url));
    }
  }

  spinner() {
    return new NodeCreator({
      tag: 'div',
      cssClasses: ['spinner'],
    });
  }
}
