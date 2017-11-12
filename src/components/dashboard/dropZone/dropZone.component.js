import './dropZone.scss';

const DropZone = {
  bindings: {
    data: '<',
    filter: '<',
    handleClick: '&'
  },
  template: `
    <ul class='drop-zone' dnd-list='$ctrl.data'>
      <li 
        ng-repeat="item in $ctrl.data | filter:$ctrl.filter" 
        dnd-draggable='item'
        dnd-moved="$ctrl.data.splice($index, 1)"
        ng-click='$ctrl.handleClick({itemId: item.id})'
      >
        <item data='item' />
      </li>
    </ul>
  `
}

export default DropZone;