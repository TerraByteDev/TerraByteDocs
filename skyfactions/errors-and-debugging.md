---
description: Walks you through diagnosing errors to do with the plugin.
---

# Errors & Debugging

Errors aren't a nice thing to fix.\
This is why we offer extensive documentation and quality support for any issues you encounter.



## Error Messages

When players run commands that results in an error, they will be given a debug message.

{% hint style="warning" %}
This assumes you have not removed the `%debug%` placeholder from your `ERROR` message configuration in `messages.yml`!
{% endhint %}

Compare the debug messages from any error messages you receive here.

* `SQL_GET_DISCORD` - This is a database error. The plugin failed to retrieve a player's discord link.
* `SQL_DISCORD_UNLINK` - This is a database error. The plugin failed to remove a player's discord link.
* `SQL_GEMS_MODIFY` - This is a database error. The plugin failed to modify a player's gem count.
* `SQL_GEMS_GET` - This is a database error. The plugin failed to get a player's gem count.
* `SQL_ISLAND_CHECK` - This is a database error. The plugin failed to check if a player has an island.
* `SQL_RAID_COOLDOWN_GET` - This is a database error. The plugin failed to get a player's raid cooldown.
* `SQL_RAID_UPDATE` - This is a database error. The plugin failed to update a player's last raid timestamp.
* `SQL_ISLAND_CREATE` - This is a database error. The plugin failed to create a new island.
* `SQL_ISLAND_DELETE` - This is a database error. The plugin failed to delete a player's island.
* `SQL_RAID_START` - This is a database error. The plugin failed to initialise a raid.
* `SQL_ISLAND_COOLDOWN` - This is a database error. The plugin failed to update an island's last raided timestamp.
* `SQL_RAIDABLE_GET` - This is a database error. The plugin failed to get a raidable island.
* `WORLD_NOT_EXIST` - This is (typically) a configuration error. The plugin failed to get a world from the configured world name. You will have to use the `%operation%` placeholder to see in what context and check the configuration related to that.
* `FAWE_ISLAND_PASTE` - This is a FAWE error. FAWE failed to paste an island.
* `FAWE_ISLAND_SAVE` - This is a FAWE error. FAWE failed to save an island as a schematic.
* `ISLAND_RETURNED_NULL` - This is a general error, when the plugin tries to randomly select a raidable island. **This should typically never happen!**&#x20;
* `MAIN_RAID_START` - This is a general error. The plugin failed to start an entire raid.
* `MAIN_RAID_COUNTDOWN` - This is a general error. The plugin failed to complete the countdown for  the raid. **This should typically never happen!**

{% hint style="info" %}
In some cases, such as upon startup, you won't receieve any of these debug messages.\
In both cases (a error message, or just an error in the console), [make an issue](https://github.com/TerraByteDev/SkyFactionsReborn/issues) or [join our discord](https://discord.com/invite/SwxXMrFdjp).
{% endhint %}

