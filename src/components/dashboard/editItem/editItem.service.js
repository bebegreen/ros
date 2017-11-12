export default class EditItemService {

  constructor(dashboardService) {
    'ngInject';
    this.dashboardService = dashboardService;
  }

  // devide modifier groups to item's current vs optional
  devideModifiers(allModifiers, modifierIds) {

    return allModifiers.reduce((accum, modifier) => {

      modifierIds.indexOf(modifier.id) >= 0 ?
        accum.currentModifiers.push(modifier) :
        accum.optionalModifiers.push(modifier)
      return accum;

    }, { currentModifiers: [], optionalModifiers: [] })

  }

  saveItem(updatedItem) {
    return new Promise((resolve, reject) => {
      const catagories = require('../../../mockData').catItems.categories;
      let item = this.dashboardService.getItem(catagories, updatedItem.id);
      item = Object.assign({}, item, updatedItem);
      resolve();
    })
  }
}