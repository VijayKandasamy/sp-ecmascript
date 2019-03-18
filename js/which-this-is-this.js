export class DataSet {
  constructor() {
    this.data = ['John', 'Dan', 'Tim'];
  }

  search(letter) {
    return this.data.filter(item => item.includes(letter));
  }

  badSearch(letter) {
    return this.data.filter(function(item, index) {
      return this.data[index].includes(letter);
    });
  }

  selfSearch(letter) {
    const self = this;
    return this.data.filter(function(item, index) {
      return self.data[index].includes(letter);
    });
  }

  boundSearch(letter) {
    const predicate = function(item, index) {
      return this.data[index].includes(letter);
    }

    const predicateBound = predicate.bind(this);

    // return this.data.filter(predicate);
    return this.data.filter(predicateBound);
  }

}

const names = new DataSet();

console.log('Good search on "h": ', names.search('h'));
// console.log('Bad search on "h": ', names.badSearch('h'));
console.log('Self search on "h": ', names.selfSearch('h'));
console.log('Bound search on "h": ', names.boundSearch('h'));
