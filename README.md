# Angularisms

Use bower. The bower.json file already contains dependencies required.
All the components are linked from local bower_components.

This repo has code examples with built-in angular (local) support, so I could try these on the train with no WiFi. Somehow plunkr.co had some issues and I thought this was a good way to share stuff.

These are mostly my notes/thoughts based on Ari Lerner's book and my own experiments.

## Scopes

Scopes are objects that contain functionality and data to use when rendering the view. It is the single source of truth for all views. You can think of scopes as __view models__.

### What Can Scopes Do?

Scopes have the following basic functions:
* Provide observers to watch for model changes.
* Propagate model changes through the application as well as outside the system to other components.
* Isolate functionality and model properties.
* Provide an execution environment in which expressions are evaluated.

An AngularJS app builds out _functionality of a scope_.

We can place data in the $rootScope, the ultimate scope object. But we can also explicitly create a child $scope object using a controller. We can attach a controller object to a DOM element using the ng-controller directive on a DOM element.

The ng-controller directive creates a new $scope object for the DOM element that it's tagged with and nests it in the containing $rootScope. The $scope will be 'made aware' of the model changes.

### New Scope Creation

__When we create a controller or a directive__, Angular creates a new scope with the $injector and passes this new scope for the controller or directive at runtime.

### Directives and Scopes

Directives, which are used all throughout our Angular apps, generally do not create their own $scopes, but there are cases when they do. For instance, the ng-controller and ng-repeat directives create their own child scopes and attach them to the DOM element.

## Controllers

Controllers in AngularJS exist to augment the view of an AngularJS application. 

The controller in AngularJS is a _function_ that adds additional functionality to the scope of the view. We use it to set up an initial state and to add custom behavior to the _scope object_.

When we create a new controller on a page, Angular passes it a new $scope. This new $scope is where we can set up the initial state of the scope on our controller. Since Angular takes care of handling the controller for us, we only need to write the constructor function. Setting up an initial controller _properly_ looks like this:

```javascript
    var app = angular.module('app', []); // the app expressed as an Angular module
    app.controller('HelloController', function ($scope) {}); //create a controller that is attached when the ng-controller attribute on an html element says ng-controller='HelloController'

Let's say our html is like this -- see example: [simple-button-clicks-using-controller-and-directives.html].

One major distinction between AngularJS and other JavaScript frameworks is that the controller is _not_ the appropriate place to do _any DOM manipulation or formatting, data manipulation, or state maintenance_.
It simply _holds the $scope/model_. It is simply the glue between the view and the $scope model.
