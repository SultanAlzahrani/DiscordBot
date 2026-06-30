# Good Sir Kyletton

**Good Sir Kyletton** is a Discord bot built with Node.js that speaks in a medieval, Old English-inspired style. Mention the bot in any channel to chat with it through an AI model powered by **Gemma 3.5 27B** hosted on **Ollama**.

## Features

- Chat with **Good Sir Kyletton** by mentioning (`@`) the bot.
- AI responses generated using **Gemma 3.5 27B** hosted on **Ollama**.
- `/coin` — Flip a coin and let fate decide.
- `/cat` — Find out how much of a cat you are (in %).

## Requirements

- Node.js 18+ (LTS recommended)
- npm
- A Discord bot application
- Access to an Ollama instance running **Gemma 3.5 27B**

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd <repository-folder>
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the project root:

```env
TOKEN=your_discord_bot_token
CLIENT_ID=your_discord_application_client_id
GUILD_ID=your_discord_server_id
OLLAMA_API_KEY=your_ollama_api_key
```

## Running the Bot

Start the bot locally:

```bash
node index.js
```

## Running with PM2 (Recommended)

Install PM2:

```bash
npm install -g pm2
```

Start the bot:

```bash
pm2 start index.js --name good-sir-kyletton
```

Useful commands:

```bash
pm2 logs good-sir-kyletton
pm2 restart good-sir-kyletton
pm2 stop good-sir-kyletton
```

To automatically start the bot after a VPS reboot:

```bash
pm2 startup
pm2 save
```

Run the command that `pm2 startup` prints to finish the setup.

## Project Structure

```
.
├── commands/
├── events/
├── uitility/
├── LLM/
├── index.js
├── package.json
├── .env
└── README.md
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `TOKEN` | Discord bot token |
| `CLIENT_ID` | Discord application client ID |
| `GUILD_ID` | Discord server ID (used for guild-specific slash commands) |
| `OLLAMA_API_KEY` | API key used to access the Ollama-hosted model |

## Usage

### Chatting

Mention **Good Sir Kyletton** in any message to start a conversation.

Example:

```
@Good Sir Kyletton What thinkest thou of pineapple upon pizza?
```

The bot will reply in its signature medieval style.

### Commands

| Command | Description |
|---------|-------------|
| `/coin` | Flips a coin and returns Heads or Tails. |
| `/cat` | Calculates how much of a cat you are and returns a random percentage. |
| `/user` | Provides information about the user. |
| `/reload` | Reloads a command. |
| `/ping` | To test out the connection. |

## Version

This is an initail test fire of sorts. More commands and enhancments are coming soon. 

## Notes

- Keep your `.env` file private and add it to `.gitignore`.
- Never commit your bot token or API keys to Git.
- If your Discord bot token is ever exposed, regenerate it immediately from the Discord Developer Portal.


