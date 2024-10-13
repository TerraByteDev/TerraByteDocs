---
description: Guide through GUIs and its configuration.
---

# GUIs

GUIs are often used in this plugin to offer a appealing interface for players to use.\
Examples of these are Island Creation, Raiding, and the Obelisk.

These GUIs offer extensive customization.

>[!WARNING]
>Different types of GUIs have different placeholders for certain items!\
>Make sure to read the comments in every file while editing!

Example GUI config (Island Creation):

```yaml
# Title of the GUI (Inventory)
TITLE: "&a&lCreate Island"
OPEN_SOUND: "ui.button.click"
OPEN_PITCH: 1

# This allows you to customise the shape of the GUI.
# You can only have a maximum of 54 slots (9 x 6).
# Each character represents an item / slot.
# '.' represents an empty slot.
# Any other characters are shown below under ITEMS
# Each character (#, p, y, n) corresponds to an item.

LAYOUT:
  - "# # # # # # # # #"
  - "# . . . p . . . #"
  - "# . y . . . n . #"
  - "# # # # # # # # #"

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

  PROMPT:
    char: "p"
    material: "GOLD_INGOT"
    skull: ""
    text: "&eCreate a new island?"
    sound: "none"
    pitch: 0
    lore:
      - "&a&oDo you wish to create a new island?"

  CANCEL:
    char: "n"
    material: "RED_TERRACOTTA"
    skull: ""
    text: "&c&lCancel"
    sound: "block.note_block.bass"
    pitch: 4
    lore:
      - "&eClick to cancel island creation."

  BORDER:
    char: "#"
    material: "GRAY_STAINED_GLASS_PANE"
    skull: ""
    text: " " # No text
    sound: "none"
    pitch: 1
    lore: "" # Empty lore

```

## GUI "Layout"

You are offered extensive configuration, including the layout of the GUI.

```yaml
# This allows you to customise the shape of the GUI.
# You can only have a maximum of 54 slots (9 x 6).
# Each character represents an item / slot.
# '.' represents an empty slot.
# Any other characters are shown below under ITEMS
# Each character (#, p, y, n) corresponds to an item.

LAYOUT:
  - "# # # # # # # # #"
  - "# . . . p . . . #"
  - "# . y . . . n . #"
  - "# # # # # # # # #"
```

Each "entry" / line in the `LAYOUT` variable is a new row in the GUI.\
There can, of course, only be a maximum of 54 slots (9 wide, 6 rows).\
You cannot have rows of different lengths.

Each letter corresponds to a new item.\
`.` responds to an empty slot.\
Any other characters corresponds to the items (See [#items](./#items "mention"))

>[!INFO]
>The majority of this information is explained in the comments in the YAML files.

## Items

You are offered extensive configuration, including the option to modify the items used in each GUI.

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

  PROMPT:
    char: "p"
    material: "GOLD_INGOT"
    skull: ""
    text: "&eCreate a new island?"
    sound: "none"
    pitch: 0
    lore:
      - "&a&oDo you wish to create a new island?"

  CANCEL:
    char: "n"
    material: "RED_TERRACOTTA"
    skull: ""
    text: "&c&lCancel"
    sound: "block.note_block.bass"
    pitch: 4
    lore:
      - "&eClick to cancel island creation."

  BORDER:
    char: "#"
    material: "GRAY_STAINED_GLASS_PANE"
    skull: ""
    text: " " # No text
    sound: "none"
    pitch: 1
    lore: "" # Empty lore
```

Each item has the same customisability:

`char` - This is the character in the Layout (see [#gui-layout](./#gui-layout "mention")) that corresponds to this item. You typically should not need to change this.

`material` - This is the material of the item. It must be a valid material. See [this list](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html) for valid entries.

`skull` - You can set custom skull textures, permitting the `material` is set to `PLAYER_HEAD`. You should paste the skin texture value (Base64). See [custom-skulls.md](custom-skulls.md "mention")for more information.

`text` - You can customise the custom text that each item has. This supports colour codes, with the same formatting as [#text-colours-rgb](../../setup/messages.md#text-colours-rgb "mention").

`sound` - This allows you to trigger a sound when the item is clicked. An empty string will not play any sound. This supports both custom sound identifiers, and [the built in sound effects](https://www.digminecraft.com/lists/sound\_list\_pc.php).

`pitch` - This is the pitch related to the `sound` if configured.

`lore` - This is the lore of the item. An empty string is no lore. Each new entry for the variable is a new line of lore.
