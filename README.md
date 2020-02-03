# Resume building as code

I have developed this project just for fun, instead of spending time in formating word or pdf, I have spent some time on `CSS`, `HTML`, `ReactJS`, `Webpack`, `Babel`, `Eslint` and `NPM`.

Find my published profile: [Abhishek Das' resume](https://iabhishek91.github.io/my-profile/#)

You refer this project for creating your own resume or any static page site and publish it.

I have used `gh-pages` a npm module for publishing any static page to GitHub.

> Note: this project do not have any in-built server, hence you can't test this on local. If you wish use a simple sever like *webpack-dev-server*

## Pre-requisite

Few things before you start:

- Install node: at least than 8.*.*.
- Install yarn. [optional]
- Configure PATH env variable irrespective of your OS.
- your should have a public GitHub account in-order to host this app.

## Quick start

1. Clone this repo to your local

  ```sh
  git clone git@github.com:iAbhishek91/my-profile.git
  ```

  > Note: you need to authenticate your self via SSH or via HTTP. For SSH you need to create a SSH key and configure it in your local machine and github account. [Git hub official doc for this configuration](https://help.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh)

2. Install the NPM dependencies

```sh
yarn
npm run i
```

3. Build the project

```sh
yarn build
npm run build
```

4. publish the project

```sh
yarn deploy
npm run deploy
```

5. Changes need to be done in Github

- In github, create a empty repo.
- Go to settings of that repo and navigate to github pages.
- Select gh-pages branch and follow the wizard to complete the steps.
- Git hub will give you an URL where your site is published.

6. Changes in the Repo (at minimal)

- Every change is to be made in the `src/resumeConstant.js`
- Change your photo.
