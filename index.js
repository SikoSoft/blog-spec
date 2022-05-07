const { version } = require("./package.json");
const errorCodes = require("./errorCodes.json");
const rights = require("./rights.json");
const roles = require("./roles.json");
const settings = require("./settings.json");
const typeMap = require("./typeMap.json");

module.exports = {
  version,
  errorCodes,
  rights,
  roles,
  settings,
  typeMap,
};
