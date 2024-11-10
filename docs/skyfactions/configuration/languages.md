---
description: Guide for configuring languages.
---

# Languages
---
SkyFactions has an advanced multi-language system.
This allows you to configure different languages and have the plugin automatically detect a player's locale and send the correct configured message - Assuming you have that language, otherwise it reverts to the default specified in `config.yml`.

The plugin will automatically ship with the english language configuration. As of 31st October 2024, there are no other languages available.\
The defence configs and gui configs are duplicated across each language file, meaning if you make an adjustment on one, you must reflect it on the others. There is no automation for this.\
\
The default English configuration is located at `/plugins/SkyFactionsReborn/language/en/`. You will find an `en.yml` file, `defences` folder and `guis` folder.

>[!TIP]
>Once making adjustments, you can run `/sf reload` on the server (either via the console or as a player with permissions to do so) to instantly refresh the configurations!

Every entry has a description (in comment form) of what it corresponds to, making configuring all messages trivial.

## Text Colours / RGB
SkyFactionsReborn uses the [MiniMessage Format](https://docs.advntr.dev/minimessage/format.html), allowing for extensive customisation and familiarity when it comes to stylising your messages with gradients, fonts and more.

All message configs *also* support placeholders from [PlaceholderAPI](https://wiki.placeholderapi.com/), so you can access placeholders outside of SkyFactions'.