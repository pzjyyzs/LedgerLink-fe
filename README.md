# Vue 3 + Typescript + Vite

1. 如果 run dev 长时间没反应的话，在/root/repos/mangosteen-fe/vite.config.ts server添加host：'0,0,0,0'

2. 配置 @vitejs/plugin-vue-jsx 出现  vite.createFilter is not a function 是因为 vite的版本低于3.0.0

