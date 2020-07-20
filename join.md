---
layout: page
title: How to join as a volunteer
permalink: /join.html
---

# {{ page.title }}

I'm lazy and I didn't create any backend for this. This whole site runs as a [Jekyll](https://jekyllrb.com/docs/) blog.

[>> Click here to see how to create your profile <<](#getting-started)

(I know it's not the best way, but I'm just getting started 🤗)

# Getting started

To get started you need a few things that you might already have:

1. [Schedule a call with me](/adriano.galello.html) so we can meet and talk about how you could help.

2. A GitHub Account to submit/update your profile.

3. An account on [Calendly](https://calendly.com/), [Yocale](https://www.yocale.com/), [Shore](https://www.shore.com/), or any other public calendar service.

4. Willing to give some of your free time. You decide how many days per week/month and how many minutes a call lasts. You can start with just 1 call of 30 mins per month.

5. A videoconference tool like [Google Hangout](https://hangouts.google.com/), [WhereBy](https://whereby.com/), [Jitsi Meet](https://meet.jit.si/) or any other that you like.

6. A [LinkedIn](https://www.linkedin.com/) profile is preferred to validate your identity.

Once the user gets in touch with you, then it's up to the two of you to work out the details.

If you have no idea how to do the steps described above feel free to [contact me](/adriano.galello.html) and I will do it for you.

### Fork the repo
[Fork the repository](https://github.com/getadvice/getadvice.github.io) by clicking the Fork button on the top right corner. Forking means that you now copied this whole project and all the files into your account.

### Create your profile
Go to the **_posts** folder and add your profile like this:

**YYYY-MM-DD-YOUR-FULL-NAME.md**  
Ex: 2020-06-01-bob-belcher.md

And add the following properties:

```
---  
layout: post
firstname: Firstname
lastname: Lastname
pic_url: full url to your profile picture. You can also upload it to the folder assets/profile-pics/
lang: ["spanish", "english"]  
categories: Categories separated by space or ["Foo", "Bar", "Foo & Bar"] (3 or 4 top)
tags: Tags separated by space or ["tag 1", "tag 2"]. Keep it under 10
city: Your City/Country name
about: A short text about yourself (no longer than 50 words)
linkedin: Your LinkedIn handler (the base URL will be prepended https://www.linkedin.com/in/)
blog: Url to your blog  
twitter: Your twitter handler (the base URL will be prepended https://twitter.com/)
permalink: Choose a handler for your profile (Recommended firstname.lastname.html. This way you can share your profile link as https://getadvice.github.io/firstname.lastname.html)  
donate_url: An URL to allow users to donate
calendar_url: An URL to your public calendar like calendly, yocale, shore, etc.
---
You can add extra info or tips for the call, about yourself, testimonials, etc.

No js, iframes or things like that. Let's keep everything simple for now.
```


### Test it
Test if everything looks good. This blog works with [Jekyll](https://jekyllrb.com/docs/) you can clone the forked repo and follow the instructions on Jekyll docs on how to test.

### Submit a Pull Request
Once you're happy with everything make a **Pull Request** I will review it and accept it if everything is ok.

### Rules and recommendation for the calls
- Make sure you know what the call will be about.
- Let the other person know that you are going to attend the meeting.
- You can reject/leave the call if you want. Ex.:
  - You think you won't be able to help the other person with his questions.
  - You won't be available.
  - The other person didn't get in touch after scheduling the meeting.
  - You belive the other person is trying to solve a problem for a company (they could pay for that, suggest it if you want).
  - The other person is beign rude.
- Be on time for the call
- Be polite
- Listen
- 

### Why would I give my time for free (time is money!)

People have asked me this while pitching the idea, so here are my reasons on why I do it:

- I'm on tech and earning money thanks to the **free time** donated by others. I'm talking about:
  - Linux.
  - StackOverflow answers (Try blocking it for 24 hours 😏).
  - Frameworks.
  - PHP/Python/GO libraries.
  - Blog posts.
  - ....
- Not for making money.
- Help others Devs/Entrepreneurs.
- Networking.
- Improve my presentation skills.
- Problem-solving training.
- Hear about what other people are building.
- Review tools and knowledge that I might not use too often.

### Ok, but I don't have free time

If that's your case:

1. You decide how many days per week/month and how many minutes a call lasts. You can start with just one consultancy call of 30 mins per month.

2. This site, currently it doesn't have millions of users trying to schedule a call with volunteers. That means that your calendar won't get too busy.

3. You can always change your availability on the calendar if you're having a lot of work and can't help for the next few weeks.


### Question!?
[Schedule a call or contact me](/adriano.galello.html) or [open an issue on the repo](https://github.com/getadvice/getadvice.github.io/issues)