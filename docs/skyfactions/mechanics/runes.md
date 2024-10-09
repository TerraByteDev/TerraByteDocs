---
description: A new currency type used to administrate your island or faction.
---

# Runes

Runes are an important resource in SkyFactionsReborn. Runes are used to upgrade the island, especially defenses, as well as repair the defenses after a raid. Using the Obelisk, navigate to the Runes page, which opens up an inventory GUI that you can use to sell Runes. By default, any blocks except ores have a base reward system of 1 Rune per 4 blocks. However, ores have another configurable reward system.

The first section simply allows you to change the base reward for runes given. Next, you can filter lore or enchants,  perhaps to limit _accidentally_ selling an important item to the Obelisk. Furthermore, you can filter specific materials, either in a blacklist or whitelist. Finally, at the bottom of the config is a custom reward system based on the [material](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html#enum-constant-summary).

## Default Runes Configuration File

```yaml
# ____ _  _ _  _ ____ ____
# |__/ |  | |\ | |___ [__
# |  \ |__| | \| |___ ___]
#

# =============== RUNES CONFIG =============== #

# Runes are SkyFaction's 'currency'. It allows you to advance in the game,
# including purchase defences, upgrade islands / factions and more.

# To gain Runes, you can convert blocks into Runes.
# This configuration file allows you to customise the amount of Runes
# that players will get per block / item, as well as override it
# for certain blocks.

# This is the base configuration for runes.
# Unless overriden in the OVERRIDES section, all items & blocks
# will apply to this configuration.
RUNES:
  FOR_EACH: 4 # For every 4 blocks / items input...
  GIVE: 1 # You will get one rune in return.

# General filters to what items / blocks are allowed or not.
FILTERS:
  ALLOW_LORE: true # Allow items with custom lore.
  ALLOW_ENCHANTS: true # Allow items with enchants.
  MATERIALS:
    # If enabled, all items in LIST will not be convertible. If disabled, only items in LIST will be convertible.
    # The OVERRIDES entries bypass this.
    IS_BLACKLIST: true

    LIST:
      - STRING
      - STICK
      - MINECART
      - HOPPER_MINECART
      - CHEST_MINECART
      - FURNACE_MINECART
      - TNT_MINECART
      - DECORATED_POT
      - PAINTING
      - PLAYER_HEAD
      - ARMOR_STAND

# Override the default configuration for certain blocks / items.
# FOR_EACH does not apply here.
# Runes given PER ITEM.
OVERRIDES:
  COAL: 1
  COAL_ORE: 3
  COAL_BLOCK: 9

  COPPER: 1
  COPPER_ORE: 3
  COPPER_BLOCK: 9

  REDSTONE: 3
  REDSTONE_ORE: 9
  REDSTONE_BLOCK: 18
  
  IRON: 5
  IRON_ORE: 15
  IRON_BLOCK: 45
  
  LAPIS: 6
  LAPIS_ORE: 18
  LAPIS_BLOCK: 54
  
  EMERALD: 7
  EMERADLD_ORE: 21
  EMERALD_BLOCK: 63
  
  GOLD: 8
  GOLD_ORE: 24
  GOLD_BLOCK: 72
  
  DIAMOND: 10
  DIAMOND_ORE: 30
  DIAMOND_BLOCK: 90
  
  ANCIENT_DEBRIS: 20
  NETHERITE_BLOCK: 810
```

:::info
After modifying configs, consider validating your .yml configs through an online YAML validator such as [YAMLlint](https://www.yamllint.com/).
:::