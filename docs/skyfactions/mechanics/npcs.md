---
description: A detailed guide concerning SkyFaction's NPC integrations.
---

# NPC Integration
SkyFactions hooks into multiple NPC Plugins to allow for **per-island NPCs**.
This plugin hooks into:

- ZNPCsPlus
- FancyNPCs

**We will not be supporting Citizens for the forseeable future, due to its limitations.**\
**Furthermore, Citizens has a reputation for being laggy, whereas ZNPCsPlus and FancyNPCs are packet based, causing far less lag.**

>[!TIP]
>Don't see the NPC plugin you have? Join our [Discord](https://discord.gg/Y7DVR9gpwa) and ask for an integration!

# Configuring NPC Integrations

This is the default NPCs section in the `config.yml` file.
```yaml
# SkyFactions can hook into numerous NPC plugins to add support
# for per-island NPCs, such as Jerry from Hypixel SkyBlock.
# You can configure the system for this here.
NPC:
  # Whether the NPC system should be enabled or not.
  ENABLED: false

  # Specify which NPC plugin (factory) to use.
  # Possible Factories: "znpcpsplus" / "fancynpcs"
  # Specifing an invalid factory or a factory that is not installed will
  # cause the plugin to disable.
  FACTORY: "znpcsplus"

  # Customise the entity of the NPC.
  # See https://jd.papermc.io/paper/1.21.1/org/bukkit/entity/EntityType.html for a list
  # of valid entity types.
  ENTITY:
    # Entity type for player islands.
    PLAYER_ISLANDS: "PLAYER"

    # Entity type for faction islands.
    FACTION_ISLANDS: "PLAYER"

  NAMES:
    # NPC name for player islands,
    # You can use the placeholder "%player_name%" to display the name of the player.
    # This placeholder does not apply for faction island NPC names!
    PLAYER_ISLANDS: "&9Sky Master"
    
    # NPC Name for faction islands.
    # You can use the placeholder "%faction_name%" to display the name of the faction instead.
    FACTION_ISLANDS: "&9Sky Master"

  # Allows you to configure the skin of the NPCs for island and faction islands
  # Skin Format:
  # "url:skin_url_here" - Specify a URL to a skin texture: ZNPCsPlus and FancyNPCs only.
  # "player:name_of_player_here" - Specify the name of a player who's skim you want to display.
  # "texture:texture_data_here" - Provide the texture data of the skin manually.
  SKINS:
    # Skin of the NPC on player islands.
    # You can use the placeholder "%player_name%" for it to be the skin of the island's owner.
    # The above placeholder does not work on the Faction Island NPC skins!
    PLAYER_ISLANDS: "player:%player_name%"

    # Skin of the NPC on faction islands.
    # You can use the "%faction_owner%" placeholder to display the skim of the faction's owner.
    FACTION_ISLANDS: "player:%faction_owner"

  # This allows you to configure the offsets of where the NPC
  # will spawn, relative to the center of the island.
  OFFSETS:
    # How far from the center of player islands should the NPC be spawned?
    PLAYER_ISLANDS: [2, 0, 2] # [x, y, z]
    
    # How far from the center of faction islands should the NPC be spawned?
    FACTION_ISLANDS: [2, 0, 2] # [x, y, z]

  # Control what happens when NPCs are interacted with.
  # See https://docs.terrabytedev.com/skyfactions/mechanics/npcs.html#actions
  ACTIONS:
    # Actions(s) to run when the NPC on player islands are interacted with.
    PLAYER_ISLANDS: 
      - "[console] tell %player_name% You clicked me!"

    # Action(s) to run when the NPC on faction islands are interacted with.
    FACTION_ISLANDS: 
      - "[console] tell %player_name% You clicked me!"
```

The comments explain the functionality of each config.
Want more configuration? Ask in our [Discord](https://discord.gg/Y7DVR9gpwa).

## Actions
The actions configuration allows you to configure what the plugin will do when the NPCs are interacted with.
See the below table for the possible actions.

>[!INFO]
>All the actions support PlaceholderAPI parsing, [color parsing](/skyfactions/installation/setup/messages).\
>You can **additionally** use the placholder `%player_name%` to fetch the name of the player who interacted with the NPC.

| Action | Description |
| ------ | ----------- |
| `[console] %command%` | Run a command as the console. **Do not include a `/` at the start!** |
| `[player] <command>` | Run a command as the played who interacted with the NPC. |
| `[message] <message>` | Send a message to the player who interacted with the NPC. |
| `[givepermission] <permission.node>` | Give the player a permission node. Requires [Vault](https://www.spigotmc.org/resources/vault.34315/) to function. |
| `[removepermission] <permission.node>]` | Remove a permission from player. Requires [Vault](https://www.spigotmc.org/resources/vault.34315/) to function. |
