---
description: Walks you through diagnosing errors to do with the plugin.
---

# Errors & Debugging

Errors aren't a nice thing to fix.\
This is why we offer extensive documentation and quality support for any issues you encounter.



## Error Messages

When players run commands that results in an error, they will be given a debug message.

>[!WARNING]
> This assumes you have not removed the `%debug%` placeholder from your `ERROR` message configuration in `messages.yml`!\
> \
> In every case, you should [make a GIthub issue](https://github.com/TerraByteDev/SkyFactionsReborn/issues) or [report it in our Discord!]>(https://discord.com/invite/SwxXMrFdjp)

Compare the debug messages from any error messages you receive here.

| Error Message | Description |
|---------------|-------------|
| SQL_GET_DISCORD | This is a database error. The plugin failed to retrieve a player's discord link. |
| SQL_DISCORD_UNLINK | This is a database error. The plugin failed to remove a player's discord link. |
| SQL_GEMS_MODIFY | This is a database error. The plugin failed to modify a player's gem count. |
| SQL_GEMS_GET | This is a database error. The plugin failed to get a player's gem count. |
| SQL_RUNES_GET | This is a database error. The plugin failed to get a player's rune count. |
| SQL_RUNES_MODIFY | This is a database error. The plugin failed to modify a player's rune count. |
| SQL_ISLAND_CHECK | This is a database error. The plugin failed to check if a player has an island. |
| SQL_RAID_COOLDOWN_GET | This is a database error. The plugin failed to get a player's raid cooldown. |
| SQL_RAID_UPDATE | This is a database error. The plugin failed to update a player's last raid timestamp. |
| SQL_ISLAND_CREATE | This is a database error. The plugin failed to create a new island. |
| SQL_ISLAND_DELETE | This is a database error. The plugin failed to delete a player's island. |
| SQL_RAID_START | This is a database error. The plugin failed to initialise a raid. |
| SQL_ISLAND_COOLDOWN | This is a database error. The plugin failed to update an island's last raided timestamp. |
| SQL_RAIDABLE_GET | This is a database error. The plugin failed to get a raidable island. |
| SQL_TRUST_ADD | This is a database error. The plugin failed to add a player's trust for another island. |
| SQL_TRUST_REMOVE | This is a database error. The plugin failed to untrust a player for another island. |
| SQL_TRUST_GET | This is a database error. The plugin failed to check if a player was trusted for an island. |
| SQL_FACTION_GET | This is a database error. The plugin failed to get a Faction from a player. |
| SQL_FACTION_CREATE | This is a database error. The plugin failed to create a Faction. |
| SQL_FACTION_KICK | This is a database error. The plugin failed to kick a player from a Faction. |
| SQL_FACTION_BAN | This is a database error. The plugin failed to ban a player from a Faction. |
| SQL_FACTION_DISBAND| This is a database error. The plugin failed to complete one or more steps while deleting a Faction. |
| SQL_JOIN_REQUEST_ACCEPT | This is a database error. The plugin failed to accept a Faction join request and add a player to the Faction. |
| SQL_JOIN_REQUEST_CREATE | This is a database error. The plugin failed to create a new Join Request. |
| SQL_JOIN_REQUEST_REVOKE | This is a database error. The plugin failed to reject a join request. |
| SQL_JOIN_REQUEST_GET | This is a database error. The plugin failed to get a join request (or more). |
| SQL_NOTIFICATION_REMOVE | This is a database error. The plugin failed to remove a notification. |
| SQL_NOTIFICATION_GET | This is a database error. The plugin failed to get notifications. |
| SQL_INVITE_ACCEPT | This is a database error. The plugin failed to accept an invite. |
| SQL_INVITE_GET | This is a database error. The plugin failed to fetch invites. |
| SQL_INVITE_DENY | This is a database error. The plugin failed to deny an invite. |
| WORLD_NOT_EXIST | This is (typically) a configuration error. The plugin failed to get a world from the configured world name. You will have to use the `%operation%` placeholder to see in what context and check the configuration related to that. |
| FAWE_ISLAND_PASTE | This is a FAWE error. FAWE failed to paste an island. |
| SCHEMATIC_NOT_EXIST | This is a File error. The plugin failed to retrieve the schematic. See log for details. |
| ISLAND_RETURNED_NULL | This is a general error, when the plugin tries to randomly select a raidable island. **This should typically never happen!** |
| MAIN_RAID_START | This is a general error. The plugin failed to start an entire raid. |
| MAIN_RAID_COUNTDOWN | This is a general error. The plugin failed to complete the countdown for the raid. **This should typically never happen!** |
| GUI_LOAD_EXCEPTION | This is a GUI error. The plugin failed to display a GUI for the player. |
| FACTION_MEMBER_UNKNOWN | This is more of a general error. This would be something like you try kick a player from the Faction just after they leave (for example). |
| FACTION_NOT_FOUND | This is a very obscure error. This would for instance, happen when you tried to do something Faction related in a UI just after you were kicked (for example). |
| DEFENCE_PROCESSING_EXCEPTION | This usually involves an internal error relating to defences. Report this ASAP. |
| SQL_CACHE_FAILURE | This is when the cache service fails to save data. Report this ASAP. |
| NPC_RELOAD_EXCEPTION | This when refreshing NPCs results in an error. |
| NPC_DISABLE_EXCEPTION | This is when disabling NPCs results in an error. |

>[!TIP]
> In some cases, such as upon startup, you won't receieve any of these debug messages.\
> In both cases (a error message, or just an error in the console), p
ease [make an issue](https://github.com/TerraByteDev/SkyFactionsReborn/> issues), or [join our discord](https://discord.com/invite/SwxXMrFdjp).

