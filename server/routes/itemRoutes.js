const express = require('express');
const axios = require('axios');
const cors = require('cors');
let router = express.Router();

// Search the API for an item
// we need to move this into a promise and also think about a better way to handle the request
// change to express routes so we can actually save a search into a link for people to share
router.use(express.urlencoded({ extended: false }));
router.use(express.json());
router.use(cors());
router.use((req, res, next) => {
  console.log(
    `[${req.method}] ${req.baseUrl}${req.url} @ ${req.socket.remoteAddress} from ${req.headers['user-agent']}`
  );
  next();
});

router.post('/', async (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  let tempSearchData;

  try {
    await axios
      .post('https://www.pathofexile.com/api/trade/search/Ritual', {
        query: {
          status: {
            option: 'online',
          },
          name: req.body.item.searchedItemName,
          stats: [
            {
              type: 'and',
              filters: [],
            },
          ],
          filters: {
            socket_filters: { filters: { sockets: req.body.item.sockets } },
          },
        },
        sort: {
          price: 'asc',
        },
      })
      .then((queryData) => (tempSearchData = { ...queryData.data }));
  } catch (err) {
    if ((err.code = 2)) {
      await axios
        .post('https://www.pathofexile.com/api/trade/search/Ritual', {
          query: {
            status: {
              option: 'online',
            },
            type: req.body.item.searchedItemName,
            stats: [
              {
                type: 'and',
                filters: [],
              },
            ],
          },
          sort: {
            price: 'asc',
          },
        })
        .then((queryData) => (tempSearchData = { ...queryData.data }));
    } else {
      console.log(err);
    }
  }

  await axios
    .get(
      `https://www.pathofexile.com/api/trade/fetch/${tempSearchData.result.slice(
        0,
        9
      )}?query=${tempSearchData.id}`,
      { withCredentials: true }
    )
    .then((itemData) => {
      res.send(itemData.data);
    })
    .catch((error) => console.log(error.response));
});

module.exports = router;
