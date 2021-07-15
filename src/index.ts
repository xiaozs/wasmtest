import * as assembly from "./assembly";
import { instantiate } from "as-loader/runtime";

async function main() {
    let { exports } = await instantiate(assembly, fetch);
    console.log(exports.test());
}

main();