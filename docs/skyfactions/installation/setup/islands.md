---
description: Guide for setting up islands.
---

# Islands
This is a lengthy guide. Read each part carefully.

## Schematics

SkyFactions uses [FastAsyncWorldEdit](https://www.spigotmc.org/resources/fastasyncworldedit.13932/) to paste in islands upon creation, in the form of WorldEdit schematics. We do not recommend WorldEdit 

:::warning
You must create these schematics yourself!\
This plugin **does not** offer any pre-built schematics in any shape or form.
:::

You must have two schematics: one for player islands and one for faction islands.\
(You can alternatively have one island for both player islands & faction islands).\
\
These schematics must be placed in `plugins/SkyFactionsReborn/schematics` folder. Configure the names of the schematic files in `config.yml` so that the plugin knows what file to use.

:::warning
When running `//copy` and then saving the schematic files, the origin (where you stand when you `//copy`, etc) **must be where you want the player to spawn**!\
The origin will be the center of each island region and that is the same position where the player spawns on their island.
:::

Make sure to run `/island reload` for changes to take effect.

:::info
After modifying configs, consider validating your .yml configs through an online YAML validator such as [YAMLlint](https://www.yamllint.com/).
:::