const glob = require("glob");
const path = require("path");
const { version, displayName } = require("./package.json");
const contexts = require("./contexts.json");
const errorCodes = require("./errorCodes.json");
const rights = require("./rights.json");
const roles = require("./roles.json");
const settings = require("./settings.json");
const typeMap = require("./typeMap.json");

const models = glob
  .sync(path.join(__dirname, "models/**/*.json"))
  .map(function (file) {
    return require(path.resolve(file));
  });

const spec = {
  version,
  contexts,
  displayName,
  errorCodes,
  rights,
  roles,
  settings,
  typeMap,
  models,
};

module.exports = spec;
module.exports.default = spec;
