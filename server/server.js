import fs from 'fs';
import path from 'path';
import express from 'express';

// App bootstrap
let app = express();

// assets
app.use("/assets", express.static(path.resolve(__dirname + "/../assets")));


// webpack assets
app.use("/static", express.static(path.resolve(__dirname + "/../static")));

// root app
app.use((req, res)=>{
	let rootHtml = fs.readFileSync(path.resolve(__dirname + "/../index.html"), { encoding: 'utf8'});
	return res.status(200).send(rootHtml);
});

// start server
const port = process.env.PORT || 3000;
app.listen(port, (err)=>{
	console.log("Listening on port "+ port);
})