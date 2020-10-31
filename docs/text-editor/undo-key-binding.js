class KeyBinding {
  constructor (key) {
    this.key = key
    this.isDefault = false
  }

  init (editor) {
    // does nothing but can be overridden
  }

  run (editor, key) {
    throw new Error('key binding classes must implement run method')
  }

  undo (editor, key) {
    // does nothing but can be overridden
  }
}

module.exports = KeyBinding