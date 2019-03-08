1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

.map
.filter
.concat
if we use .concat we extend properties of another object. In es6 this is down with the spread operator.


1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are created by action creators. They must have a type. They also typically have a 'payload' (conventional name used). These are dispatched by action creator to reducers. Reducers take in actions and return pure functions that update the store, this way we get consistent results. The store hold the state of the app. 

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state should be immutable.

1.  What is middleware?

It allows for async activity by giving us the option to mediate actions before they go to reducers. It can stop actions, forward actions, dispatch a different action, or dispatch multiple actions.


1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

it's a package that allows us to bring in middleware. So now our actions are incercepted before going into the reducer/s.

1.  Which `react-redux` method links up our `components` with our `redux store`?

connect!