# Placeholders
SkyFactionsReborn hooks into [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) to allow you to fetch data about certain players, and more!

## Available Placeholders
| Placeholder Name | Description | 
|----------------------|-------------| 
| `%skyfactions_player_runes%` | The amount of runes a player has. |
| `%skyfactions_player_gems%` | The amount of gems a player has. |
| `%skyfactions_player_faction%` | The name of the Faction a player is in. |
| `%skyfactions_faction_runes%` | The amount of runes a player's Faction has. |
| `%skyfactions_faction_runes_<faction_name>%` | The amount of runes a Faction has. |
| `%skyfactions_faction_gems%` | The amount of gems a player's Faction has. |
| `%skyfactions_faction_gems_<faction_name>%` | The amount of gems a Faction has. |
| `%skyfactions_faction_rank%` | The rank of the specified player in their Faction. |

>[!CAUTION]
>As these placeholders are often involved with database operations, **all data is cached**.\
>If you try to fetch a placeholder for an offline player who has not joined the server (during that period of runtime) before, their data will not be cached!\
>This will lead to the return of either `-1` for a number based placeholder, or `Loading...` for a string-based placeholder.\
>Fetching the same placeholder again will return the correct data.
>
>This will not happen for online players / players who had already joined at least once while the server was online.