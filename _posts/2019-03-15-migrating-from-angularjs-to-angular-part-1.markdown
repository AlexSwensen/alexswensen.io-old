---
layout: single
title: "Migrating From AngularJS to Angular - Part 1"
date: 2019-03-15T23:24:18-05:00
classes: wide
---

Recently my team and I needed to migrate a large frontend codebase from AngularJS into Angular. The migration had to be done over several years while continuing to build features of value to customers, and without stopping to "rewrite the whole thing." This process is still on-going. While there have been a few guides, blog posts, a bit of documentation to help steer the direction on this, there aren't all that many definitive guides that help you get from AngularJS to Angular without much guesswork. Several of them help you figure out how to get your app into a "Hybrid" state, but there is minimal direction once you are there.

The next several blog posts are my attempt at documenting and consolidating what I have learned in this experience, to benefit others. In short: _It's my best attempt at the guide I wish I had when I started this process._

## Defining The Problem

> While walking through the forest you encounter a wild AngularJS App. It attacks you with confusion. It was super effective.

So you have an AngularJS app. Either you wrote this before Angular was a thing, or you inherited it. Either way, you have it. Then one day, you see the [Angular teams announcement](https://blog.angular.io/stable-angularjs-and-long-term-support-7e077635ee9c); AngularJS now has an End-Of-Life date. On **June 30, 2021,** AngularJS will be unsupported.

**Note:** _If you are trying to decide which framework to start an app in the answer is relatively straightforward. **Do not write it in AngularJS**. There are plenty of frameworks out there, and each has its pros and cons. Just keep in mind longevity, flexibility, and scalability when making your choice._ 🙂 _As of this writing the three big ones of note are Vue, Angular, and React._

There are two problems here. Firstly, unless the app in question is a personal project, or you are part of a _very_ small team, that choice probably isn't up to you. You likely have an employer, product manager, and/or a stakeholder of some sort calling the shots. The second problem is you have a deadline fast approaching, and a massive backlog of things that need to be done.

At this point, the next steps depend on your situation and process. My only piece of advice is this: Your immediate superior is your best friend. Get them on board and let them fight your battles for you. They can help you convince other team members and stakeholders the value in moving off of an unsupported technology. Whatever ends up happening, a conversation likely needs to take place, and the time for that conversation is now.

So AngularJS is about to be EOL'ed.  You have 3 choices:

1. 2021 is a long ways off. I'll take my chances.
2. Rewrite the entire thing.
3. Migrate to Angular.

I would recommend against the 1st option: mainly because now and then a vulnerability sneaks into a framework or a library. After AngularJS's EOL date, any issues like this might not get fixed. At least not officially by the Angular team. In my mind, this is a high risk.

So you have two options left.

Rewrite or Migrate. Depending on the size of your application, and the amount of money that can be spent, there are several advantages to rewriting the application. If that is the route you choose congratulations! You have avoided the migration path!

For everyone else, lets keep going.

## Testing

I think my colleague [Zach Swift](http://zachswift.com/) put it best.

>Migrating from AngularJS to Angular is really an _iterative rewrite_.

You are trying to write as much code as possible in Angular, while taking every opportunity possible to rewrite the pieces of your codebase that are still in AngularJS. Seems simple, but depending on how complex your application is, the path forwrad can be quite daunting. When you are re-writing a service, you have to have a high amount of confidence you haven't broken some intended piece of functionality, and that a bug hasn't made its way in somewhere. For that we need both unit and integration tests.

At StudioNow we are fortunate in that testing is already a core part of our process. Both Jasmine tests, and Protractor E2E browser tests. These run for every commit in every PR. If our tests do not pass, they don't get released to production. That is not to say your existing tests will work as-is after a rewrite. There is a lot you have to rewrite in your tests. But as long as your inputs and outputs remain the same, you have a safety net there to help you from introducing bugs.

Jasmine tests can serve as Unit Tests, Integration tests, and even sometimes E2E tests (depending on how much you want to mock). They run quickly and can help you know if you broke something in your code.

E2E Browser tests take over a real browser, and interact with the application as a user would. By testing significant user-facing features and/or workflows, you can gain confidence in the application and user experience as a whole.

If you don't have tests, you can do two things now to help solve that.

1. You can start writing tests for code you already have.
2. You can make it a part of your process to require tests for new code going out.

If you want to make testing a part of your process, I would suggest checking out [TDD](https://en.wikipedia.org/wiki/Test-driven_development) and [SBE](https://en.wikipedia.org/wiki/Specification_by_example). They will help you get a high confidence of your code quckly, and can sometimes serve as documentation as well.

## To Migrate or Not to Migrate

There are a number of other business factors that go into the decision of if you should rewrite your application, or migrate.
