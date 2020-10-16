'use strict';

var inherits = require('inherits');
var ClientJS = require('./client.base');
var getFlashVersion = require('./modules/flash-detection');

function ClientJSFlash() {
  ClientJS.apply(this, arguments);
}
inherits(ClientJSFlash, ClientJS);

ClientJSFlash.prototype.getFlashVersion = getFlashVersion;

module.exports = ClientJSFlash;
