- frontend: nextjs
- backend: hono
- db: postgres
- hosting: cloudflare

- ライブラリ
  - [FE: shadcn](https://ui.shadcn.com/)
- 参考資料
  - [Nextjs: フォルダ構造](https://zenn.dev/yamu_official/articles/70f59488e8415d)
  - [Nextjs: 初学者向け](https://zenn.dev/peter_norio/articles/2c5a03770164f2)
  - [Github: PreCommit](https://zenn.dev/yiskw713/articles/3c3b4022f3e3f22d276d)
  - [UIComponent: shadcn](https://zenn.dev/kazu1/articles/07d88ded5e7209)
- FAQ
  1. shadcn can't install because of not installing tailwind in spite of installed correctly
     - shadcn supports tailwind v3. But currently installed v4
     - solve like below.
     ```
         npm uninstall tailwindcss postcss autoprefixer
         npm install -D tailwindcss@3.3.5 postcss autoprefixer
         npx tailwindcss init -p
     ```
