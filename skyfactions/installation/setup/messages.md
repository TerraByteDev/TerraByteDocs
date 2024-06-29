---
description: Guide for configuring messages.
---

# Messages

## Message Config

Every message in the plugin (item names, command responses, etc.) are all configurable.\
You can find the config at `plugins/SkyFactionsReborn/messages.yml`.

Every entry has a description of what it corresponds to, making configuring all messages easy.



## Text Colours / RGB

You can use HEX codes, as well as the standard [Bukkit Color Codes](https://htmlcolorcodes.com/bukkit-color-codes/) in the messages config, with the following syntax:

### Solid Colours

Example: `{#FF0000}`

### Gradients

Example: `{#6F00FF} Hello There! {/#0044FF}`

### Rainbow

Example: `{RAINBOW1} Hello There! {/RAINBOW}`

{% hint style="info" %}
After modifying configs, consider validating your .yml configs through an online YAML validator such as [YAMLlint](https://www.yamllint.com/).
{% endhint %}
