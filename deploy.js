const HDWalletProvider = require('@truffle/hdwallet-provider');
const { Web3 } = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'poem beauty type endorse place pigeon actress dentist lens jar mesh ostrich',
  'https://sepolia.infura.io/v3/09f799bc191341f7b809f509e453f6f6'
);
const web3 = new Web3(provider);

const deploy = async () => {
  require('events').EventEmitter.defaultMaxListeners = 15;
  const accounts = await web3.eth.getAccounts();
 
  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({ gas: '1000000', from: accounts[0] });

  console.log(interface);
  console.log("Contract deployed to", result.options.address);
  provider.engine.stop();
};
deploy();
