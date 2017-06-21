

angular.module("app1",[]).controller("myCtrl1",["$scope",function ($scope) {
    setTimeout(function () {
        var mySwiper = new Swiper('.swiper-container', {
            autoplay: 2000,
            pagination: '.swiper-pagination',
            loop: true
        })
    },0)
}]);