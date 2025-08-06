let phase = null

let setPhase = (value) => (phase = value)

let getPhaseMessage = phase => {
  switch (phase) {
    case true:
      return 'Data is [Loading]'

    case false:
      return 'Data is [Loaded]'

    default:
      return `Message for state "${state}" is not defined`
  }
}
