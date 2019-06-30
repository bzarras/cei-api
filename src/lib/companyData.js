const fs = require("fs");
const path = require("path");

const companiesJson = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../../resources/cei.json"), { encoding: "utf8" }));
const allCompanyNames = companiesJson.map(company => company.company);
const scoresMap = new Map();
companiesJson.forEach(company => {
    scoresMap.set(company.company, company.cei_2019);
});

exports.getAllCompanyNames = function() {
    return allCompanyNames;
};

exports.getCEIScoreForCompany = function(name) {
    return scoresMap.get(name);
};

exports.allCompanyData = companiesJson;
