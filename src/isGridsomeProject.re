[@genType]
let default = () => {
  if (!Node_fs.existsSync("./gridsome.config.js")) {
    Js.Console.error("Not in the root of a Gridsome project!")
    Node_process.exit(1)
  }
};