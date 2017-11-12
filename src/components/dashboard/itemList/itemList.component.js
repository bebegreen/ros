import './item-list.scss';


const ItemList = {
  bindings: { categories: '<' },
  template: `

    <h3 ng-if='!$ctrl.categories'>Loading Items...</h3>
    <h3>Food Items</h3>
    <input type='text' ng-model='$ctrl.filter' placeholder='Search'> 
    <div 
      class='categorie' 
      ng-repeat="cat in $ctrl.categories | filter:$ctrl.filter" 
    >
      <h4>
        {{cat.name}}
      </h4>
      <drop-zone 
        data='cat.items || cat.options' 
        filter='$ctrl.filter'
      />
    </div>
  `
}

export default ItemList;

