React Webpack Starter - ReactJS Indonesia
=====================

Konfigurasi minimal untuk memulai project baru ReactJS.
Menggunakan standar ES6 oleh babel.

## Syarat Sistem

Untuk dapat menjalankan starter ini setidaknya sistem anda harus sudah terinstal NodeJS, versi terbaru direkomendasikan

## Penggunaan

### Jalankan server

```
npm install
npm run build
npm start
open http://localhost:3000
```

### Development

```
npm install
npm run dev
open http://localhost:3000
```
 


### Linting

Linting untuk react.

```
npm run lint
```
### Panduan

```
.
├── LICENSE
├── README.md
├── static						=> aset hasil ekstraksi webpack
├── assets						=> aset statis
│   └── loading.gif
├── index.html 					=> entri index.html
├── package.json
├── server 						=> direktori server
│   ├── app.js
│   └── server.js 				=> static express server
├── src 						=> semua aset frontend
│   ├── App.js 					=> root component
│   ├── index.js 				=> boot
│   ├── routes 					=> direktory untuk komponen
│   │   ├── About.js 			=> komponen react
│   │   └── Home.js 			=> komponen react
│   ├── routes.js 				=> routing (hashbang atau pushstate)
│   └── utils 					=> direktori untuk helper
│       └── HistoryContainer.js => history pushstate container
├── webpack.client.js 			=> konfigurasi webpack untuk build
├── webpack.config.js 			=> konfigurasi webpack untuk development
└── webpack.development.js 		=> webpack dev server (termasuk hot-loader)
```



### Dependencies

* React
* Webpack
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* [babel-loader](https://github.com/babel/babel-loader)
* [react-hot-loader](https://github.com/gaearon/react-hot-loader)
* [react-router](https://github.com/rackt/react-router)
* [express](http://expressjs.com/)

