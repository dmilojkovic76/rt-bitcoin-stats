# rt-bitcoin-stats

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```
## Data endpoint

### On the CoinDesk website, we publish the BPI in USD, EUR, and GBP,  calculated every minute.
  Price criteria is disussed on [CoinDesk BPI Page](https://www.coindesk.com/price/).
```
https://api.coindesk.com/v1/bpi/currentprice.json
```

### The BPI converted into any of [supported currencies](https://api.coindesk.com/v1/bpi/supported-currencies.json). <br>
The \<CODE\> should be replaced by a valid ISO 4217 currency code as per [supported currencies list](https://api.coindesk.com/v1/bpi/supported-currencies.json).
```
https://api.coindesk.com/v1/bpi/currentprice/<CODE>.json
```

### Historical BPI data
```
https://api.coindesk.com/v1/bpi/historical/close.json
```

  By default, this will return the previous 31 days' worth of data. This endpoint accepts the following optional parameters:

  + **?index=\[USD/CNY...\]** The index to return data for. Defaults to USD.
  + **?currency=\<VALUE\>** The currency to return the data in, specified in ISO 4217 format. Defaults to USD.
  + **?start=\<VALUE\>&end=\<VALUE\>** Allows data to be returned for a specific date range. Must be listed as a pair of start and end parameters, with dates supplied in the YYYY-MM-DD format, e.g. 2013-09-01 for September 1st, 2013.
  + **?for=yesterday** Specifying this will return a single value for the previous day. Overrides the start/end parameter.
