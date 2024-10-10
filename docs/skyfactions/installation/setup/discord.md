---
description: Guide for setting up Discord integration.
---

# Discord

SkyFactions has integration with Discord, for pinging discord users when they are being raided (assuming they are not offline). This is a great feature to keep activity on your server high!\
\
To use this functionality, you must create a Discord Bot.

:::info
This is optional! Leaving the discord system as disabled will not cause any issues.
:::

## Create a Discord Bot

Head to the [Discord Developer Portal](https://discord.com/developers/applications), and click `New Application`.\
Set a name for your new bot, and click `Create`.



Head to the `Bot` tab (on the left) and scroll down to `Privileged Gateway Intents`.\
Ensure `Server Members Intent` is enabled.

<figure><img src="/assets/bot/intent.png" alt=""><figcaption><p>Enabling the <code>Server Members Intent</code> intent on the Discord Bot.</p></figcaption></figure>

:::info
Make sure to hit `Save Changes` after modifying any settings of the bot!
:::

Then head to the `OAuth2` tab (on the left) and scroll down to the `OAuth2 URL Generator`.\
Check the `bot` scope (see image).

<figure><img src="/assets/bot/oauth2.png" alt=""><figcaption><p>Checking the 'bot' scope in the OAuth2 URL Generator.</p></figcaption></figure>

Scroll down to the area that appears below (named `Bot Permissions`).\
Select the following permissions: `Read Messages / View Channels, Send Messages, Use Slash Commands` (see image).

<figure><img src="/assets/bot/perms.png" alt=""><figcaption><p>Selecting the necessary <code>Bot Permissions</code> for the Discord Bot to function.</p></figcaption></figure>

\
Copy the `Generated URL` below and open it in a new browser tab.\
Select your server, select `Continue` and then `Authorise`.

***

Head back to the `Bot` tab (on the left).\
Under `Token`, press the `Reset Token` button.\
If necessary, authenticate via 2FA and copy the token that you get.

:::danger
Do not share your Discord Bot token with anybody! It is highly sensitive and will give anyone with it access to your bot!
:::

In the `discord.yml` (located at `plugins/SkyFactionsReborn/discord.yml`), paste the entire bot token into the `TOKEN` entry.

## Setting a Raid Channel

The plugin needs the ID of the channel where all raid notifications will be sent.\
It requires Developer Mode to be enabled on your Discord account.\
To do this, head to Settings.\
Open the `Advanced` tab under `App Settings`, and turn on `Developer Mode`.

<figure><img src="/assets/bot/devMode.png" alt=""><figcaption><p>Turning on Developer Mode in App Settings in Discord.</p></figcaption></figure>

Then, head to your discord server. Right click the channel you want the raid notifications to be sent to, and click `Copy Channel ID`.

<figure><img src="/assets/bot/copyID.png" alt=""><figcaption><p>Copying the channel ID.</p></figcaption></figure>

In the `discord.yml` (located at `plugins/SkyFactionsReborn/discord.yml`), paste the entire channel ID into the `RAID_CHANNEL` entry. Reload the configuration files with `/sf reload` and you should be good to go!
