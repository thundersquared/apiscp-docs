
module.exports = {
   plugins: [
    '@vuepress/active-header-links',
    '@vuepress/back-to-top',
    '@vuepress/last-updated',
    [
      '@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: {
          message: "New content is available.",
          buttonText: "Refresh"
        }
      }
    ],
    'alias',
    [
      'vuepress-plugin-clean-urls', {
        normalSuffix: '/',
        indexSuffix: '/',
        notFoundPath: '/404.html',
      }
    ],
    '@vuepress/medium-zoom',
    [
      'disqus', {
        shortname: 'apiscp'
      }
    ],
  ],
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-deflist'))
    }
  },
  patterns: [
    '*.md',
    'admin/**/*.vue',
    'admin/**/*.md'
  ],

  redirectionMapping: {
    "GLOSSARY": "glossary"
  },
  title: "ApisCP Docs",
  description: "ApisCP · A modern hosting platform",
  head: [
    ["link", { rel: "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons"}],
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ['meta', { name: 'theme-color', content: '#169a84' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/images/touch/home152.png' }],
    ['meta', { name: 'msapplication-TileImage', content: '/images/touch/home144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#2c3035' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
  ],
  themeConfig: {
    APNSCP_ROOT: '/usr/local/apnscp',
    logo: 'https://apiscp.com/images/logo-inv.svg',
    // lastUpdated: 'Last updated',
    repo: 'https://github.com/apisnetworks/apnscp-docs',
    docsDir: "docs",
    editLinks: true,
    editLinkText: 'Help us improve this article!',
    smoothScroll: true,
    algolia: {
      apiKey: 'd2f15fd1086962aaabb924f6aa693249',
      indexName: 'apnscp-docs',
    },
    nav: [
      {
        text: "Home",
        link: "/"
      },
      {
        text: "Getting Started",
        link: "/install"
      },
      {
        text: "Administration",
        link: "/admin/CLI"
      },
      {
        text: "Customizing",
        link: "/admin/Customizing"
      },
      {
        text: "Learn More",
        items: [
          {
            text: "Changelog",
            link: "https://gitlab.com/apisnetworks/apnscp/-/commits/master"
          },
          {
            text: "Buy Now",
            link: "https://my.apiscp.com"
          }
        ]
      }
    ],
    sidebarDepth: 3,
    sidebar: {
      "/": [
        {
          title: "Preface",
          collapsable: true,
          children: [
            "CONVENTIONS",
            "SECURITY",
            "admin/Mass hosting"
          ]
        },
        {
          title: "Getting Started",
          collapsable: false,
          children: [
            "INSTALL",
            "UPGRADING",
            "LICENSE",
            "FIREWALL",
            "admin/NAT"
          ]
        },
        {
          title: "Administration",
          collapsable: false,
          sidebarDepth: 3,
          children: [
            {
              title: "Command-line",
              children: [
                "admin/CLI",
                "admin/Plans",
                "admin/Scopes",
                "admin/Bootstrapper",
              ]
            },
            {
              title: "Migrations",
              children: [
                "admin/Migrations - cPanel",
                "admin/Migrations - server",
              ]
            },

            "admin/Filesystem",
            {
              title: "DNS",
              children: [
                "admin/DNS",
                {
                  title: "Providers",
                  children: [
                    "admin/dns/AWS.md",
                    "admin/dns/Cloudflare.md",
                    "admin/dns/Digitalocean.md",
                    "admin/dns/Linode.md",
                    "admin/dns/PowerDNS.md",
                    "admin/dns/Vultr.md", 
                  ]
                }
              ]
            },
            "admin/SSL",
            {
              title: "HTTP",
              children: [
                "admin/Apache",
                "admin/PHP-FPM",
                "admin/Evasive",
                "admin/ModSecurity",
                "admin/Webapps",
                "admin/Fortification",
              ]
            },
            {
              title: "Databases",
              children: [
                "admin/MySQL",
                "admin/phpMyAdmin",
                "admin/PostgreSQL"
	      ]
            },
            {
              title: "Mail",
              children: [
                "admin/Smtp",
                "admin/LDA",
                "admin/Filtering",
                "admin/Majordomo",
              ]
            },
            "admin/FTP",
            "admin/Monitoring",
            "admin/Resource enforcement",
            "admin/Metrics",

            "admin/Backups",
            "admin/Troubleshooting",
            "admin/Maps",
            "admin/Benchmarking",
            "DEBUGGING",
          ]
        },
        {
          title: "Extending",
          collapsable: false,
          children: [
            "admin/Customizing",
            "admin/Billing integration",
            "admin/Hooks",
            "PROGRAMMING",
            "admin/Hydration"
          ]
        },
        {
          title: "Appendix",
          collapsible: true,
          children: [
            "AUTHORS",
            "admin/Tuneables",
            "admin/Scopes-list",
            {
              title: "Release notes",
              children: [
                "RELEASE-3.1",
                "RELEASE-3.0",
              ]
            },
            "GLOSSARY"
          ]
        }
      ]
    }
  }
};
