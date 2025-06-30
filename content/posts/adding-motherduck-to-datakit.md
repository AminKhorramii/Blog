---
title: 'Adding MotherDuck to DataKit' 
date: '2025-06-17' 
excerpt: 'Remember when I said DataKit was just for local files? Well, I lied. Kind of.'
---

![datakit_motherduck_demo](/images/datakit_motherduck_demo.png)

Remember when I said DataKit was [just for local files](https://thoughts.amin.contact/posts/why-I-built-a-query-tool)? Well, not anymore.

Last week I spent some time integrating MotherDuck into DataKit, and honestly, it turned out way smoother than I expected. The whole thing started when I was talking with some MotherDuck folks and [Boaz Leskes](https://www.linkedin.com/in/boazleskes/) mentioned it would be cool to have the ability connect to their MD data too. That comment stuck in my head.

## The Problem

Here's the thing - DataKit was built for that "I just need to query this CSV real quick" scenario. But then people started using it for actual work, and they had data in different places. They'd query their local files, get some insights, then have to context-switch to another tool to query their cloud data. Not ideal.

The obvious solution? Just make DataKit talk to different sources. How hard could it be?

Turns out, not that hard. MotherDuck's WASM client plays nicely with the existing DuckDB setup. The trickiest part was getting the query routing right - figuring out when to send queries locally vs to MotherDuck based on the different syntax.

Ended up with:

- Connect with your MotherDuck token
- See all your cloud databases in the schema browser
- Write queries that automatically route to the right place
- Create tables in MotherDuck directly from local data

The schema browser now offers you the opportunity to show both local and cloud data in one tree view. Orange cloud icons for MotherDuck, hard drive for local. Simple.

## Try It Out

The MotherDuck integration is live on [DataKit](https://datakit.page) now. Just grab your token from MotherDuck, connect, and your databases show up instantly.

## What's Next

I'm genuinely curious what people will do with this. The feedback on the local-only version was already surprising, and now with cloud data in the mix... who knows?
