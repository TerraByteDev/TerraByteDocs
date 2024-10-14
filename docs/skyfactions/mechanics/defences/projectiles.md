# Configuring Projectiles
To configure your defence you must specify a projectile (unless it is a landmine or spring defence).
This is so the plugin can detect when a player is hit by a defence.

## Types of Projectiles
The available projectiles is limited to certain types in the [EntityType Enum](https://jd.papermc.io/paper/1.21.1/org/bukkit/entity/EntityType.htmll).
To make it easier, see the below table for who you should configure for each supported projectile.

| Config Projectile        |      Projectile EntityType     |
| ------------- | ------------- |
| ARROW      | ARROW |
| WIND_CHARGE | WIND_CHARGE |
| DRAGON_FIREBALL | DRAGON_FIREBALL |
| EGG | EGG |
| ENDER_PEARL | ENDER_PEARL |
| FIREBALL | FIREBALL |
| FIREWORK | FIREWORK |
| FISHING_BOBBER | FISHING_BOBBER |
| POTION | POTION |
| LLAMA_SPIT | LLAMA_SPIT |
| SHULKER_BULLET | SHULKER_BULLET |
| SMALL_FIREBALL | SMALL_FIREBALL |
| SNOWBALL | SNOWBALL |
| SPECTRAL_ARROW | SpectralArrow |
| EXPERIENCE_BOTTLE | EXPERIENCE_BOTTLE |
| TRIDENT | TRIDENT |
| WIND_CHARGE | WIND_CHARGE |
| WITHER_SKULL | WITHER_SKULL |

>[!NOTE]
>This has excluded SizedFireball. This will not be supported.