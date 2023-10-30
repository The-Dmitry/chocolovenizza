import View from '../util/View';
import AssortmentGrid from './AssortmentsGrid';
import PaginationView from './Pagination';

export default class AssortmentProductsView extends View {
  imageCache = new Map();

  constructor() {
    const params = {
      tag: 'div',
      cssClasses: ['assortment-products'],
    };
    super(params);
    this.grid = null;
    this.pagination = null;
    this.page = 0;
    this.max = 0;
  }

  configureView({ products }) {
    this.max = Math.ceil(products.length / 6);
    this.page = 0;
    this.viewNode.removeAllChildren();
    this.grid = new AssortmentGrid(products, this.imageCache);
    if (products.length > 6) {
      this.pagination = new PaginationView(
        this.max,
        this.switchPage.bind(this)
      );
      this.addViewInside(this.grid, this.pagination);
    }
    this.addViewInside(this.grid);
  }

  switchPage(num) {
    this.page += num;
    if (this.page < 0) {
      this.page = 0;
    }
    if (this.page > this.max) {
      this.page = this.max - 1;
    }
    this.grid.setPageNumber(this.page);
    this.pagination.configureView(this.page);
  }
}
