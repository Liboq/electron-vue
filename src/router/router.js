export const routes = [
    {
      path: "/",
      component: () => import("@/views/layout.vue"),
      name: "home",
      redirect:"/markdown",
      children: [
        {
          path: "markdown",
          name:'markdown',
          component: () => import("@/components/markdown.vue"),
        },
        {
          path: "uploader",
          name:'uploader',
          component: () => import("@/components/uploader.vue"),
        },
        
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      redirect:'/markdown'
    },
  ];
