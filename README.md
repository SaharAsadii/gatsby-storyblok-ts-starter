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

4.  **storyblok preview in localhost**

- install choco using this command :

```shel
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

- then run :

```shel
choco install mkcert
mkcert localhost
local-ssl-proxy --source 3010 --target 3000 --cert localhost.pem --key localhost-key.pem
```

- run your project on port 3000 but open it on your browser https://localhost:3010
- in storyblok panel add a new preview url with this :https://localhost:3010
