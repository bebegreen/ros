
export default class DashBoardService {

  getCategories() {
    // mock http request
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.data = require('../../mockData');
        resolve(this.data.catItems.categories.concat(this.data.modifierGroup.modifier_groups));
      }, 0)
    })
  }

  getItem(categories, itemId) {
    let item;
    for (let cat of categories) {
      item = cat.items.find(item => item.id === itemId);
      if (item) break;
    }
    return item;
  }

  getModifiers(modifiersIds) {
    return this.data.modifierGroup.modifier_groups; 
  }
}
