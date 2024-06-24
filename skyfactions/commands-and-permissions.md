---
description: >-
  Commands that players and admins can use, as well as the permission(s)
  required to run the command.
---

# Commands & Permissions

## Admin Commands & Permissions

<table><thead><tr><th width="249">Command</th><th>Description</th><th>Permission</th><th data-hidden></th></tr></thead><tbody><tr><td>/sf reload</td><td>Reload the configuration files</td><td>skyfactions.reload</td><td></td></tr><tr><td>/sf create $2<br>Sub-arguments: player, faction</td><td>Force create an island. Specify whether you're creating a player island or faction island, then use another argument for the player name (it should tab-complete)</td><td>skyfactions.admin.create</td><td></td></tr><tr><td>/sf delete $2<br>Sub-arguments: player, faction</td><td>Force deletes an island. Specify whether you're deleting a player island or faction island, then use another argument for the player name (it should tab-complete)</td><td>skyfactions.admin.delete</td><td></td></tr></tbody></table>

## Player Commands & Permissions

These commands/permissions are provided to all players by default unless specifically specified. To remove a permission, simply add it to your permissions manager with the value `false`.

| Command                                | Description                                                                                                                       | Permission                                                         |
| -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| /island create                         | <p>Create a player island<br>Note: by default, a player can only create one island at a time. In the future, this may change.</p> | skyfactions.island.create                                          |
| /island help                           | Help on how to use /island related commands.                                                                                      | skyfactions.island.help                                            |
| /island delete                         | Delete an island                                                                                                                  | skyfactions.island.delete                                          |
| /island visit \<player name>           | If you have trust, visit another player's island                                                                                  | skyfactions.island.visit                                           |
| /island trust \<player name>           | Trust another player to visit your island                                                                                         | skyfactions.island.trust                                           |
| /island untrust \<player name>         | Remove your trust of another player to visit your island.                                                                         | skyfactions.island.untrust                                         |
| /island teleport                       | Teleport to your island (default 5 second warmup)                                                                                 | skyfactions.island.teleport                                        |
| /raid start                            | Initiate a raid on a random player's island                                                                                       | skyfactions.raid.start                                             |
| /raid help                             | Get help on raid-related commands.                                                                                                | skyfactions.raid.help                                              |
| /link                                  | Link your Discord Account to your Minecraft account to receive raid notifications when offline.                                   | skyfactions.command.link                                           |
| /unlink                                | Remove your link to your Discord Account.                                                                                         | skyfactions.command.unlink                                         |
| /hub                                   | Teleport back to the hub world                                                                                                    | skyfactions.command.hub                                            |
| /faction create \<name>                | Create a faction, which also creates a faction island                                                                             | skyfactions.faction.create                                         |
| /faction delete \<name>                | Delete a faction, requires you to be the faction owner                                                                            | skyfactions.faction.delete                                         |
| /island delete confirm                 | Confirms deletion of a player or faction island                                                                                   | _No permission_                                                    |
| /faction rename \<name>                | Rename your faction. Duplicated and blacklisted names depend on configuration                                                     | skyfactions.faction.rename                                         |
| /faction vault \<name>                 | Opens your faction vault                                                                                                          | skyfactions.vault.other (required to open another faction's vault) |
| /faction withdraw \<amount>            | Withdraw from your faction's balance                                                                                              | skyfactions.faction.withdraw                                       |
| /faction deposit \<amount>             | Deposit money into your faction's balance                                                                                         | skyfactions.faction.deposit                                        |
| /faction bal                           | Check your faction's balance                                                                                                      | skyfactions.faction.bal                                            |
| /faction points                        | Check your faction's points                                                                                                       | skyfactions.faction.points                                         |
| /faction promote \<member>             | Promote a member of your faction                                                                                                  | skyfactions.faction.promote                                        |
| /faction demote \<member>              | Demote a member of your faction                                                                                                   | skyfactions.faction.demote                                         |
| /faction \<ally\|truce\|enemy> \<name> | Declare your relationship with another faction                                                                                    | skyfactions.faction.relationship                                   |
| /faction top                           | View the top factions on your server according to their power level                                                               | _No permission_                                                    |
| /faction broadcast \<message>          | Send a message                                                                                                                    | <p>skyfactions.faction.broadcast<br>*Not provided by default</p>   |
| /faction channel                       | Switch to your faction's chat channel                                                                                             | skyfactions.faction.channel                                        |
| /faction chat \<message>               | Send a message to your faction's channel without changing your chat channel                                                       | skyfactions.faction.channel                                        |
| /faction fly                           | Fly, if on your faction island                                                                                                    | <p>skyfactions.faction.fly<br>*Not provided by default</p>         |
| /faction raid                          | Initiate a raid on another faction's island. You must be the faction owner to do this!                                            | skyfactions.faction.raid                                           |
| /faction kick \<member>                | Kick a member from your faction, provided that you're the faction owner                                                           | skyfactions.faction.kick                                           |
| /faction setowner \<member>            | Make another member the owner of your faction. This will announce it to all members of your faction                               | skyfactions.faction.setowner                                       |
| /faction info \<name>                  | Shows information about another faction                                                                                           | skyfactions.faction.info                                           |
| /gems balance                          | Get your gems balance.                                                                                                            | skyfactions.gems.balanace                                          |
| /gems pay \<name> \<count>             | Give another player some of your gems.                                                                                            | skyfactions.gems.pay                                               |
| /gems help                             | Get help on gem-related commands.                                                                                                 | skyfactions.gems.help                                              |

## General Permissions

These are just a list of permissions that are not tied to commands.



| Permission                  | Description                                                                                                              |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| skyfactions.cooldown.bypass | Gives people permission to bypass command cooldowns. You should only give this to trusted individuals or during testing. |
