import './printingPriority.scss';


const PrintingPriority = {
  bindings: {
    data: '<'
  },
  // controller: PrintingPriorityCtrl,
  template: `
  
    <h3>
      printing priorities
    </h3>
    <div 
      class='priorityBox'
      ng-repeat="priority in $ctrl.data"
      
    >
      <h3>{{ priority.title }}</h3>
      <drop-zone data='priority.data'></drop-zone>
    </div>
  `
}

export default PrintingPriority;