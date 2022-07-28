---
layout: post
title: 'Automating Email Template Deployments with Mailgun and Github Actions'
author: [Alexander Swensen]
tags: ['Engineering', 'Github', 'Email', 'Mailgun']
image: img/email-unsplash.jpg
date: '2022-07-27T15:30:00-05:00'
draft: false
# excerpt: 
---

Recently, I have been working on a new project at [Workzinga](https://workzinga.com/). Suffice it to say we are a technology company focusing on HR solutions.
For now, just know that part of this project (like many others) requires automated emails to be sent out to users.

Building the email templates is more or less straight forward. In this case I used a email framework called [mjml](https://mjml.io/) 
to create the templates, and from there they can be converted to HTML and deployed to our email service. In this case we are using [Mailgun](https://mailgun.com/).

The biggest pain-point is the deployment of these email templates. It involved opening up the template management panel, and copy-pasting the HTML for each template. Obviously this does not scale.
Mailgun, like many email services, provides an [API](https://documentation.mailgun.com/en/latest/api_reference.html) to manage and upload email templates, and has a great [javascript package](https://www.npmjs.com/package/mailgun.js) to interact with the API.

From there, it was just a matter of scripting the deployment process to take the HTML from the mjml templates, and upload it to the Mailgun API. I ended up building a [fairly generic script to do this](https://github.com/AlexSwensen/mailgun-uploader) and released it as an open source package. From there its just a matter of wiring it all up to Github Actions.

Most important thing is to besure you have a `build` script in your `package.json` and add `@alexswensen/mailgun-uploader` as a dev dependency to your project.

Here is an example of the github actions file:

```yaml
on:
  push:
    branches:
      - main

jobs:
  build_and_upload_prod:
    name: build_and_upload_prod
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v3
        with:
          cache: "yarn"
      - name: Install dependencies
        run: yarn install --frozen-lockfile
      - name: Build
        run: yarn build
      - name: Upload
        run: npx mailgun-uploader ./dist
        env:
          MAILGUN_API_KEY: ${{secrets.CURRENT_MAILGUN_API_KEY}}
          MAILGUN_DOMAIN: ${{secrets.PROD_MAILGUN_DOMAIN}}
```

The steps are as follows:
- Checkout the repo
- Install dependencies
- Build the email templates
- Upload the email templates to Mailgun

The script names the templates based on the template file name. If the template already exists in Mailgun, it will be overwritten. Otherwise, it will be created.
This takes the process of managing email versions away from Mailgun, and we just use git for version control. Updating the templates is a simple matter of pushing them to Github and merging to `main`.

Obviously this will not work for marketing emails, but for transactional and notification emails, this is perfectly adequate.

If you are interested in trying this out, i have created a [template repository on Github](https://github.com/AlexSwensen/mailgun-emails-template) that you can explore and try for yourself.

If you have any questions, feel free to leave them below, or open an issue on the Github Repo.
