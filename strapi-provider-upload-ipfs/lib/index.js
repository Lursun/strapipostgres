'use strict';

/**
 * Module dependencies
 */

// Public node modules.
const IPFS = require('ipfs')

/* eslint-disable no-unused-vars */
module.exports = {
  provider: 'ipfs',
  name: 'IPFS',
  init: (config) => {
    return {
      upload: (file) => {
        return IPFS.create().then(async node=>{
            const files = await node.add(file.buffer)
            const ipfsfile = await files.next()
            const path = ipfsfile.value.path
            file.url = `https://ipfs.io/ipfs/${path}`
            return Promise.resolve()
        })
      },
      delete: (file) => {
        return IPFS.create().then(async node=>{
            const CID=file.url.substring(21)
            node.pin.rm(CID)
            return Promise.resolve()
        })
      }
    };
  }
};