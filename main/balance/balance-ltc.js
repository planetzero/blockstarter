// Generated by LiveScript 1.5.0
(function(){
  var request, big, iserror;
  request = require('request');
  big = require('big.js');
  iserror = require('../iserror.js')('http://ltc.blockr.io');
  module.exports = function(key, callback){
    return request("http://ltc.blockr.io/api/v1/address/info/" + key, function(err, response, body){
      var data;
      if (iserror(err, "Failed to get balance of LTC address " + key)) {
        return callback(null);
      }
      data = JSON.parse(body);
      callback(err, big(data.data.balance));
    });
  };
}).call(this);
