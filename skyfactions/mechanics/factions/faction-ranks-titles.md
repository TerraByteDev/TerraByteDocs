---
description: Information concerning Faction ranks & titles.
---

# Faction Ranks / Titles

Each faction has ranks and titles, with varying privileges and permissions.

{% hint style="info" %}
Each Faction Title is configurable in the `messages.yml` configuration file.\
After modifying configs, consider validating your .yml configs through an online YAML validator such as [YAMLlint](https://www.yamllint.com/).
{% endhint %}

## Lord

The "Lord" is the owner of the Faction. They have all privileges, including:

* Manage Faction Relationships
* Demote & Promote Faction members.
* Kick & Ban Faction members.
* Disband the Faction.
* Create a nation with another faction.
* Declare war on other Factions.
* Manage Faction Taxes & Defences
* Manage Faction Name
* Modify the MOTD
* Create a broadcast
* Pays lower / no taxes & Higher Rewards \[TBC]
* Transfer faction ownership
* Donate runes (via item conversion).

## Duke

The "Duke" is an admin of the Faction. There can be multiple Dukes.\
They have many privileges, including:

* Demote & Promote Faction members.
* Kick & Ban Faction members.
* Manage Faction Defences & Taxes
* Modify the MOTD
* Create a broadcast
* Manage Faction relationships
* Declare war on other Factions.
* Pays lower taxes & Higher Rewards
* Donate runes (via item conversion).

## Baron

The "Baron" is essentially a moderator of the Faction. There can be multiple Barons.\
They have some privileges, including:

* Manage Defences
* Create a broadcast
* Pays lower taxes & Higher Rewards
* Kick Faction members.
* Donate runes (via item conversion).

## Knight

Essentially a normal member of the Faction with a few extra privileges:

* Repair defences & Refill ammo
* Pays lower taxes & Higher Rewards.
* Donate runes (via item conversion).
* Participate in faction raids.

## Subject

Just a normal member of the Faction with no extra privileges.\
Normal privileges:

* Participate in faction raids.
* Donate runes (via item conversion).

{% hint style="info" %}
Although permissions are hardcoded for each rank / title and cannot change, **the names of each Title can be modified in `messages.yml`**
{% endhint %}
