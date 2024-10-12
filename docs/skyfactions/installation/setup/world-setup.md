---
description: Guide for setting up worlds.
---

# World Setup
---
SkyFactions requires at least 2 separate worlds: One for player island and one for faction islands.\
Both island types must be separated (due to varied island schematics and region sizes for both island types, etc).\
\
At this point in time, SkyFactions does not automatically create these worlds for you. You must use a world management plugin such as [MyWorlds](https://www.spigotmc.org/resources/myworlds.39594/) to create the worlds.\
By default, the player islands world name defaults to `player_islands` and `faction_islands` for faction islands. This is all configurable in the `config.yml`.

:::danger
We do not recommend using MultiVerse. They have various bugs and certain things (such as how they store inventories in a proprietary format) make it very difficult to migrate from.
:::

To create void worlds with MyWorlds, you can use the following command:\
`/myworlds create WORLD_NAME/flat::minecraft:air;minecraft:the_void;nostructures`

This command may vary for your designated world manager. You will need to run this twice, once for player islands and once for faction islands.

Make sure to run `/island reload` for configuration changes to take effect.

:::info
After modifying configs, consider validating your .yml configs through an online YAML validator such as [YAMLlint](https://www.yamllint.com/).
:::
