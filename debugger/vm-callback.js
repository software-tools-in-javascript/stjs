const assert = require('assert')

const VirtualMachineSourceMap = require('./vm-source-map')

class VirtualMachineCallback extends VirtualMachineSourceMap {
  constructor (program, dbg) {
    super(program)
    this.dbg = dbg
    this.dbg.setVM(this)
  }

  exec (command) {
    const [op, lineNum, ...args] = command
    this.dbg.handle(this.env, lineNum, op)
    assert(op in this,
      `Unknown op "${op}"`)
    return this[op](args, lineNum)
  }

  message (prefix, val) {
    this.dbg.message(`${prefix} ${val}`)
  }
}

module.exports = VirtualMachineCallback
