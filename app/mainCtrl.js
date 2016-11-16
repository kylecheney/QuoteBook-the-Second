angular.module('quoteBook').controller('mainCtrl', function($scope, mainService){

  $scope.quotes = mainService.getQuotes();

  $scope.deleteQuote = mainService.deleteQuote;

  $scope.newQuote = function (newText, newAuthor) {
    var newQuote = {
      text : newText,
      author : newAuthor
    }
    mainService.pushQuote(newQuote);
    $scope.newText = '';
    $scope.newAuthor = '';
  }

})
