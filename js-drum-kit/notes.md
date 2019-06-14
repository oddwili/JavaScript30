## Issues
- Repeated hammering of the keys in Chrome and Firefox works, but not in Safari. It sounds like there is a lag before the audio plays.

## Deprecated
[KeyboardEvent.keyCode](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode#Browser_compatibility)
- Suggested in the tutorial was to use `keyCode`, but I opted to use `key` instead and match the input event to the uppercase value of the key.
