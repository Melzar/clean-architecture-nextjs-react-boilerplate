# Clean Architecture Next JS Boilerplate

### DESCRIPTION

This repository is a real life example of Clean Architecture with use of `Next.js` and `Typescript`

[//]: # (![Clean Architecture Diagram]&#40;clean.diagram.architecture.svg&#41;)

##### Technologies used

* `Typescript`
* `Next.js 14`
* `Docker`
* `Cucumber`
* `Mockoon`
* `Jest`
* `Playwright`
* `Storybook`

##### Structure

1. app ( `Next.js app folder` )

        Contains application structure related to Next.js 14

2. core ( `Application Core` )

        Contains loggers, event tracking logic etc

3. data

        Contains definition of data sources 

4. dataStore 
    
        Contains definition of state like redux, zustand etc

4. domain

        Contains definition of models, repositories, usecases etc

5. ioc

        Contains definition of dependency injection related structures ( Container and modules )

6. presentation

        Contains definition of presenters ( MVP ) and presenter related models

7. ui

        Contains definiton for user facing markup ( React.js ), server side components, styles etc

### PREREQUISITIES

* `Yarn`
* `Docker`

### SETUP

* `Yarn install`

### HOW TO RUN LOCALLY

* `docker compose up`
* To access app `http://localhost:3000/`
* To access storybook `http://localhost:6006/`

### TESTING

#### Unit Tests

1. Run `yarn test`

#### E2E Tests

1. Run `yarn test:e2e`

#### Mutational Tests

1. Read guide [here](https://stryker-mutator.io/stryker/quickstart) to setup global dependencies
2. Run `yarn test:mutate` command

### APPLIED CONCEPTS

#### Page Object

`Page Object` - models objects used within specific tests.

#### Request Object

`Request object` - holds data which is transferred between modules ( `DTO` ). 

#### Repository

`Repository` is an abstraction over data source. Defined actions which can be done over data source, and clear definition of
input and output

#### UseCase

`UseCase` can be understood as operation performed by user which is based on a specific data source. 

#### Mapper

The Simple concept, where one module data structure is translated to another module

##### Data -> Domain Mapper

This mapper is prepared for mapping data source format data into domain format. The Simplest example would be that, in
a database we store `first_name` and `last_name` in separate columns, but in a domain we need to have field `name` which
is combined value of previously mentioned columns. In that case we define domain model with required fields and new `name` field.
In a Mapper, we can perform merging of those 2 values. 

##### Domain -> Presentation Mapper

This mapper is for preparing Domain data format into specific presentation data format. This mapper separates domain data format 
from UI / Presentation data format. If you plan to use `dataStore` layer then you can combine `domain` + `dataStore` data 
into one `presentation` model for specific screen

### KNOWN ISSUES

* Order of stylesheets combined with routing - [Github Issue here](https://github.com/vercel/next.js/issues/13092)
* There are still some weird issues over authentication...

### STILL TODO

* Add Diagrams
* Add more tests for prepared code ( e2e and unit test )
* Update exising tests
* Add more functionality to existing project 
