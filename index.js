const { version } = require("./package.json");
const errorCodes = require("./errorCodes.json");
const rights = require("./rights.json");
const roles = require("./roles.json");
const settings = require("./settings.json");
const typeMap = require("./typeMap.json");

const spec = {
  version,
  errorCodes,
  rights,
  roles,
  settings,
  typeMap,
};

module.exports = spec;
module.exports.default = spec;
