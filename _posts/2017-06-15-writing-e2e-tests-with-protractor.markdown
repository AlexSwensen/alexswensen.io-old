---
layout: single
title: "Writing E2E Tests With Protractor"
date: 2017-06-15T17:12:37-05:00
excerpt: "Coding is hard. AngularJS makes it easier, but it's still hard. With the complexity that AngularJS brings, unit testing can be hard. But the hardest thing about testing with Angular are E2E tests. This guide is written to solve the discrepancy between Jasmine unit tests, and Protractor E2E tests."
tags: [angular, tests, protractor]
header:
    overlay_image: /assets/images/post-banners/writing-e2e-tests.jpg
    overlay_filter: rgba(60, 0, 20, 0.5)
classes: wide
---

# Note: The following only applies to node 7 and below.

The debugging api was broken in node 8 and the protractor team has [decided to take an alternative route for debugging going forward.](https://github.com/angular/protractor/issues/4307#issuecomment-346507942)

I will write an updated article on debugging protractor tests in node 8 at a later date.

>## Hard things are hard.

Coding is hard. AngularJS makes it easier, but it's still hard. With the
complexity that AngularJS brings, unit testing can be hard. But the
hardest thing about testing with Angular are E2E tests. This guide
is written to solve the discrepancy between Jasmine unit tests, and
Protractor E2E tests.

## The REPL

There a is piece that is *incredibly* useful when starting your tests,
and that is Protractor's
[Interactive Mode/REPL](https://github.com/angular/protractor/blob/master/docs/debugging.md#testing-out-protractor-interactively).

It's essentially a permanent version of `browser.explore()` (see debugging section)

You run it by running:

```terminal
protractor [configFile] [options] --elementExplorer
```


**Note**: _if you have a webpack config you might need to point Protractor to the config as well._
{: .notice--info}

From there you get a full REPL to enter protractor commands.

You can load your site first by running:

```
browser.get('http://www.my-domain.org')
```

---

> ## So, I've got a REPL, what does Protractor give me that I can use?

Well the quick answer is to go [read the docs](http://www.protractortest.org/#/api),
but i'll give you the highlights.

E2E tests, unlike unit tests, require a flow. That means that each test
is not a fresh instance, but instead starts where your last test ended.
For example, if your first test ended by clicking a button that opened a modal
your next test has that modal in front of it.
For this reason its usually best to organize your tests by flows of
user actions.

I personally organize each flow in a `describe` block, with each step as
a `it` block.


{% highlight javascript %}
{% raw %}
describe("login flow", function () {
    it('should load the page', function () {
        browser.get('https://my-domain.org/login');
    });
    it('should fill out login form', function () {
        // select elements by ng-model
        element(by.model('user.username')).sendKeys('admin');
        element(by.model('user.password')).sendKeys('adm1nPassw0rd');
    });
    it('should log in', function () {
        element(by.buttonText('Log In')).click()
    });
    it('should be logged in', function() {
        expect(someCondition).toBe(true);
    });
});
{% endraw %}
{% endhighlight %}

Hopefully the above can give you an idea of where to start. If you need
a complete reference I recommend the [Protractor API Docs](http://www.protractortest.org/#/api)


> ## Ok, I understand how to test, and where docs are. How do I debug this $*!t?


I'll hit you with some of the not-so-clear bits and pieces. If you look at
[Debugging Protractor Tests](https://github.com/angular/protractor/blob/master/docs/debugging.md)
You will see 3 function calls stand out:

`browser.pause()`, `browser.debugger()` and if you look hard you will
find `browser.explore()`.

These are your bread and butter of the debugging tools. If you have ever used python's `dbg`
or `pytest.stack_trace()` you will know how these tools work. Sadly
protractor doesn't have quite the same level of control, and the naming convention is not what most frontend developers are used to.

_Note:_ if you use any of these, you will need to extend the test
timeouts in your `protractor.config.js` file.

---

## `browser.pause()`


`browser.pause()` is essentially a breakpoint that pauses execution on
that line, allowing you to step forward one step at a time, and detach
to continue tests. (very similar to a `debugger;` statement in javascript.)


{% highlight javascript %}
{% raw %}
it('should fail to find a non-existent element', function() {
  browser.get('app/index.html#/form');

  browser.pause();

  // This element doesn't exist, so this fails.
  var nonExistent = element(by.binding('nopenopenope')).getText();
});
{% endraw %}
{% endhighlight %}

---

## `browser.debugger()`

`browser.debugger()` is very similar, except that it inserts a breakpoint
in the node process.

{% highlight javascript %}
{% raw %}
it('should fail to find a non-existent element', function() {
  browser.get('app/index.html#/form');

  // Run this statement before the line which fails. If protractor is run
  // with the debugger (protractor debug <...>), the test
  // will pause after loading the webpage but before trying to find the
  // element.
  browser.debugger();

  // This element doesn't exist, so this fails.
  var nonExistent = element(by.binding('nopenopenope')).getText();
});
{% endraw %}
{% endhighlight %}


For this reason, if you wish to use `browser.debugger()`
you need to run your protractor tests in `debug` mode:

```
protractor debug debugging/failureConf.js
```

This is mainly useful if you are trying to need control over the node process itself, or if you
are trying to find a problem in Protractor/selenium.

---

## `browser.explore()`

Next is `browser.explore()`. Arguably I find this one of the most useful
for debugging. Its similar to `browser.pause()` but instead of stepping through, it
gives you a REPL to control and _**explore**_ your app as Protractor would.


---

> ## Alright, I think I get it! Anything else you can point me to?

Awesome, I'm glad you understood most of that! Here are a few other bits of note.

- If you encounter your tests failing, but debugging doesn't reveal anything obvious,
you are probably hitting a race condition where the test is running faster than your application.
This is especially common on CI systems like CircleCI or Jenkins
where you are running on low resource environments.
Try throwing a [`browser.sleep(1000)`](http://www.protractortest.org/#/api?view=webdriver.WebDriver.prototype.sleep) in there.


- When debugging, you will be re-running the tests a _**lot**_.
That's just how it works. Be patient. If you have a webpack build
process, try and make that run as fast as possible. In a large
application that can take almost as long as the tests.

- Use [`.sendKeys('any-string-here')`](http://www.protractortest.org/#/api?view=webdriver.WebElement.prototype.sendKeys) to fill in forms or perform key event actions.
- Use [`.clear()`](http://www.protractortest.org/#/api?view=webdriver.WebElement.prototype.clear) to clear a field.

- Try and modularize common steps that you use alot. It will make
modifying existing tests a lot easier _when_ your application changes.

I've linked to these before, but i'll give you two main articles I
referenced when writing this post.


[Debugging Protractor Docs](https://github.com/angular/protractor/blob/master/docs/debugging.md) - Grabbed some code examples from here

[Protractor API Docs](http://www.protractortest.org/#/api) - Protractor API Reference

If you have any questions or comments, feel free to leave them below!

Now get out there and write some tests!

-- Alexander Swensen
