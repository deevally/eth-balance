const Web3 = require("web3");
 const provider = 'https://eth-rinkeby.alchemyapi.io/v2/fyTyjfrW3GaLzzGcru2LcRDChsRmKzRh';
;
const Web3Client = new Web3(new Web3.providers.HttpProvider(provider));


let contractAddress = "0x3819f64f282bf135d62168c1e513280daf905e06";
let walletAddress = "0x131C15cC0EA5cC6D96937e765E28Cd41db67Eae9";


let minABI = [
    {
      "constant":true,
      "inputs":[{"name":"_owner","type":"address"}],
      "name":"balanceOf",
      "outputs":[{"name":"balance","type":"uint256"}],
      "type":"function"
    },
    // decimals
    {
      "constant":true,
      "inputs":[],
      "name":"decimals",
      "outputs":[{"name":"","type":"uint8"}],
      "type":"function"
    }
  ];


  let contract = new Web3Client.eth.Contract(minABI,contractAddress);
async function getBalance() {
    try {

        let balance = await contract.methods.balanceOf(walletAddress).call();
        return balance;
    }catch(e){
        console.log("THE ERROR ",e);
    }
  
}

// console.log(getBalance());

getBalance().then(function (result) {
    console.log(result);
});
