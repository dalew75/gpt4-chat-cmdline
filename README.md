# gpt4-chat-cmdline

Simple command line tool to ask latest ChatGPT 4 a question and get a response

## Quick Setup / Test

```bash
git clone git@github.com:dalew75/gpt4-chat-cmdline.git
cd gpt4-chat-cmdline
npm install
echo "OPENAI_API_KEY=your_api_key" > .env
node index.js "Give me me a short bio on Elon musk, including net worth, number of children, and companies he's run. Note the date of the data"
```