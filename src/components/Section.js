export class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderedItems = items;
    this._container = containerSelector;
    this._renderer = renderer;
  }

  addItemPrepend(element) {
    this._container.prepend(element);
  }

  addItemAppend(element) {
    this._container.append(element);
  }

  removeCard(element) {
    element.remove();
  }


  renderItems(items) {
    items.forEach((item) => {
      this._renderer(item);
    });
  }

}