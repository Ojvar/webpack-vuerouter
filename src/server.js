"use strict";

import Path from "path";
import Express from "express";
const App = Express();

App.set("views", Path.resolve("views"));
App.use(Express.static(Path.resolve("dist")));

App.get("/", (req, res, next) => {
    res.render("index.html");
});

App.listen(8000, () => {
    console.log("Server started at port 8000");
});
