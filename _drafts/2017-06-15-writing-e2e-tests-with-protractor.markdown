---
layout: post
title: "Writing E2E Tests With Protractor"
date: 2017-06-15T17:12:37-05:00
tags: [sample post, readability, test, image]
feature: http://i.imgur.com/9gkw6P7.jpg
comments: false
---


Coding is hard. Angular makes it easier, but it's still hard. With the
complexity that Angular brings, unit testing can be hard. But the
hardest thing about testing with Angular are E2E tests. This guide
is written to solve the discrepency between Jasmine unit tests, and
Protractor E2E tests.

<!--more-->

First i'll hit you with some of the not-so-clear bits and pieces.
If you look at
[Debugging Protractor Tests](https://github.com/angular/protractor/blob/master/docs/debugging.md)
You will see 3 commands pieces stand out:

`browser.pause()`, `browser.debugger()` and if you look hard you will
find `browser.explore()`.

These are your bread and butter of the debugging tools. If you have ever used python's `dbg`
or `pytest.stack_trace()` you will know how these tools work. Sadly
protractor doesn't have quite the same power.

There is also another piece that is *incredibly* useful, and that is Protractor's
[Interactive Mode/REPL](https://github.com/angular/protractor/blob/master/docs/debugging.md#testing-out-protractor-interactively).


You run it by running:

```
protractor --elementExplorer
```


Note that if you have a webpack config you might need to point Protractor to the config as well.

```
protractor [configFile] [options] --elementExplorer
```

From there you get a full REPL to enter protractor commands.

You can load your site first by running:

```
browser.get('http://www.my-domain.org')
```

> So, I've got a REPL, what does Protractor give me that I can use?

Well the quick answer its to go [read the docs](http://www.protractortest.org/#/api),
but i'll give you the highlights.
