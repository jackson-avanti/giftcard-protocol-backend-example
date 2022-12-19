var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/api/1', function(req, res, next) {
  res.status(200).json(
    {
      balance: 100000,
      caption: 'gift card by id',
      emissionDate: '2020-07-05T14:48:00.000Z',
      expiringDate: '2030-10-10T14:48:00.000Z',
      id: 'xpto1',
      provider: 'JacksonTest',
      transaction: {
        href: 'appliancetheme/giftcardproviders/JacksonTest',
      },
    }
  );
});

router.get('/api', function(req, res, next) {
  res.status(200).json(
    [
      {
        balance: 100000,
        caption: 'gift card by id',
        emissionDate: '2020-07-05T14:48:00.000Z',
        expiringDate: '2030-10-10T14:48:00.000Z',
        id: 'xpto1',
        provider: 'JacksonTest',
        transaction: {
          href: 'appliancetheme/giftcardproviders/JacksonTest',
        },
      },
      {
        balance: 505000,
        caption: 'gift card by id',
        emissionDate: '2020-07-06T14:48:00.000Z',
        expiringDate: '2030-10-12T14:48:00.000Z',
        id: 'xpto2',
        provider: 'JacksonTest',
        transaction: {
          href: 'appliancetheme/giftcardproviders/JacksonTest2',
        },
      }
    ]
  );
});

module.exports = router;
