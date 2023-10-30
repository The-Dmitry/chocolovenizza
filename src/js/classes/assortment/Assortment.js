import View from '../util/View';
import products from '../../data/Products';
import AssortmentNavigationView from './AssortmentNavigation';
import AssortmentProductsView from './AssortmentProducts';

const assortmentNode = document.querySelector('.assortment');

class AssortmentView extends View {
  constructor() {
    const params = {
      tag: 'div',
      cssClasses: ['assortment-container', 'container'],
    };
    super(params);
    this.navigationView = new AssortmentNavigationView(
      products,
      this.setProducts.bind(this)
    );
    this.productsView = new AssortmentProductsView(products);
    this.configureView();
    this.setProducts(0);
  }

  configureView() {
    assortmentNode.append(this.viewNode.getNode());
    this.addViewInside(this.navigationView, this.productsView);
  }

  setProducts(id) {
    this.productsView.configureView(products[id]);
  }
}

const assortment = new AssortmentView();
