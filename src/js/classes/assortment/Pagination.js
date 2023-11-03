import View from '../util/View';
import NodeCreator from '../util/NodeCreator';

export default class PaginationView extends View {
  constructor(max, setPage) {
    const params = {
      tag: 'div',
      cssClasses: ['pagination'],
    };
    super(params);
    this.max = max;
    this.callback = setPage;
    this.configureView(0, setPage);
  }

  configureView(count, setPage = this.callback) {
    this.viewNode.removeAllChildren();
    // const start = new NodeCreator({
    //   tag: 'button',
    //   cssClasses: ['pagination-button'],
    //   callback: () => setPage(-99),
    // });
    const prev = new NodeCreator({
      tag: 'a',
      cssClasses: ['pagination-button'],
      callback: () => setPage(-1),
    });
    prev.getNode().href = '#assortment';
    const page = new NodeCreator({
      tag: 'p',
      cssClasses: ['pagination-page'],
      textContent: `${count + 1}`,
    });
    const next = new NodeCreator({
      tag: 'a',
      cssClasses: ['pagination-button'],
      callback: () => setPage(1),
    });
    next.getNode().href = '#assortment';
    // const end = new NodeCreator({
    //   tag: 'button',
    //   cssClasses: ['pagination-button'],
    //   callback: () => setPage(99),
    // });
    if (count <= 0) {
      // start.getNode().disabled = true;
      prev.getNode().classList.add('pagination-button_disabled');
      prev.getNode().disabled = true;
    }
    if (count >= this.max - 1) {
      next.getNode().disabled = true;
      next.getNode().classList.add('pagination-button_disabled');
      // end.getNode().disabled = true;
    }
    // this.viewNode.addInnerNode(start, prev, page, next, end);
    this.viewNode.addInnerNode(prev, page, next);
  }
}
