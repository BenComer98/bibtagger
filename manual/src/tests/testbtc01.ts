// RUNS ALL TEST FILES IN BATCH 1
import Test01 from "./test01";
import Test02 from "./test02";

function TestBtc01(): void {
  console.log("TEST BATCH 01... starting.");
  Test01();
  Test02();
  console.log("TEST BATCH 01... complete.");
}

export default TestBtc01;