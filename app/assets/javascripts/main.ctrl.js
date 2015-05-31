angular.module('app').controller("MainController", function(){

  var vm = this;

  vm.title = 'Angkor';

  vm.searchInput = '';

  vm.companies = [

    {
        name: 'Gilead',
        marketCap: 153,
        holding: false

    },

    {
        name: 'King Digital',
        marketCap: 441,
        holding: true

    },

    {
        name: 'Wayside Technology',
        marketCap: 84,
        holding: false

    },
        
    { 
        name: 'GlobeImmune Inc',
        marketCap: 55,
        holding: false
    },

    { 
        name: 'Gold Resource Corp',
        marketCap: 189,
        value: false

    }

  ];

  vm.orders = [

      {
          id: 0,
          name: 'Market Cap Ascending',
          key: 'marketCap',
          reverse: false

      },

      {
          id: 1,
          name: 'Market Cap Descending',
          key: 'marketCap',
          reverse: true
      },

      {

          id: 2,
          name: 'Name Ascending',
          key: 'name',
          reverse: false

      },

      {
          id: 3,
          name: 'Name Descending',
          key: 'name',
          reverse: true

      }

  ];

  vm.order = vm.orders[1];

  vm.new = {};
  vm.addCompany = function() {

      vm.companies.push(vm.new);
      vm.new = {};

  };

  
    
  vm.deleteCompany = function(company) {

    var index = vm.companies.indexOf(company);
    vm.companies.splice(index, 1);
  }




});






























