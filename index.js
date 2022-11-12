const { version, displayName } = require("./package.json");
const contexts = require("./contexts.json");
const errorCodes = require("./errorCodes.json");
const rights = require("./rights.json");
const roles = require("./roles.json");
const settings = require("./settings.json");
const typeMap = require("./typeMap.json");
const blockTypes = require("./blockTypes.json");

const modelsList = [
  "blocks_content_components_props",
  "blocks_content",
  "blocks_context",
  "blocks",
  "comments_scores",
  "comments",
  "entries_tags",
  "entries",
  "filters_rules",
  "filters",
  "images",
  "image_sizes",
  "roles_rights",
  "roles",
  "settings",
  "tags_rights",
  "tags",
  "tokens_consumed",
  "tokens_invalid_attempts",
  "tokens",
];

const models = modelsList.map(function (modelName) {
  return require(`./models/core/${modelName}.json`);
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
  blockTypes,
};

module.exports = spec;
module.exports.default = spec;
