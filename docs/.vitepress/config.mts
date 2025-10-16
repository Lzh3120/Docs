import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LzhPro私人笔记",
  description: "私人笔记，谨慎查阅",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: 'AI', link: '/AI' },
      { text: '软考', link: '/soft-test' },
      { text: '菜谱', link: '/菜谱' },
      { text: 'Examples', link: '/markdown-examples' }
    ],
    sidebar: {
      '/soft-test/':[
        {
          text: '软件设计师',
          items: [
            { text: '计算机基础', link: '/soft-test/计算机基础' },
            { text: '编程基础', link: '/api-examples' },
            { text: '操作系统知识', link:'/soft-test/操作系统知识'}
          ]
        }
      ]
    },

    /*sidebar1: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],*/

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
