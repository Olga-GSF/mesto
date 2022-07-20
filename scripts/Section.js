export class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderedItems = items;
    this._containerSelector = containerSelector;
    this._renderer = renderer;
  }

  setItem(element) {
    this._containerSelector.prepend(element);
  }

  renderItems() {
    this._renderedItems.forEach((item) => {
      this._renderer(item);
    });
  }

}