# Tech Assesment

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Detailed solution
```
After looking at the inital JSON object I realized the objects in the NotSettled array were the same as the objects with the Billed boolean set to false, this led me to believe that they would be pending transactions. I set up my store for Vuex and set up a module for my Transactions component I added the response object to state as though it were fetched from an API. I then set up state for a starting balance and a ending balance. Upon looking over the JSON object it appeared as though the starting balance would be $400.00 thus I initalized that as it's starting state and started the ending balance at 0 then I reduced the transaction ammounts to come up with a sum of all the purchase amounts and subtracted them from the starting balance. Once I made that mutation I created an action for it and brought it into the componenet and set it to fire when created(). I then set my getter to pull in all transactions and begin displaying some data. I decided as a end user that I would want to see which transactions were pending and which were posted to handle this I made another mutation that filtered through the transactions and if Billed was true pushed it to a posted array in state and if it were false moved it to a pending array in state this allowed me to use one action to handle both conditional renders. From there I decided what information would be most relevant from a end user persepective and made sure to render it to the screen by using two different v-for directives one on the posted transactions and one on the pending this prevented me from using a v-if along with a v-for and causing re-itteration over each array during re-render. From there I had a little bit of time left of the two hours for slight styling (my only regret from the challenge was not being able to style to the standard that I normally hold myself to) With that being said I did try to borrow some of the companys color scheme.The state, getters, actions, and mutations can be found in the Modules folder in the transactions.js file. Given more time I would have like to have used a better HTML structure and style more professionally with CSS. Side note I ran the Vue create when I recieved the email on Friday however I was unable to work on it until today.
