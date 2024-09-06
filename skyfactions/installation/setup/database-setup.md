---
description: Guide for setting up databases (optional).
---

# Database Setup

## Database Setup

By default, SkyFactions uses SQLite as it supports more platforms and servers that may not have access to MySQL databases.\
If you want to configure the plugin to use MySQL, head to the `config.yml` and configure the MySQL connection values. A MySQL/MariaDB server is required to use the SkyFactions-web interface!

{% hint style="info" %}
All configurations are located at `plugins/SkyFactionsReborn/`.\
\
Modification to the database configuration requires a restart to take effect.

After modifying configs, consider validating your .yml configs through an online YAML validator such as [YAMLlint](https://www.yamllint.com/).
{% endhint %}
