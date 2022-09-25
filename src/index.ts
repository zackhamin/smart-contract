import { ethers } from "ethers";

async function getEth() {
  //@ts-ignore
  const eth = window.ethereum;
  if (!eth) {
    throw new Error("Get metamask");
  }
  return eth;
}

async function hasAccount() {
  const eth = getEth();
  //@ts-ignore
  const account = (await eth.request({ method: "eth_accounts" })) as string[];
  return account && account.length;
}

async function requestAccount() {
  const eth = getEth();
  //@ts-ignore
  const account = (await eth.request({ method: "eth_accounts" })) as string[];
  return account && account.length;
}

async function run() {
  if (!(await hasAccount()) && !(await requestAccount())) {
    throw new Error("No account?");
  }

  const hello = new ethers.Contract(
    "0xcf7ed3acca5a467e9e704c703e8d87f634fb0fc9",
    ["function hello() public pure returns (string memory)"],
    //@ts-ignore
    new ethers.providers.Web3Provider(getEth())
  );
  document.body.innerHTML = await hello.hello();
}

run();
