const express = require('express');
const axios = require('axios');
const cors = require('cors');

//Setting up the application
const PORT = process.env.port || 1443;
const app = express();

// !!Routes
//Routes locations
const itemRoutes = require('./routes/itemRoutes');
app.use('/item', itemRoutes);

// Setting up application settings and express settings
let searchQuery = {
  query: {
    status: {
      option: 'online',
    },
    name: '',
    sort: {
      price: 'asc',
    },
  },
};

app.get('/stashes', async (req, res) => {
  await axios
    .get('http://www.pathofexile.com/api/public-stash-tabs')
    .then((res) => {
      console.log(res.data);
    });
});

app.get('/test2', async (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  let tempSearchData;
  await axios
    .post('https://www.pathofexile.com/api/trade/search/Ritual', {
      query: {
        status: {
          option: 'online',
        },
        type: 'The Doctor',
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
    .then((queryData) => (tempSearchData = { ...queryData.data }))
    .catch((error) => console.log(error.response));

  // console.log(tempSearchData) // Testing if we're getting any items back

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

app.get('/test', async (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  let tempSearchData;
  await axios
    .post('https://www.pathofexile.com/api/trade/search/Ritual', {
      query: {
        status: {
          option: 'online',
        },
        stats: [
          {
            type: 'and',
            filters: [
              {
                id: 'pseudo.pseudo_total_attack_speed',
                value: {
                  min: 15,
                  max: 20,
                },
                disabled: false,
              },
            ],
          },
        ],
      },
      sort: {
        price: 'asc',
      },
    })
    .then((queryData) => (tempSearchData = { ...queryData.data }))
    .catch((error) => console.log(error.response));

  // console.log(tempSearchData) // Testing if we're getting any items back

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

app.get('/character/:account', async (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  await axios
    .get(
      `https://www.pathofexile.com/character-window/get-characters?accountName=${req.params.account}`
    )
    .then((AccountData) => {
      console.log(AccountData); // Testing if the account data is coming back
      res.send(AccountData.data);
    });
});

app.get('/characteritems/:account/:character', async (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  await axios
    .get(
      `https://www.pathofexile.com/character-window/get-items?accountName=${req.params.account}&character=${req.params.character}`
    )
    .then((characterData) => {
      console.log(characterData.data.items); // Testing if the account data is coming back
      res.send(characterData.data.items);
    });
});

app.get('/ladder', async (req, res) => {
  res.send('I work');
});

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
