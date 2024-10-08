---
description: How to set up defences.
---

# Defences

In SkyFactionsReborn/defences, you can configure the island defences to your liking. In this guide, individual settings will be referred to as "keys" such as `costs.buy`. To create your own defences with different stats, you can create a new yaml file with one of these types, or you can just edit the existing config files.

## Keys

* `name` - The name of the defence in the Obelisk.
* `type` - The [defence type](defences.md#defence-types).
* `cost` - The cost to purchase or sell the defence from the Obelisk, measured in [Runes](runes.md), as well as the cost to upgrade it. Supports [mathematical expressions](defences.md#math).
* `max_level` - The maximum level the defence can be upgraded to.
* `sounds` - Here you can define [sounds](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Sound.html) that will be displayed during events.
* `messages` - These are death or healing messages. Placeholders: %player\_name% - Player / %defender% - Defender (player or faction name). Healing types can use the placeholder %health\_increase%. You can define multiple messages here and it will pick one at random.
* `attributes` - The stats of the defence. Supports [mathematical expressions](defences.md#math).
* `experience_drops` - How much exp, if any, drops when the defence kills a certain mob. See [entities](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/EntityType.html).
* `projectile` - The type of projectile shot by the defence. For non-arrow types, put `NONE`. See [entities](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/EntityType.html) for valid projectile values.
* `particle` - To get fancy, you can use [particle](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html) effects only if `projectile` is set to `NONE`.
* `block` - Change the block to any [material](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html#enum-constant-summary). If you use `PLAYER_HEAD` you can also define the skull value.
* `item` - Change the item when it's in a player's hotbar, same as above.
  * `lore` - Change the lore of the defence.
  * `upgrade_lore` - The lore seen when upgrading the defence.

## Defence Types

* HEALING - Heals the island owner or faction member.
* ARROW - Shoots arrows at invaders.
* SOUL - Applies wither effect on invaders, and when upgraded can apply slowness to them as well.
* FLAMETHROWER - Applies flame effect to invaders.
* POTION - Launches potions at invaders.
* SPRING - Launches invaders in the air (strategic placement could launch an invader off the island.)
* LANDMINE - Upon invader trigger, blows up.

## Math

For non-linear upgrade costs, you can use mathematical expressions in your config files. An example of a linear upgrade cost is `4 + level`. However, you may want to make it so upgrading defences becomes more expensive over time, and/or has diminishing returns on stats. In this case, you can use mathematical expressions to define the upgrade costs for defences. SkyFactionsReborn uses [exp4j](https://www.objecthunter.net/exp4j/) to evaluate mathematical expressions. You can define these expressions in `cost.ammo_cost` and `attributes`. Example:

```yaml
ATTRIBUTES:
  RANGE: "log10(2 + level) / 10"
```

In the above example, the range is evaluated by a logarithmic expression with the level of the defence as a variable.
