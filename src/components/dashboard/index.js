import angular from 'angular';
import uirouter from '@uirouter/angularjs';
import DashBoard from './dashboard.component';
import ItemList from './itemList/itemList.component';
import Item from './item/item.component';
import PrintingPriority from './printingPriority/printingPriority.component';
import DropZone from './dropZone/dropZone.component';
import EditItem from './editItem/editItem.component';
import DashBoardService from './dashboard.service';
import EditItemService from './editItem/editItem.service'; 

import routes from './dashboard.routes';

export default angular.module('ROS.dashboard', [uirouter])
  .component('dashboard', DashBoard)
  .component('itemList', ItemList)
  .component('item', Item)
  .component('printingPriority', PrintingPriority)
  .component('dropZone', DropZone)
  .component('editItem', EditItem)
  .service('dashboardService', DashBoardService)
  .service('editItemService', EditItemService)
  .config(routes)
  .name; 
