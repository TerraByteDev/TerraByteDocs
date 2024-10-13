---
description: Guide to custom skulls.
---

# Custom Skulls

The GUI configuration system allows you to use customised skulls in your GUIs.

```yaml
ITEMS:
  CONFIRM:
    char: "y" # This is the character to use in the LAYOUT!
    material: "LIME_TERRACOTTA" # Must be a valid material. See https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html
    skull: "" # You can set custom skull textures (e.g. from minecraft-heads.com). 'material' MUST BE SET TO 'PLAYER_HEAD'
    text: "&a&lConfirm"
    sound: "ui.button.click" # Sound played when the item is clicked. Set to 'none' to disable.
    pitch: 1 # Pitch of the sound. Does not apply if 'sound' is 'none.'.
    lore:
      - "&eClick to create an island!"
```

They require a texture value (Base64 Encoded String).\
You can find custom heads from the sites such as [MCHeads.com](https://mc-heads.com/) and [Minecraft-Heads.com](https://minecraft-heads.com/).\
\
Find a skull you like, and find the "Texture Value" or "Base64 Encoded String".

>[!WARNING]
>The texture value should look like:\
>\`eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZjFhZTgwMzg0YTAwYjZmOWY2NGRkODMwN2E5MDY3NjU0NGM5N>2E3OTI5NzE2NWVhNzEzMjYyYzdkODgzMzg0NyJ9fX0=\`
\
>It will not be exact to this, but should be similar in length.

Paste this value into the `skull` value of your desired item, and ensure `material` is set to `PLAYER_HEAD`.

Reload the configurations via `/sf reload` and the changes will apply.

>[!INFO]
>You can use `%player_skull%` in the `skull` variable to return the player's skull (who opened the GUI).
