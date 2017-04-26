(function(){
  function ModalCtrl(Room,$scope){
    
    
    <!--Add methods to open, close and submit data to Firebase from the modal-->
    $scope.newRoom = {}
    $scope.newRoom.name="";
    
    $scope.closeModal=function(){
      $uibModalInstance.close()
    }
    $scope.submitModal=function(){
      $uibModalInstance.close($scope.newRoom);
    }
    
    
  }
  
  angular
    .module('blocChat')
    .controller('ModalCtrl',['$uibModalInstance'])
})();