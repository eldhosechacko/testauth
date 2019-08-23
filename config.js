'use strict';

const tenantName    = 'ust-global.com';
//const clientID      = '40aee588-5f30-439e-a475-598e465e4c5b';
const clientID      = "cd7ac348-4e26-4a45-9e8e-999619d45d0c";
const serverPort    = 3000;

module.exports.serverPort = serverPort;

module.exports.credentials = {
  identityMetadata: `https://login.microsoftonline.com/${tenantName}.onmicrosoft.com/.well-known/openid-configuration`, 
  clientID: clientID
};