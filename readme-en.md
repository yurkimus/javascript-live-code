## Implement function taking 3 parameters, returning URL

Parameters are:

1. `base` - base URL, may represent either base and origin of an url
2. `pathname` - path to a resource, example: "api/users", "/api/users/1"
3. `searchParams` - any value corresponds to URLSearchParams interface

## Example usage:

```javascript
makeUrl('http://server.com/api/', 'users', '?search=Alex')

makeUrl('http://server.com/', 'api/users', [['search', 'Alex']])

makeUrl('http://server.com/apii/', '/api')
```

## Handle several state of a network request

Given:

- identifier with actual state of a network,
- function mutating the state,
- function showing the state.

```js
let networkState = null,
  setNetworkState = (value) => ((networkState = value), networkState),
  getMessage = (state) => {
    switch (state) {
      case true:
        return 'Data is [Loading]'

      case false:
        return 'Data is [Loaded]'

      default:
        return `Message for state "${state}" is not defined`
    }
  }
```

Using `makeUrl` function done in the last task, make a request to `https://jsonplaceholder.typicode.com/todos`. Request only first 10 entities using `_limit` URL search parameter.

In the addition:

1. change the network state to "Loading" when the request has been started,
2. when finished, set the network equals to "Loaded",
3. handle error network state with "Error".

The rest:

1. Make an "Idle" state,
2. handle client-side request cancellation, also changing the network state,
3. propose and implement an mechanism of storing and using translations for several locale, for example: "en" and "ru",
4. do the partial application with "base" for `makeUrl` be more convinient.
