
import './item.scss';

const Item = {

  bindings: {
    data: '<',
  },
  template: `
    <div id='item'>
      <P>
        {{$ctrl.data.name + ' ' + $ctrl.data.price  }}
      </P>
      <a 
        ui-sref="dashboard.editItem({ itemId: $ctrl.data.id })"
        ng-if='$ctrl.data.price'
      >
        <i class="fa fa-pencil" aria-hidden="true"></i>
      </a>
    </div>
  `
}

export default Item;