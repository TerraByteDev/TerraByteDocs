---
description: >-
  An overview of the installation process of SFR, which is similar to installing
  most plugins.
---

# Installation

Installing the plugin is simple. Just drop the .jar right in your plugins folder and restart/start your server. Make sure you install the dependencies and you follow the system requirements below.

## System Requirements

* **Java 21** -> This plugin currently only supports 1.21, which requires Java 21.
* **Minecraft Edition** - Java Edition running Paper (recommended) or its forks Pufferfish or Purpur. We also support Folia, ShreddedPaper and MultiPaper.
* **Version** - Currently, this plugin is only built for Minecraft 1.21 and onwards, but backwards compatibility will be explored in future releases.
* **Hardware** - For a medium sized server, it is highly recommended to use at least 4 GB of RAM. Some of our dependencies and operations can be resource intensive and choke old CPUs. However, we prioritized performing as many checks and operations asynchronously when possible, so you shouldn't notice performance issues.

## Dependencies

### Required Dependencies

_The plugin will not load without these._

* [FastAsyncWorldEdit](https://github.com/IntellectualSites/FastAsyncWorldEdit/) - Faction & Player Island generation. Also just a highly necessary tool for any server. Executes operations asynchronously, so they don't hog the main thread and executes them way faster.
* [WorldGuard](https://github.com/EngineHub/WorldGuard) - Used for region defining and executing operations within said regions. Also an extremely useful tool on any server.

### Soft Dependencies

Adds extra features to the plugin, but the plugin will automatically detect if they aren't installed and proceed without them with no issues.

* [Jukebox](https://github.com/SkytAsul/JukeBox) - Hooks into JukeBox to stop any music to allow for raid music.
* [NoteblockAPI](https://github.com/koca2000/NoteBlockAPI) - A dependency for Jukebox itself, also used for providing raid music.
* [PlaceholderAPI](https://github.com/koca2000/NoteBlockAPI) - If for some reason a server owner has no reason to use placeholders, this isn't a required dependency.
* [Defence Plugin Integrations](../mechanics/defences/integrations.md) - Plugins that SkyFactions hooks into to enhance the defence mechanic.

>[!INFO]
>All of these integrations can be enabled / disabled in the `config.yml`, under `integrations`.\
>By default, they are all set to true.

## Updating the Plugin

Updating the plugin is _usually_ as simple as replacing the .jar in your plugins folder. A little known feature with Paper is that if you add a directory in your plugins folder called "update" and drag and drop the new version in there, it will automatically replace it on server restart. However, if you make major, game-altering changes to the config, you may have problems between versions as the config changes and "overwrites" your configurations. The plugin will _try_ not to do this.

It's also recommended to update the dependencies. We make comments in our [changelog](https://discord.com/channels/1252801398601420852/1253064708530110484) about this as much as possible, and will announce if a dependency plugin needs an update as we update the main plugin version.

If you're updating your server, that should be fine. However, never downgrade your server version, as it will corrupt your world permanently.

## Additional Plugin Recommendations

* [MyWorlds](https://github.com/bergerhealer/MyWorlds) - Or any world manager for that matter, although SkyFactionsReborn was built with MyWorlds in mind. It's the most stable world manager on the market.
* [LuckPerms](https://luckperms.net/download) - Running a server without LuckPerms in 2024? Couldn't be me.
* [DiscordSRV](https://github.com/DiscordSRV/DiscordSRV) - A great plugin to link Discord and Minecraft together seamlessly. Not necessarily required for the webhook feature, but useful nonetheless.

## Incompatibilites

* BetterRTP - It really doesn't make sense to use an RTP plugin on a Skyblock server. If you have any need for it, disable its use in the island world(s).
* Any Factions plugin - The use of other faction plugins on the server may result in unintended bugs and limited functionality.
* Any Skyblock plugin - You do NOT need to install any Skyblock plugin beside SkyFactionsReborn on your server and it will only cause problems if you do so.

>[!TIP]
>Moral of the story:\
>Don't be dumb. Think about what might affect the functionality of this plugin.

## Reloading

>[!CAUTION]
>**Caution!** Do not use `/reload` or plugin reloaders such as Plugman(X) to reload this plugin. It will cause unintended functionality of >multiple plugins on your server. Always restart your server.

You can reload the configuration files of our plugin using `/sf reload`. Reloading configuration files can take up to 5 seconds to apply.\
Certain configurations require a restart, such as Database configurations.
