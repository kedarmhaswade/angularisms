# My Notes from Ari Lerner's Book

## Scopes

Scopes are objects that contain functionality and data to use when rendering the view.
It is the single source of truth for all views. You can think of scopes as __view models__.

### What Can Scopes Do?

Scopes have the following basic functions:
* Provide observers to watch for model changes
* Propagate model changes through the application as well as outside the system to other components
* Isolate functionality and model properties
* Provide an execution environment in which expressions are evaluated

An AngularJS app builds out _functionality of a scope_.

We can place data in the $rootScope, the ultimate scope object. But we can also explicitly create a
child $scope object using a controller. We can attach a controller object to a DOM element using
the ng-controller directive on a DOM element.

The ng-controller directive creates a new $scope object for the DOM element that it's tagged with
and nests it in the containing $rootScope.

#### New Scope Creation

When we create a controller or directive, Angular creates a new scope with the $injector
and passes this new scope for the controller or directive at runtime.

### Best Practices (Opinionated?)


1. Name our controllers as (Name)_Controller_, rather than (Name)_Ctrl_.