# Say Command – Discord.js v14

A simple **Discord.js command** that allows staff members to make the bot send a message in the current channel.

This command supports both:

- **Slash Commands** (`/say`)
- **Prefix Commands** (`say`)

Only users with **Manage Messages** permission can use it.

---

## Features

- Works with **Discord.js v14**
- Supports **Slash Commands**
- Supports **Prefix Commands**
- **Ephemeral confirmation** for slash commands
- Clean and minimal command structure
- Permission restricted for moderation use

---

## Command Usage

### Slash Command

```
/say message: Hello everyone
```

Result in channel:

```
Hello everyone
```

User receives an **ephemeral confirmation**:

```
Sent
Message sent.
```

---

### Prefix Command

```
say Hello everyone
```

Result in channel:

```
Hello everyone
```

No additional reply is sent.

---

## Permissions

Users must have the following permission:

```
Manage Messages
```

This prevents normal members from using the command.

---

## 🛠 Requirements

- **Node.js 18+**
- **Discord.js v14**

Install dependencies:

```bash
npm install discord.js
```

---

## File Structure Example

```
src/
 ├─ commands/
 │   └─ General/
 │       └─ say.js
```

---

## Example Code

```js
await ctx.channel.send({ content });
```

The command simply forwards the provided message into the current channel.

---

## Possible Improvements

You can expand this command with features like:

- Send message to another channel
- Embed messages
- Anonymous messages
- Delete the command message automatically

Example ideas:

```
say #announcements Hello everyone
say --embed Hello world
say --anonymous Server maintenance tonight
```

---

## ⭐ Support

If this project helped you, consider giving the repository a **star ⭐ on GitHub**.
