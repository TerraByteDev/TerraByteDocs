import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "TerraByteDev Documentation",
  description: "The official documentation of TerraByteDev.",
  base: "/",
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
                  { text: "Messages", link: "/skyfactions/installation/setup/messages"},
                  { text: "Discord", link: "/skyfactions/installation/setup/discord"}
                ]
              },
              { text: "Commands & Permissions", link: "/skyfactions/installation/commands-and-permissions"}
            ]

          },
          {
            text: "Mechanics",
            link: "/skyfactions/mechanics/overview",
            collapsed: true,
            items: [
              { text: "Islands", link: "/skyfactions/mechanics/islands"},
              { text: "Obelisk", link: "/skyfactions/mechanics/obelisk"},
              { text: "Runes", link: "/skyfactions/mechanics/runes"},
              {
                text: "Factions",
                link: "/skyfactions/mechanics/factions/overview",
                collapsed: true,
                items: [
                  { text: "Overview", link: "/skyfactions/mechanics/factions/factions-overview"},
                  { text: "Faction Ranks & Titles", link: "/skyfactions/mechanics/factions/faction-ranks-titles"}
                ]
              }
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
