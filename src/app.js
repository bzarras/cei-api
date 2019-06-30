const express = require("express");
const helment = require("helmet");
const app = express();
const companyData = require("./lib/companyData");

app.use(helment());
app.use((req, res, next) => {
    console.log(`${(new Date()).toISOString()} ${req.method} ${req.url}`);
    next();
});

app.get("/health", (req, res, next) => {
    res.send({ status: "ok" });
});

app.get("/companies", (req, res, next) => {
    res.send(companyData.getAllCompanyNames());
});

app.get("/cei", (req, res, next) => {
    if (!req.query.company) {
        return res.status(400).send({ clientError: "Request missing 'company' query parameter" });
    }
    const score = companyData.getCEIScoreForCompany(req.query.company);
    if (score === undefined) {
        return res.status(404).send({ clientError: "Company not found" });
    }
    res.send({
        company: req.query.company,
        cei_2019: score
    });
});

app.use((req, res, next) => {
    res.sendStatus(404);
});

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send({ serverError: "There was a server error. Please try again later"});
});

module.exports = app;
