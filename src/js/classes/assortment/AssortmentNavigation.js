import NodeCreator from '../util/NodeCreator';
import Observer from '../util/Observer';
import View from '../util/View';

export default class AssortmentNavigationView extends View {
  constructor(productsList, setProducts) {
    const params = {
      tag: 'ul',
      cssClasses: ['assortment-list'],
    };
    super(params);
    this.observer = Observer.getInstance();
    console.log(this.observer);
    this.configureView(productsList, setProducts);
  }

  configureView(productsList, setProducts) {
    productsList.forEach((item, index) => {
      const listItem = new NodeCreator({
        tag: 'li',
        cssClasses: ['assortment-list__item'],
      });
      const button = new NodeCreator({
        tag: 'button',
        cssClasses: ['assortment-list__button'],
        textContent: item.title,
        callback: () => {
          setProducts(index);
          this.observer.dispatch('assortment-button');
          button.getNode().classList.add('assortment-list__button_active');
        },
      });
      if (index === 0) {
        button.getNode().classList.add('assortment-list__button_active');
      }
      this.observer.subscribe('assortment-button', () => {
        button.getNode().classList.remove('assortment-list__button_active');
      });
      listItem.addInnerNode(button);
      this.viewNode.addInnerNode(listItem);
    });
  }
}
