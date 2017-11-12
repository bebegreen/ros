
routes.$inject = ['$stateProvider'];
export default function routes($stateProvider) {
  $stateProvider
    .state('dashboard',
    {
      url: '/dashboard',
      component: 'dashboard',
      resolve: {
        itemListData: (dashboardService) => dashboardService.getCategories()
      }
    })

    .state('dashboard.editItem',
    {
      url: '/:itemId',
      views: {
        'editItem@dashboard': 'editItem'
      },
      resolve: {
        item: ($transition$, itemListData, dashboardService) => {
          const { itemId } = $transition$.params()
          return dashboardService.getItem(itemListData, itemId);
        }
      }

    })




}