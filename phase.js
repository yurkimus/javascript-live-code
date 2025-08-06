/**
 * @typedef {any} Phase
 */

/**
 * @satisfies {Phase}
 */
let phase = null

/**
 * @satisfies {(value: Phase) => Phase}
 */
let setPhase = (value) => (phase = value)

/**
 * @param {Phase} phase
 *
 * @returns {string}
 */
let getPhaseMessage = phase => {
  switch (phase) {
    case true:
      return 'Data is [Loading]'

    case false:
      return 'Data is [Loaded]'

    default:
      return `No message provided for phase '${Phase}'.`
  }
}
