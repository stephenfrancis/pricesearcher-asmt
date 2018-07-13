# PriceSearcher Assessment App


## Installation and Execution

1. `npm install`
2. Run locally: `npm run start`
3. Test locally: `npm run test`


## Explanation and Progress

I have used React to build this application, Jest for testing, and UI library based on
Google's Material Design to nicely styled components.

I used the browser's fetch API to get the data from the server, wrapped in the 'Search.tsx'
component which manages the pagination, taking advantage of the data API's pagination
functionality. The `pages_loaded` state property triggers re-rendering when a new data
page is loaded.

I then used a module called "react-infinite-scroller" to detect window scroll events
past the extent of currently displayed data and to trigger fetches of subsequent blocks
of data.

I used the Material Design GridList to lay out the results, and a toggleable Dialog
within the 'Product.tsx' component to render a more detailed view of each product. I
experimented with a module called "react-simple-charts" to try to display price history
graphically, but that caused issues that I did not have time to diagnose.

Finally, I wrote component tests in jest. I ran into issues trying to mock around the
data API and again I did not have time to rectify.



## Introduction:
At Pricesearcher we have a database of 1.1bn products with more than 90bn prices associated
with them. The website is how we communicate that data to the world and build a great
consumer experience. This is a chance for you to show us how you think we should display our
products.

* You can access a limited mock API hosted on
https://pricesearcher-frontend-test.herokuapp.com/
* The API is built using https://github.com/typicode/json-server
* And the object name is products; https://pricesearcher-frontend-test.herokuapp.com/products
* You’ll need to authenticate using an API, using a header named: X-API-KEY
* The API key is 46c0a1e171c76bb37784d60aad4df750

## Exercise

### Requirements:
* Create a website that implements two pages: a search page and a product detail page.
* Create testing for the frontend parts of your implementation.
* Provide instructions on how to build, test and run the website, including all dependencies.
* Device agnostic / Responsive design.


### You might also want to include:
* A mix of server and client-side rendering.
* Visualising the price movements of a product.
* A quick view or hover view for products.
* Pagination/infinite scroll.
* Filters and sorts (e.g. lowest price first, retailer, brand etc).

### Other:
* Don’t worry about header/footer or overall navigation.
* Aesthetics and Render performance are all very important.

When you are done, please send a tarball of your app or a github link at
vlassios@pricesearcher.com. Thanks in advance for your time and work!