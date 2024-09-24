import test from "node:test";
import assert from "node:assert/strict";
import { Interface } from "fuels";
import { abi } from "./abi";

const contract = new Interface(abi);

test("invalid", () => {
 // Log of the transaction https://app.fuel.network/tx/0xe0444456b1becec5da47aee439ac1dd5cdf1380cc82f116cd36941aeb63cff91/advanced
 const result = contract.decodeLog(
  "0x0000000000000064336b7c06352a4b736ff6f688ba6885788b3df16e136e95310ade51aa32dc6f0500000000000000001ef4ca23f77ddd39400e32199f1e7e4a85dff2067a850ee0944ed6ece25c30fe00000000000000000000000000000064",
  "12590297951544648000"
 );

 // Run npm run start to see the error

 assert.equal(result, {});
});
