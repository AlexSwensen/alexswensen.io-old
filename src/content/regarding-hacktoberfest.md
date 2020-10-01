---
layout: post
title: 'Regarding Hacktoberfest, OpenSource and Spam'
author: [Alexander Swensen]
tags: ['Python']
image: img/hacktoberfest.png
date: '2020-10-01T14:00:00-05:00'
draft: false
excerpt: Lets all just take a second and breathe...
---

Over the last several days I have seen a number of blog posts pop up raging against DigitalOcean. Yes, they are taking over October under the guise of "Contributing to OpenSource" and its just a large marketing campaign for them. The real issue here, however, has very little to do with DigitalOcean, OpenSource, or Github. The issue is that it is swamping maintainers dealing with the onslought of spam pullrequests.

While I, for now, will not jump into this flame war, I do think we can do some things to mitigate the burden maintainers are facing with spam pull-requests.

## Regarding Spam

Spam has been around since the dawn of the internet. We invented a way to communicate and bad actors started shouting communications to any who would listen. It's an inevitable fact that if you do something in the open, it will be abused. This is why we started to build automated systems to filter out the junk, and the same thing is possible here.

## Introducing CI

Earlier this year, Github released Github actions, an integration with their API that allows us to take action when a PR is opened. While most of us use it to run tests and ensure integrity of code being changed does not break requirements and specifications, it can also be used to automatically tag PR's with `Invalid` and `needs-review` tags. OpenSource maintainers can also add the ability to lock the pr to contributors until they can get the opportunity to review the validity of the pull-request, and make suggestions on improvements.

Further, we can do code analysis to see what kinds of changes were introduced. Was it junk additional comments? or did they actually contribute real code and/or documentation? We have the tools to build this. Further, it benefits more than just those contributing to get the Digital Ocean "Swag"... it benefits anyone who is looking to contribute during any time of the year.

I intend to start working on just such an integration very soon. In the mean time, I would like to make a few suggestions to Digital Ocean that would make this far easier going forward.

### #1. Allow repositories to Opt-In to Hacktoberfest

DigitalOcean, you started this effort, so it's on you to make sure it doesn't get out of hand. Please give the option for repositories to opt-in to this. There are many project maintainers who would benefit from the publicity and attention their projects would get by signing up for contributions during Hacktoberfest. Those get lost in the sea of every OS project out there. Opt-in would solve that.

### #2. Spam detection

Spam can be detected easily using the methods I described above. In addition to maintainers adding actions to detect it, DigitalOcean can also contribute to this to do detection on their end.

### #3. Communicate

Rather than us getting all up in a flame war and ranting on twitter, we should come together to figure out how we can do better. Bots and spam are inevitable, but they are also predictable and can be detected. There is no reason for us to lose our heads and spread hate, Especially during a time where we are already dealing with the worst year in history.
