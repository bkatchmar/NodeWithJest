# Introduction

The purpose of this GitHub repository is to demonstrate the use of jest to introduce test driven development in a React environment. As my knowledge of React grows and matures, it is necessary to utilize this feature in order to continue with a stable React environment.

I was looking around for an elaborate tutorial for this and found [this site](https://eng.uber.com/best-practices-for-react-v16/) that I am going through to help get me started. Eventually I may want to introduce this into some of our other projects we use already with the intention of covering all of our React code eventually in unit testing.

The main component we need is enzyme which helps us with rendering components to observe their behavior, in order to install this, we ran this command

```
npm i --save-dev enzyme enzyme-adapter-react-16
```

This uses the Jest `expect()` system for assertion, documentation over this can be found [here](https://jestjs.io/docs/en/expect).

In addition to the result of a component's state or the results of a business logic module, this unit test solution allows us to test individual HTML elements, from how many of an element exists to the text within an element. Documentation for this can be found [here](https://airbnb.io/enzyme/docs/api/ReactWrapper/find.html).

## Experimental Libraries
We are experimenting with SweetAlert and using it alongside ReactStrap, to install ReactStrap, we need to run

```
npm install --save bootstrap
npm install --save reactstrap
```