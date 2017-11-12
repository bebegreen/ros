import angular from 'angular';
import './dashboard.scss';

class DashBoardCtrl {

  constructor($state) {
    'ngInject';

    this.$state = $state; 

    this.priorityPrintingData = [
      { title: 'first', data: [] },
      { title: 'second', data: [] },
      { title: 'third', data: [] }
    ]; 
    
  }
  $onInit() { 
    this.categories = angular.copy(this.itemListData);
  }
  handleExitEditMode(e) { 
    this.$state.go('dashboard')
  }

}

const DashBoard = {
  bindings: { itemListData: '<' },
  controller: DashBoardCtrl,
  template: `
    <h1>Manage Your Menu</h1>
    <section id='dashboard'>

      <item-list class='item' categories='$ctrl.categories'></item-list>
      <printing-priority class='item' data='$ctrl.priorityPrintingData'></printing-priority>
      
      <div ui-view='editItem' ng-click='$ctrl.handleExitEditMode()'></div>

    </section>
  `
}

export default DashBoard;