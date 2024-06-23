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
