require('dotenv').config();
const OpenAI = require("openai");

let [prompt] = process.argv.slice(2);

const apiKey = process.env.OPENAI_API_KEY;
const apkeyFirstFourAndLastFourWithAsterisks = `${apiKey.substring(0, 4)}****${apiKey.substring(apiKey.length - 4)}`;
console.info(`OpenAI initialized with APIKEY ${apkeyFirstFourAndLastFourWithAsterisks}`);

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function runChatPrompt(prompt) {

    const chatOptions = {
        model: "gpt-4-1106-preview",
        messages: [
            {
                "role": "user",
                "content": prompt
            }
        ],
        temperature: 1,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    };

    
    console.log(`RUNNING CHAT PROMPT: ${prompt} with options`, chatOptions);
    const response = await openai.chat.completions.create(chatOptions);
    console.log(`Got CHAT response from OpenAI: `,response);
    console.log(response.choices[0].message.content);
}

(async () => {
    await runChatPrompt(prompt);
})();
