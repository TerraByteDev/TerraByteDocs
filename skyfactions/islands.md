---
description: >-
  A description of the island mechanics. This guide goes into more detail about
  the player's experience.
---

# Islands

## Player Islands

The primary concept behind the Skyblock genre is the generation of sky islands. This is facilitated by this plugin through island worlds (see: [World Setup](installation/setup/world-setup.md).) When a player creates an island using `/island create`, a cell within the `player_island` world (configurable) is selected to generate your schematic of the default sky island. A player can teleport to said island with `/island teleport`. It is up to you what this island comes with. You could make it incredibly difficult, standard per the skyblock meta, or some custom variation. It is recommended to use a plugin like [ZNPCsPlus](https://github.com/Pyrbu/ZNPCsPlus) and place an NPC at your spawn that a player can use to make an island for simplicity.

A "cell" within your `player_island` world contains its own world border, to separate it from other islands and limit the expansion. This system will respect your world border, and you can expand the amount of islands as needed.

Using the Obelisk, a block with a CustomModelData value, a player can administrate the island to add defenses and view stats, among other configurations. If you are familiar with WorldEdit/FAWE, you can change the schematic of islands to your liking.

## Faction Islands

When you create a faction, a larger island is created to house your faction, generated in the `faction_island` world. This island has access to more defenses and many features from the faction system, as well as needing a separate FAWE schematic to paste. Faction members automatically have trust to build on the island.

Faction Islands come with their own separate Obelisk that the lord of the faction can use to administrate the island as well as the faction itself.
