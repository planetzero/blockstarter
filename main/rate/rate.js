// Generated by LiveScript 1.5.0
(function(){
  var strategist, strategies;
  strategist = require('../strategist.js');
  strategies = [require('./rate-cryptocompare.js'), require('./rate-cache.js')];
  module.exports = strategist(strategies);
}).call(this);
