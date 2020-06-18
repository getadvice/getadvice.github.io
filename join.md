---
layout: page
title: How to join as a volunteer
permalink: /join.html
---

<h1 class="title is-size-1">{{ page.title }}</h1>

I'm lazy and I didn't create any backend for this. This whole site runs as a <a href="https://jekyllrb.com/docs/ ">Jekyll</a> blog.

If you have no idea how to do these steps described below feel free to <a href="/adriano.galello.html">contact me</a> and I will do it for you.

(I know it's not the best way, but I'm just getting started 🤗)

<h2 class="is-size-3">Fork the repo</h2>
Fork the repository <a href="https://github.com/"></a> by clicking the Fork button on the top right corner. Forking means that you now copied this whole project and all the files into your account.

<h2 class="is-size-3">Create your profile</h2>
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
categories: Categories separated by space (3 or 4 top)
tags: Tags separated by space. Keep it under 10
city: Your City/Country name
about: A short text about yourself (no longer than 50 words)
linkedin: Your LinkedIn handler (the base URL will be prependedrepend https://www.linkedin.com/in/)
blog: Url to your blog  
twitter: Your twitter handler (the base URL will be prepended https://twitter.com/)
permalink: Choose a permalink for this site (usually firstname-lastname.html will be best)  
donate_url: An URL to allow users to donate or tip you
calendar_url: An URL to your public calendar like calendly, yocale, shore, etc.
---
You can add extra info or tips for the call or about yourself here if you want it.
```

<h2 class="is-size-3">Test it</h2>
Test if everything looks good. This blog works with <a href="https://jekyllrb.com/docs/ ">Jekyll</a> you can clone the forked repo and follow the instructions on Jekyll docs on how to test.

<h2 class="is-size-3">Submit a Merge Request</h2>
Once you're happy with everything make a **Merge Request** I will review it and accept it if everything is ok.

<h2 class="is-size-3">Question!?</h2>
<a href="/adriano.galello.html">Schedule a call or contact me</a> or <a href="https://github.com/getadvice/getadvice.github.io/issues">open an issue on the repo</a>