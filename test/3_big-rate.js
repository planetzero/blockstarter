// Generated by LiveScript 1.5.0
(function(){
  var expect, main, big, p, moment, fs, allCoins, slice$ = [].slice;
  expect = require('expect');
  main = require('../main/main.js');
  big = require('big.js');
  p = require('prelude-ls');
  moment = require('moment');
  fs = require('fs');
  allCoins = ['eth', 'btc', 'ltc'];
  describe('BigRate', function(run){
    var _;
    _ = JSON.stringify;
    it('big-rate-index-create_BTC_ETH', function(done){
      var startCampaignDate, toDate, currencyPair, getRates;
      this.timeout(120 * 1000);
      startCampaignDate = 1496063101;
      toDate = new Date();
      currencyPair = 'BTC_ETH';
      getRates = function(){
        return main.rateHistory.getRateIndex(currencyPair);
      };
      main.rateHistory.$on('create-index-start', function(arg$){
        var startCampaignDate;
        startCampaignDate = arg$.startCampaignDate;
        return console.log('create-index-start', startCampaignDate);
      }).$on('load-rates', function(arg$){
        var startCampaignDate, toDate, currentUrl;
        startCampaignDate = arg$.startCampaignDate, toDate = arg$.toDate, currentUrl = arg$.currentUrl;
        return console.log('load-rates', startCampaignDate, currentUrl, startCampaignDate > toDate);
      }).$on('aggregation-start', function(arg$){
        var start, length;
        start = arg$.start, length = arg$.length;
        return console.log('aggregation-start', start, length);
      }).$on('aggregation-stop', function(arg$){
        var end, duration;
        end = arg$.end, duration = arg$.duration;
        return console.log('aggregation-stop', end, duration);
      }).$on('create-index-end', function(arg$){
        var startCampaignDate, currentUrl;
        startCampaignDate = arg$.startCampaignDate, currentUrl = arg$.currentUrl;
        return console.log('create-index-end', startCampaignDate, currentUrl);
      });
      return main.rateHistory.createRateIndex({
        startCampaignDate: startCampaignDate,
        currencyPair: currencyPair,
        toDate: toDate
      }, function(err, rates){
        expect(err).toBe(null);
        expect(getRates()).toBe(rates);
        fs.writeFileSync("./logs/" + currencyPair + ".json", JSON.stringify(rates, null, 2));
        main.rateHistory.$off();
        done();
      });
    });
    it('big-rate-index-create_USDT_ETH', function(done){
      var startCampaignDate, toDate, currencyPair, getRates;
      this.timeout(120 * 1000);
      startCampaignDate = 1496063101;
      toDate = new Date();
      currencyPair = 'USDT_ETH';
      getRates = function(){
        return main.rateHistory.getRateIndex(currencyPair);
      };
      main.rateHistory.$on('create-index-start', function(arg$){
        var startCampaignDate;
        startCampaignDate = arg$.startCampaignDate;
        return console.log('create-index-start', startCampaignDate);
      }).$on('load-rates', function(arg$){
        var startCampaignDate, toDate, currentUrl;
        startCampaignDate = arg$.startCampaignDate, toDate = arg$.toDate, currentUrl = arg$.currentUrl;
        return console.log('load-rates', startCampaignDate, currentUrl, startCampaignDate > toDate);
      }).$on('aggregation-start', function(arg$){
        var start, length;
        start = arg$.start, length = arg$.length;
        return console.log('aggregation-start', start, length);
      }).$on('aggregation-stop', function(arg$){
        var end, duration;
        end = arg$.end, duration = arg$.duration;
        return console.log('aggregation-stop', end, duration);
      }).$on('create-index-end', function(arg$){
        var startCampaignDate, currentUrl;
        startCampaignDate = arg$.startCampaignDate, currentUrl = arg$.currentUrl;
        return console.log('create-index-end', startCampaignDate, currentUrl);
      });
      return main.rateHistory.createRateIndex({
        startCampaignDate: startCampaignDate,
        currencyPair: currencyPair,
        toDate: toDate
      }, function(err, rates){
        expect(err).toBe(null);
        expect(getRates()).toBe(rates);
        fs.writeFileSync("./logs/" + currencyPair + ".json", JSON.stringify(rates, null, 2));
        main.rateHistory.$off();
        done();
      });
    });
    it('rates-cryptocompare', function(done){
      var coins, checkRate, checkRates;
      this.timeout(120 * 1000);
      coins = allCoins;
      checkRate = function(coin, cb){
        var provider;
        provider = main.rate[coin];
        return provider(function(err, rate){
          expect(err).toBe(null);
          expect(rate).toBeA('number');
          cb(null, rate);
        });
      };
      checkRates = function(arg$, cb){
        var head, tail;
        head = arg$[0], tail = slice$.call(arg$, 1);
        if (head == null) {
          return cb(null);
        }
        return checkRate(head, function(err){
          expect(err).toBe(null);
          checkRates(tail, cb);
        });
      };
      return checkRates(coins, done);
    });
  });
}).call(this);
