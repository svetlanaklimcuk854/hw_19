class Circle {
  _radius = 0;
  pi = 3.14;
  constructor(radius) {
    this._radius = radius;
  }
  square(_radius) {
    return this.pi * this._radius ** 2;
  }
  createDefault(radius = 10) {
    return this.pi * radius ** 2;
  }
}

const defaultCircle = new Circle();
console.log(defaultCircle.createDefault());
const arr = [21, 34, 15, 13];
arr.forEach((radius) => {
  const circle = new Circle(radius);
  console.log(circle.square());
});

const items = [
  "Молоко",
  "Орехи",
  "Кофе",
  "Сахар",
  "Хлеб",
  "Йогурт",
  "Сок",
  "Бананы",
  "Мандарины",
  "Шоколад",
  "Печенье",
];

class Search {
  constructor(selector, onInput) {
    this.$element = document.querySelector(selector);
    this.$element.addEventListener("input", ({ target }) =>
      onInput(target.value.toLowerCase())
    );
  }
}

class Results {
  constructor(selector, items = []) {
    this.$element = document.querySelector(selector);
    this._items = items;
    this._searchResults = items;
    this.render();
  }

  searchItems(text) {
    this._searchResults = this._items.filter((item) =>
      item.toLowerCase().includes(text)
    );
    this.render();
  }

  render() {
    this.$element.innerHTML = this._searchResults.reduce(
      (result, item) => (result += `<li>${item}</li>`),
      ""
    );
  }
}

const results = new Results("#results", items);

const search = new Search("#search", (text) => {
  results.searchItems(text);
});
