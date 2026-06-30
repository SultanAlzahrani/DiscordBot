# Discord Bot

A Discord bot built with Node.js.

## Requirements

- Node.js 18+ (LTS recommended)
- npm
- A Discord application and bot token

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

Start the bot with:

```bash
node index.js
```

## Running with PM2 (Recommended)

Install PM2 globally:

```bash
npm install -g pm2
```

Start the bot:

```bash
pm2 start index.js --name discord-bot
```

View logs:

```bash
pm2 logs discord-bot
```

Restart:

```bash
pm2 restart discord-bot
```

Stop:

```bash
pm2 stop discord-bot
```

Save the PM2 process so it starts automatically after a reboot:

```bash
pm2 save
pm2 startup
```

Follow the command that `pm2 startup` prints to complete the setup.

## Project Structure

```
.
├── commands/
├── events/
├── utility/
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
| `GUILD_ID` | Discord server ID (used for guild commands) |
| `OLLAMA_API_KEY` | API key used for Ollama requests |

## Notes

- Never commit your `.env` file.
- Add `.env` to your `.gitignore`.
- If your bot token is ever exposed, regenerate it immediately from the Discord Developer Portal.
