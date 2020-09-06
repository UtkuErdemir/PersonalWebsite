module.exports = {
  title: "Utku Erdemir",
  description: "Utku Erdemir'in Kişisel Web Sitesi",
  head: [["link", { rel: "icon", href: `/logo.png` }]],
  base: "/",
  dest: "./dist",

  themeConfig: {
    search: false,
    nav: [
      { text: "Anasayfa", link: "/" },
      { text: "Hakkımda", link: "/about/" },
      { text: "Deneyimim", link: "/projects/" },
      { text: "GitHub", link: "https://github.com/UtkuErdemir" }
    ],
    lastUpdated: 'Son Güncelleme'
  },

  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    extendMarkdown: md => {
      md.use(require("markdown-it-katex"));
    }
  }
};



