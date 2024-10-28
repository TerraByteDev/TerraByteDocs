---
description: A detailed guide concerning SkyFaction's NPC integrations.
---

# NPC Integration
SkyFactions hooks into multiple NPC Plugins to allow for **per-island NPCs**.
This plugin hooks into:

- ZNPCsPlus
- FancyNPCs
- Citizens

>[!TIP]
>Don't see the NPC plugin you have? Join our [Discord](https://discord.gg/Y7DVR9gpwa) and ask for an integration!

# Configuring NPC Integrations

This is the NPCs section in the `config.yml` file.
```yaml
# SkyFactions can hook into numerous NPC plugins to add support
# for per-island NPCs, such as Jerry from Hypixel SkyBlock.
# You can configure the system for this here.
NPC:
  # Whether the NPC system should be enabled or not.
  ENABLED: false

  # Specify which NPC plugin (factory) to use.
  # Possible Factories: "citizens" / "znpcpsplus" / "fancynpcs"
  # Specifing an invalid factory or a factory that is not installed will
  # cause the plugin to disable.
  FACTORY: "znpcsplus"
  
  # The display name of the NPC.
  NAME: "&9Sky Master"

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

    # Actions(s) to run when the NPC on faction islands are interacted with.
    FACTION_ISLANDS: 
      - "[console] tell %player_name% You clicked me!"
```

## Actions
The actions configuration allows you to configure what the plugin will do when the NPCs are interacted with.
See the below table for the possible actions.

>[!INFO]
>All the actions support PlaceholderAPI parsing, [color parsing](/skyfactions/installation/setup/messages).\
> You can **additionally** use the placholder `%player_name%` to fetch the name of the player who interacted with the NPC.

| Action | Description |
| ------ | ----------- |
| `[console] %command%` | Run a command as the console. |
| `[player] %command%` | Run a command as the played who interacted with the NPC. |