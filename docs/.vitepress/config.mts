import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "TerraByteDev Documentation",
  description: "The official documentation of TerraByteDev.",
  base: "/",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  ignoreDeadLinks: true,
  themeConfig: {
    logo: "/assets/TBLogo.png",
    nav: [
      { text: 'Home', link: '/' },
      { text: 'SkyFactionsReborn', link: '/skyfactions/overview' },
      { text: 'About Us', link: '/about_us'}
    ],

    sidebar: [
      {
        text: "TerraByteDev",
        items: [
          { text: "Who We Are", link: "/about_us"}
        ]
      },
      {
        text: 'SkyFactions',
        items: [
          { text: 'Overview', link: '/skyfactions/overview' },
          { 
            text: "Installation",
            link: "/skyfactions/installation/overview",
            collapsed: true,
            items: [
              {
                text: "Setup",
                link: "/skyfactions/installation/setup/overview",
                collapsed: true,
                items: [
                  { text: "Database Setup", link: "/skyfactions/installation/setup/database-setup"},
                  { text: "World Setup", link: "/skyfactions/installation/setup/world-setup"},
                  { text: "Island Generation", link: "/skyfactions/installation/setup/islands"},
                  { text: "Discord", link: "/skyfactions/installation/setup/discord"}
                ]
              },
              { text: "Commands & Permissions", link: "/skyfactions/installation/commands-and-permissions"}
            ]

          },
          {
            text: "Configuration",
            link: "/skyfactions/configuration/overview",
            collapsed: true,
            items: [
              { text: "Languages", link: "/skyfactions/configuration/languages"},
              { text: "Placeholders", link: "/skyfactions/configuration/placeholders"},
              {
                text: "GUIs",
                link: "/skyfactions/configuration/guis/overview",
                items: [
                  { text: "Custom Skulls", link: "/skyfactions/configuration/guis/custom-skulls.md"},
                  { text: "Paginated GUIs", link: "/skyfactions/configuration/guis/paginated-guis.md"}
                ]
              }
            ]
          },
          {
            text: "Mechanics",
            link: "/skyfactions/mechanics/overview",
            collapsed: true,
            items: [
              { text: "Islands", link: "/skyfactions/mechanics/islands"},
              { text: "Obelisk", link: "/skyfactions/mechanics/obelisk"},
              {
                text: "Defences",
                link: "/skyfactions/mechanics/defences/defences",
                collapsed: true,
                items: [
                  { text: "Managing Entities", link: "/skyfactions/mechanics/defences/managing_entities"},
                  { text: "Integrations", link: "/skyfactions/mechanics/defences/integrations"},
                  { text: "Configuring Projectiles", link: "/skyfactions/mechanics/defences/projectiles"}
                ]
              },
              { text: "Runes", link: "/skyfactions/mechanics/runes"},
              {
                text: "Factions",
                link: "/skyfactions/mechanics/factions/overview",
                collapsed: true,
                items: [
                  { text: "Overview", link: "/skyfactions/mechanics/factions/factions-overview"},
                  { text: "Faction Ranks & Titles", link: "/skyfactions/mechanics/factions/faction-ranks-titles"}
                ]
              },
              { text: "Per-Island NPCs", link: "/skyfactions/mechanics/npcs"}
            ]
          },
          { text: "Errors & Debugging", link: "/skyfactions/errors-and-debugging"},
          { text: "Skyfactions Web", link: "/skyfactions/skyfactions-web"}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/TerraByteDev/TerraByteDocs' },
      { icon: 'discord', link: 'https://discord.gg/SwxXMrFdjp'}
    ]
  }
})
