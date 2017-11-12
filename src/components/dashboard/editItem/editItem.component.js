import './editItem.scss';
import template from './editItem.html';

class EditItemCtrl {
  constructor(dashboardService, editItemService, $state) {
    'ngInject';
    this.dashboardService = dashboardService;
    this.editItemService = editItemService;
    this.$state = $state;
    this.modifiers = this.allModifiers = null;
  }

  $onInit() {
    let { dashboardService, editItemService, item } = this;
    this.allModifiers = dashboardService.getModifiers();
    this.modifiers =
      editItemService.devideModifiers(this.allModifiers, item.modifier_groups_id);

  }

  showOptions(modifierId) {
    this.modifierOptions = this.allModifiers.find(({ id }) => id === modifierId).options;
  }

  handleSave() {
    let { item, modifiers: { currentModifiers } } = this;
    item.modifier_groups_id = currentModifiers.map(({ id }) => id);
    this.editItemService.saveItem(item)
      .then(() => {
        this.$state.go('dashboard', null, { reload: true });
      })
      .catch((err) => {
        //handle error...
      })
  }

  handleClick(e) {
    e.stopPropagation()
  }
}

const EditItem = {
  bindings: { item: '<' },
  controller: EditItemCtrl,
  template
}

export default EditItem;