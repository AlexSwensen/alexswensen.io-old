---
title: "Setting up VSCode Python3 Intellisense"
date: 2019-12-06T22:00:00-05:00
description: "Because for some reason it isn't setup by default..."
---

Because for some reason it isn't setup by default...

---

So recently while working on a project I have transitioned into doing a lot more work in our Flask based backend. I think I have been spoiled by the amount of intellisense that is built into TypeScript, because working without it in Python3 is _not_ pleasant. At one point it worked perfectly fine with the VSCode Python extension installed, and sometimes i would install `importmagic` as well. Well not so much anymore. So I spent a few hours trying to figure this out.

Turns out the native Python extension tries to use `jedi` for intellisense, but (at least in my configuration) it doesn't seem to work. Thankfully there is another alternative. Microsoft also develops the `python-language-server` package for vscode. In order to enable it you have to disable Jedi.

I would also recommend installing the [Visual Studio IntelliCode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode) extension.

You can do this by adding the following to your `settings.json`.

```json
"python.jediEnabled": false,
"vsintellicode.python.completionsEnabled": true
```

Once you save that, you will get a notification to download the `python-language-server` which you should do. VSCode will download and install this automatically.

Once VSCode is done and reloaded, it will start to index your project. This takes some time, but ultimately you will have your import completions working agin.

## For Teams:

Assuming your team has embraced vscode, and you have both `.vscode/extensions.json` and `.vscode/settings.json` in your version control, recommend adding the following entries.

```json
// extensions.json
{
  "recommendations": [
      "ms-python.python",  // Python
      "visualstudioexptteam.vscodeintellicode" // python ai assisted intellicode and python language server
  ]
}
```

```json
// settings.json
{
    "python.jediEnabled": false,
    "vsintellicode.python.completionsEnabled": true
}
```

That should prompt for everyone in your team and setup these settings by default for the project workspace.
