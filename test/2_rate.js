// Generated by LiveScript 1.5.0
(function(){
  var expect, main, big, p, moment, allCoins, slice$ = [].slice;
  expect = require('expect');
  main = require('../main/main.js');
  big = require('big.js');
  p = require('prelude-ls');
  moment = require('moment');
  allCoins = ['eth', 'btc', 'ltc'];
  describe('Rate', function(run){
    var _;
    _ = JSON.stringify;
    it('rate-index-create_BTC_ETH', function(done){
      var toDate, startCampaignDate, currencyPair, keys;
      this.timeout(90000);
      toDate = moment('2017-06-01 12:00:00', 'YYYY-MM-DD hh:mm:ss').toDate().getTime() / 1000;
      startCampaignDate = toDate - 20 * 60 * 60;
      currencyPair = 'BTC_ETH';
      keys = function(){
        var ref$;
        return Object.keys((ref$ = main.rateHistory.rateIndex[currencyPair]) != null
          ? ref$
          : {}).length;
      };
      expect(keys()).toBe(0);
      return main.rateHistory.createRateIndex({
        startCampaignDate: startCampaignDate,
        currencyPair: currencyPair,
        toDate: toDate
      }, function(err){
        expect(err).toBe(null);
        expect(keys()).toBeGreaterThan(0);
        done();
      });
    });
    it('rate-index-create_USDT_ETH', function(done){
      var toDate, startCampaignDate, currencyPair, keys;
      this.timeout(90000);
      toDate = moment('2017-06-01 12:00:00', 'YYYY-MM-DD hh:mm:ss').toDate().getTime() / 1000;
      startCampaignDate = toDate - 20 * 60 * 60;
      currencyPair = 'USDT_ETH';
      keys = function(){
        var ref$;
        return Object.keys((ref$ = main.rateHistory.rateIndex[currencyPair]) != null
          ? ref$
          : {}).length;
      };
      expect(keys()).toBe(0);
      return main.rateHistory.createRateIndex({
        startCampaignDate: startCampaignDate,
        currencyPair: currencyPair,
        toDate: toDate
      }, function(err){
        expect(err).toBe(null);
        expect(keys()).toBeGreaterThan(0);
        done();
      });
    });
    it('use-index', function(done){
      var keys;
      keys = function(){
        return Object.keys(main.rateHistory.rateIndex).length;
      };
      expect(keys()).toBeGreaterThan(0);
      return done();
    });
    it('validate-index', function(done){
      var index;
      index = main.rateHistory.rateIndex;
      console.log(index.BTC_ETH);
      expect(index.BTC_ETH['1496279700']).toBe('0.09646253029083228227');
      expect(index.BTC_ETH['1496280600']).toBe('0.09675693987362170457');
      expect(index.BTC_ETH['1496281500']).toBe('0.09592861752295677433');
      expect(index.BTC_ETH['1496282400']).toBe('0.09548791189391519931');
      expect(index.BTC_ETH['1496283300']).toBe('0.09716204780483330175');
      expect(index.BTC_ETH['1496284200']).toBe('0.09672959373174968323');
      expect(index.BTC_ETH['1496285100']).toBe('0.09714683235457762815');
      expect(index.BTC_ETH['1496286000']).toBe('0.09849250302780128774');
      expect(index.BTC_ETH['1496286900']).toBe('0.0987041884630781329');
      expect(index.BTC_ETH['1496287800']).toBe('0.09920800627020897573');
      expect(index.BTC_ETH['1496288700']).toBe('0.09835841956083734385');
      expect(index.BTC_ETH['1496289600']).toBe('0.09767701194639689776');
      expect(index.BTC_ETH['1496290500']).toBe('0.0978859470654553916');
      expect(index.BTC_ETH['1496291400']).toBe('0.0973667326462719241');
      expect(index.BTC_ETH['1496292300']).toBe('0.09709661343155509171');
      expect(index.BTC_ETH['1496293200']).toBe('0.09677887507421285383');
      expect(index.BTC_ETH['1496294100']).toBe('0.09750921687975925812');
      expect(index.BTC_ETH['1496295000']).toBe('0.09745885041498921889');
      expect(index.BTC_ETH['1496295900']).toBe('0.09752093052299601421');
      expect(index.BTC_ETH['1496296800']).toBe('0.09776152047870758321');
      expect(index.BTC_ETH['1496297700']).toBe('0.0976395299242219353');
      expect(index.BTC_ETH['1496298600']).toBe('0.09767165595510213404');
      expect(index.BTC_ETH['1496299500']).toBe('0.09851383741323430677');
      expect(index.BTC_ETH['1496300400']).toBe('0.09789061751187147101');
      expect(index.BTC_ETH['1496301300']).toBe('0.09710277061138622951');
      expect(index.BTC_ETH['1496302200']).toBe('0.09704065595624124193');
      expect(index.BTC_ETH['1496303100']).toBe('0.0971213415668452932');
      expect(index.BTC_ETH['1496304000']).toBe('0.09623592708655126199');
      expect(index.BTC_ETH['1496304900']).toBe('0.09533368734198909928');
      expect(index.BTC_ETH['1496305800']).toBe('0.09389105047247266473');
      expect(index.BTC_ETH['1496306700']).toBe('0.09430878867405417301');
      expect(index.BTC_ETH['1496307600']).toBe('0.09476392182510527175');
      expect(index.BTC_ETH['1496308500']).toBe('0.09434161402172733173');
      expect(index.BTC_ETH['1496309400']).toBe('0.09440318693300964315');
      expect(index.BTC_ETH['1496310300']).toBe('0.09422987749686263119');
      expect(index.BTC_ETH['1496311200']).toBe('0.09437541993288284248');
      expect(index.BTC_ETH['1496312100']).toBe('0.09423480179700469022');
      expect(index.BTC_ETH['1496313000']).toBe('0.0950620572310785529');
      expect(index.BTC_ETH['1496313900']).toBe('0.09572315159116917355');
      expect(index.BTC_ETH['1496314800']).toBe('0.09609890405986908839');
      expect(index.BTC_ETH['1496315700']).toBe('0.09521569092462984114');
      expect(index.BTC_ETH['1496316600']).toBe('0.09466042015927515673');
      expect(index.BTC_ETH['1496317500']).toBe('0.09429862663102370146');
      expect(index.BTC_ETH['1496318400']).toBe('0.09330860236293775517');
      return done();
    });
    it('rate-history-0', function(done){
      var result;
      this.timeout(25000);
      result = main.rateHistory.getRate("2017-06-01 11:00:00");
      expect(_(result)).toBe(_({
        ETH: {
          BTC: '0.09521569092462984114',
          CHF: '221.35216978046772883573'
        }
      }));
      return done();
    });
    it('rate-history-1', function(done){
      var result;
      this.timeout(15000);
      result = main.rateHistory.getRate("2017-06-01 10:00:00");
      expect(_(result)).toBe(_({
        ETH: {
          BTC: '0.09423480179700469022',
          CHF: '218.96725721500082564989'
        }
      }));
      return done();
    });
    it('rate-history-2', function(done){
      var result;
      this.timeout(15000);
      result = main.rateHistory.getRate("2017-06-01 09:00:00");
      expect(_(result)).toBe(_({
        ETH: {
          BTC: '0.09434161402172733173',
          CHF: '220.11719164516814684538'
        }
      }));
      return done();
    });
    it('rate-history-3', function(done){
      var result;
      this.timeout(15000);
      result = main.rateHistory.getRate("2017-06-01 08:00:00");
      expect(_(result)).toBe(_({
        ETH: {
          BTC: '0.09533368734198909928',
          CHF: '222.15297001160537129368'
        }
      }));
      return done();
    });
    it('rate-history-3-duplicate', function(done){
      var result;
      this.timeout(15000);
      result = main.rateHistory.getRate("2017-06-01 08:00:00");
      expect(_(result)).toBe(_({
        ETH: {
          BTC: '0.09533368734198909928',
          CHF: '222.15297001160537129368'
        }
      }));
      return done();
    });
    it('rate-history-4', function(done){
      var result;
      this.timeout(8000);
      result = main.rateHistory.getRate("2017-06-01 06:00:00");
      expect(_(result)).toBe(_({
        ETH: {
          BTC: '0.0976395299242219353',
          CHF: '223.83178639860049175969'
        }
      }));
      return done();
    });
    it('rate-history-4-duplicate', function(done){
      var result;
      this.timeout(8000);
      result = main.rateHistory.getRate("2017-06-01 06:00:00");
      expect(_(result)).toBe(_({
        ETH: {
          BTC: '0.0976395299242219353',
          CHF: '223.83178639860049175969'
        }
      }));
      return done();
    });
    it('rates-cryptocompare', function(done){
      var coins, checkRate, checkRates;
      this.timeout(5000);
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