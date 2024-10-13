# Defences Entity Configuration

Each defence allows you to configure what entities can be targeted by the defence.
See the below instructions on how to configure this aspect of defences.

# Global Config
The global configuration for defences is located in `/plugins/SkyFactionsReborn/defences.yml`.
It allows you to configure several aspects of the defences.

```yaml
# This is the global configuration for all defences.
# This will apply to all defences (unless they override it in per-defence configs), combined with the per-defence config.
Global:
  # Global configuration for entities.
  ENTITIES:
    # Whether the ENTITY_LIST is a whitelist of entities that can be targeted.
    # Setting this to true will override the above booleans and you would have to add in the entities yourself.
    WHITELIST: false
    # What entities should be blacklisted or whitelisted?
    # See https://jd.papermc.io/paper/1.21.1/org/bukkit/entity/EntityType.html
    # Read https://docs.terrabytedev.com/skyfactions/mechanics/defences/managing_entities.html for more detail into integrations
    ENTITY_LIST:
      - "ENDER_DRAGON"
      - "NPC"
```

The `Global` section will apply **on top of** the per-defence configs (found in the `/plugins/SkyFactionsReborn/defences` directory).
To blacklist / whitelist certain entities, you must add the entity into a new line (see https://jd.papermc.io/paper/1.21.1/org/bukkit/entity/EntityType.html).

>[!TIP]
>SkyFactions hooks into multiple plugins to allow integrations into the features they provide.
>See [Integrations](integrations.md).

## Example Per-Defence Config
```yaml
# This allows you to configure what entities will be targeted by the defence.
ENTITIES:
  # Lets the defence target hostile entities (e.g. zombies)
  ALLOW_HOSTILE_TARGETING: true
  # Lets the player toggle hostile entity targeting.
  ALLOW_TOGGLE_HOSTILE_TARGETING: true
  # Target hostile entities by default when first placed down.
  TARGET_HOSTILE_ON_DEFAULT: true

  # Lets the defence target passive entities (e.g. cows)
  ALLOW_PASSIVE_TARGETING: true
  # Lets the player toggle passive entity targeting.
  ALLOW_TOGGLE_PASSIVE_TARGETING: true
  # Target passive entities by default when first placed down.
  TARGET_PASSIVE_ON_DEFAULT: false

  # Whether the ENTITY_LIST is a whitelist of entities that can be targeted.
  # Setting this to true will override the above booleans and you would have to add in the entities yourself.
  WHITELIST: false
  # What entities should be blacklisted or whitelisted?
  ENTITY_LIST:
    - "ENDER_DRAGON"
    - "NPC"
    - "mythicmobs:example_entity_id"
```

The entities section is very detailed and allows extensive customisation.
To blacklist / whitelist certain entities, you must add the entity into a new line (see https://jd.papermc.io/paper/1.21.1/org/bukkit/entity/EntityType.html).

>[!TIP]
>SkyFactions hooks into multiple plugins to allow integrations into the features they provide.
>See [Integrations](integrations.md).