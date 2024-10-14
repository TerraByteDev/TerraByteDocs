# Configuring Projectiles
To configure your defence you must specify a projectile (unless it is a landmine or spring defence).
This is so the plugin can detect when a player is hit by a defence.

## Types of Projectiles
The available projectiles is limited to the [Projectile Interface](https://jd.papermc.io/paper/1.21.1/org/bukkit/entity/Projectile.html) - See the All Known Subinterfaces section.
To make it easier, see the below table for who you should configure for each subinterface.

| Config Projectile        |      Projectile Subinterface      |
| ------------- | ------------- |
| ARROW      | AbstractArrow |
| ABSTRACT_WIND_CHARGE | AbstractWindCharge |
| DRAGON_FIREBALL | DragonFireball |
| EGG | Egg |
| ENDPPEARL | EnderPearl |
| FIREBALL | Fireball |
| FIREWORK | Firework |
| FISHHOOK | FishHook |
| LARGE_FIREBALL | LargeFireball |
| LINGERING_POTION | LingeringPotion |
| LLAMA_SPIT | LlamaSpit |
| SHULKER_BULLET | ShulkerBullet |
| SMALL_FIREBALL | SmallFireball |
| SNOWBALL | Snowball |
| SPECTRAL_ARROW | SpectralArrow |
| SPLASH_POTION | SplashPotion |
| THROWABLE_PROJECTILE | ThrowableProjectile |
| THROWN_EXP_BOTTLE | ThrownExpBottle |
| THROWN_POITION | ThrownPotion |
| TIPPED_ARROW | TippedArrow |
| TRIDENT | Trident |
| WIND_CHARGE | WindCharge |
| WITHER_SKULL | WitherSkull |

>[!NOTE]
>This has excluded SizedFireball. This will not be supported.