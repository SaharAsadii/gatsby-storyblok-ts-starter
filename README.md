<h1 align="center">
  Gatsby & StoryBlok TypeScript Starter
</h1>

## 🚀 start guide

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the minimal TypeScript starter.

    ```shell
    # create a new Gatsby site using the minimal TypeScript starter
    npm init gatsby -- -ts
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-gatsby-site/
    npm run develop
    ```

3.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000!

    Edit `src/pages/index.tsx` to see your site update in real-time!

4.  **Adding StoryBlobk**

- read gatsby storyblok example on https://codesandbox.io/s/boring-banzai-598wtz
- run :

  ```shell
  npm install gatsby-source-storyblok


  ```

- in gatsby-config.js file put your accessToken from https://app.storyblok.com/
- create components folder in src
- add your componenets with same name from storyblok panel
- add all of your compoenent in Layout.js using storyblokInit
- in pages/index.js use graphql to load data and show components
- pages/{storyblokEntry.full_slug}.js is for dynamic routing
