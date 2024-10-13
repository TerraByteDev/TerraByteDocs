---
description: Plugin integrations into Defences.
---

# Defence Integrations
SkyFactions integrates into multiple plugins for ease of use and comfort.

This is mainly used in the defence system, allowing you to configure defences that target (or do not target) entities and other features implemented in other plugins.

>[!TIP]
> Don't see the plugin you want?
> Make a [Feature Request!](https://github.com/TerraByteDev/SkyFactionsReborn/issues/new?assignees=&labels=enhancement&projects=&template=feature-request.yml)

## Citizens
>[!TIP]
>We would recommend moving to [ZNPCsPlus](https://github.com/Pyrbu/ZNPCsPlus) (Use their latest **development** build).\
>It is an NPC plugin that is completely packet based, causing less lag and does not add extra entities!
>They also have a migrator tool built in for multiple NPC plugins such as Citizens.
>
>Other packet-based NPC plugins such as [FancyNPCs](https://modrinth.com/plugin/fancynpcs) work too.

Citizens spawns real NPC player entities rather than using packets, which means defences may target any NPC if it is within range.
SkyFactions will hook into Citizens and exclude NPCs if specified in the [Entities Configuration](managing_entities.md).

### Blacklisting NPCs
**To blacklist / whitelist Citizens NPCs in the Entities Configuration, add a new line to `ENTITY_LIST` with `NPC`.**

There is no need to hook into the likes of ZNPCsPlus and FancyNPCs as they are 100% packet based.

## MythicMobs
MythicMobs provides the ability to server owners to create custom, highly advanced mobs.

SkyFactions will hook into MythicMobs and allows you to whitelist and blacklist all / specified mobs in the [Entities Configuration](managing_entities.md).

### Blacklisting MythicMobs Entities
**To blacklist / whitelist all MythicMobs entities in the Entities Configuration, add a new line to `ENTITY_LIST` with `mythicmobs:*`..**
**To blacklist / whitelist certain MythicMobs entities in the Entities Configuration, add a new line to `ENTITY_LIST` with `mythicmobs:my_mythic_mob_identifier` - Replace `my_mythic_mob_identifier` with the actual real identifier of the mob.**