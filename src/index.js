var web3
var accounts
var contract

const displayHello = async () => {
  hello = await contract.methods.hello().call()
  $("#hello").html("Hello: " + hello)
}

function setHello()
{
  input = $("#my_input").val()
  async function setHelloAsync() {
    await contract.methods
      .setHello(input)
      .send({ from: accounts[0], gas: 40000 })
      displayHello(greeting, contract)
  }
  setHelloAsync()
}

async function helloApp() {
  async function asyncGetWeb3() {
    web3 = await getWeb3()
    async function asyncGetAccounts() {
      accounts = await web3.eth.getAccounts()
      async function asyncGetContract() {
        contract = await getContract(web3)
        displayHello()
      }
      asyncGetContract()
    }
    asyncGetAccounts()
  }
  asyncGetWeb3()
}

helloApp()