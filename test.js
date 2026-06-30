const qwenHandler = require("./LLM/ollama");

async function testQwen() {
  await qwenHandler.talkToQwen("Hello, Qwen! How are you today?");
}
testQwen();
// console.log("qwenHandler", qwenHandler);
