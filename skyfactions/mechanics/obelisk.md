---
description: A description of the important administrative system known as the Obelisk.
---

# Obelisk

The Obelisk is a block with configurable CustomModelData that can be used on either a player island or faction island to do many important tasks. When you create an island, the Obelisk will be place at the location specified in the `obelisk.yml` config:\
`SPAWN_OFFSET: [1, 0, 0]`\
The above default value indicates that the Obelisk will be placed one block in the positive X direction from the origin point (the place where you did `//copy` when you created the island schematic.) This is true for player islands and faction islands.

An island owner can move the Obelisk at any time, but a 5 minute timeout will start which will place the Obelisk back at its previous location if it's not placed down again. The Obelisk will also be placed down automatically if the island owner leaves the island or the server. If a player or faction is challenged to a raid, and the Obelisk is not placed, it will automatically be placed then as well.

During a raid, one of the requirements to complete the raid is to mine the Obelisk, which "disables" it. Think of the Town Hall from Clash of Clans or a similar game mechanic. That being said, players should be advised to protect their Obelisk! When an attacking player mines the Obelisk, it's disabled until repaired, but can still be mined if not fixed before another raid takes place. If an island owner mines the Obelisk, they pick it up and must place it down pursuant to the timeout.

## Using the Obelisk

Clicking on the Obelisk will bring up a main menu [GUI](../installation/configuration/guis/) that can be used to administrate the island or a player's faction. In this GUI you can do several things, including:\
\- Buy or upgrade defenses\
\- View stats on your island\
\- In a faction, you can use it to promote/demote players, change faction relationships, and more\
\- Sell blocks to the Obelisk to gain [Runes](runes.md)\
\- Delete an island :cry:
