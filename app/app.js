
var app = angular.module("RecipeApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "app/home/home.html"
    })
    .when("/login", {
        templateUrl: "app/login/login.html",
        controller: "loginCtrl"
    })
    .when("/signup", {
        
    })
    .when("/recipes", {
        templateUrl: "app/recipes/recipeGallery.html",
        controller: "recipeGalleryCtrl"
    })
    .when("/new", {
        
    })
    .when("/recipe/:id", {
        
    })


});