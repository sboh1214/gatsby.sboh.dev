const { onCreateNode, createPages } = require('./src/utils/gatsby-node.ts')

/** @type { import("gatsby").GatsbyNode } */
const config = {}
exports.config = config

config.onCreateNode = onCreateNode
config.createPages = createPages

module.exports = config
