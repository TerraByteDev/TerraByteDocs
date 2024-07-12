---
description: Guide through paginated GUIs.
---

# Paginated GUIs

Certain GUIs in SkyFactions are paginated, meaning you can move between 'pages'. This includes faction invites / join requests and member management as of now.\
\
The items used in paginations can be customised in the `guis/pagination.yml` configuration file.

{% hint style="info" %}
If you want information on what each part of the configuration file does, just read the comments in the configuration file.
{% endhint %}

{% code title="Pagination Configuration File" %}
```yaml
# This is a special configuration file.
# This is the configuration for all the items related to pagination.

ITEMS:
  # Button to move to next page along the paginated GUI.
  FORWARD_BUTTON:
    char: ">" # This is the character used in the LAYOUT.
    material: "PLAYER_HEAD"
    # You can set custom skull textures (e.g. from minecraft-heads.com). 'material' MUST BE SET TO 'PLAYER_HEAD'. Placeholders: %player_skull% - Skull texture of the player.
    skull: "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvOTYzMzlmZjJlNTM0MmJhMThiZGM0OGE5OWNjYTY1ZDEyM2NlNzgxZDg3ODI3MmY5ZDk2NGVhZDNiOGFkMzcwIn19fQ==" #
    name: "&a&lNext Page" # Name of the item.
    sound: "ui.button.click" # Sound played when the item is clicked. Set to 'none' to disable.
    pitch: 1 # Pitch of the sound. Does not apply if 'sound' is 'none.'.

    # Lore of the item when there are more pages.
    # Placeholders: %next_page% - Number of the next page / %total_pages% - Total number of pages.
    # Only supports one lore line.
    more_pages_lore: "&aGo to page &e%next_page% &a/&e %total_pages%"

    # Lore of the item when there are no more pages.
    # Only supports one lore line.
    no_pages_lore: "&cThere are no more pages!"


  # Button to move to previous pages along the paginated GUI.
  BACK_BUTTON:
    char: "<"
    material: "PLAYER_HEAD"
    skull: "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZjg0ZjU5NzEzMWJiZTI1ZGMwNThhZjg4OGNiMjk4MzFmNzk1OTliYzY3Yzk1YzgwMjkyNWNlNGFmYmEzMzJmYyJ9fX0="
    name: "&c&lPrevious"
    sound: "ui.button.click"
    pitch: 1

    # Lore of the item when there are more pages.
    # Placeholders: %next_page% - Number of the next page / %total_pages% - Total number of pages.
    # Only supports one lore line.
    more_pages_lore: "&aGo to page &e%next_page% &a/&e %total_pages%"

    # Lore of the item when there are no more pages.
    # Only supports one lore line.
    no_pages_lore: "&cYou cannot go further back!"
```
{% endcode %}

This allows you to configure the items used in the paginations.\
You can configure the appearance of the actual items that appear in the specific GUI's pagination area in that corresponding's GUI's item configuration section.

It would typically look like this:

```yaml
  # This is the item that displays each outgoing faction invite.
  # By default, the item is the player's head, and you shouldn't change this unless you're... insane?
  # You can customise the text, lore and sound though.
  MODEL:
    material: "PLAYER_HEAD"
    skull: "%player_skull%"
    text: "&9%player_name%" # Placeholders: %player_name% - Name of player.
    sound: "" # The obelisk UI by default is set to make a sound. Don't want to trigger it twice.
    pitch: 1
    # Placeholders: %player_name% - Name of player.
    lore:
      - "&a%player_name%&e wants to"
      - "&ejoin your faction."
```

Unlike other item configurations, you cannot customise the character.\
In the `LAYOUT`, paginated items will appear in any slots with the `x` character.\
This cannot be adjusted.
