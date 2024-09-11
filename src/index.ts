import test from "node:test";
import assert from "node:assert/strict";
import { Interface } from "fuels";
import { abi } from "./abi";

const contract = new Interface(abi);

test("invalid", () => {
 // Log of the transaction https://app.fuel.network/tx/0xdf5719494d8b5913db2feca26095c75eed29630ca236703475c1659d3dd9a393/simple
 const result = contract.decodeLog(
  "0x00000000000001f438e4ca985b22625fff93205e997bfc5cc8453a953da638ad297ca60a9f2600bc0000000000000001ec6a71164511a3d153e6e2ece418d4886a6af045e8b1462dbf04b6dcf36731da00003faa2522600000000000000000005bcb5e9ef179746ce208c3381c8428b0de89f1fb1ced6f9201fa5005cb8dfaaa",
  "7812135309850120461"
 );

 // Run npm run start to see the error

 assert.equal(result, {});
});
