---
title: 'The Conversational Coding' 
date: '2025-11-19' 
excerpt: 'The thing that breaks my brain (recently more and more) isn't that these tools exist. It's that they _work_. Like actually work. Question is whats gonna come next.'
---

I saw someone build a project management system in less than an hour by just... writing to a chatbot. The app worked. It had user authentication, a database, a board -- the whole thing. The person who built it had never written a line of JavaScript. Didn't know what React was. But she'd shipped a working application before lunch.

I didn't know how to feel about this. Still don't, honestly. But I can't stop thinking about it.

## Everyone is losing their minds 

In the past year, companies like Lovable, Bolt.new, Base44, v0, Replit—they've convinced hundreds of thousands of people that you can build applications by just... talking. Having a conversation with it. That's it.

The thing that breaks my brain (recently more and more) isn't that these tools exist. It's that they _work_. Like actually work. Question is whats gonna come next.

## Three types of people I keep seeing

**The person who just gets it** has developed this intuitive sense for how to talk to these AIs. They write prompts like they're briefing a capable but slightly obtuse intern. "Create a dashboard. Three columns. Make it look like Stripe but less intimidating." They know how much detail to give. They're doing something that doesn't have a name yet. Software architecture through conversation, vibes engineering? Whatever it is, it's a skill. And people are getting really good at it.

**The serial starter** starts twelve projects and finishes zero. I mean this has been me a lot. They get 80% of the way there, hit a weird edge case, and the conversation devolves into an endless loop of fixes that break other things. Every attempt to improve the app makes it slightly worse in different ways. Eventually, they close the tab and convince themselves they didn't really need that app anyway.

**let me see the code guy** knows how to code and is checking these tools out to see if their job is about to become obsolete. They generate an app, immediately inspect the code, and spend twenty minutes judging the AI's architectural choices. 

"Why would it use two separate state managers for this?"

They're not wrong. The code _is_ questionable. But their app works. These folks seems to be getting way less compared to lets say 5 months ago or so.

I've been all three of these people at different times the past year.

## What I'm thinking about

I've been spending some time in this space recently. Trying different tools, talking to people building with them, reading stuff I can find, thinking about where this is all going. The more I dig in, the more I think we're at one of those  moments where the way we build software is fundamentally changing.

Not in the "this will replace all developers" way that some folks keep saying (that's not happening, that's not the point man). But in the "this unlocks a completely different way of working" way. In the "this changes who can build and what they can build" way.

The problems are real (I'm about to list a bunch of them). But the problems are also... solvable? And someone's going to solve them. And that feels like the interesting place to be.

## The pricing thing doesn't make sense (yet)

So most of these builders lose money on (so many maybe?) customers. You pay them $20, you use $30 worth of Claude API calls (I'm rambling now - but yeah you can definitely imagine without token caching, high number of projects being made, etc the cost not be low), they eat the difference. Everyone's pointing this out like it's a gotcha. "Unsustainable"

But I mean, _nobody knows what any of this should cost._ What is the fair market value of a robot that writes code? How much should it cost to generate a working authentication system? We have no frame of reference.

The traditional software economics don't map to "we run millions of tokens through foundation models every time someone asks us to add a button." Maybe this all craters in six months. But it's also possible—and I actually think more likely—that we're dramatically underpricing what this capability is worth.

The market is moving faster than anyone can measure it. That's not a red flag to me. That's what happens when something fundamental shifts.

## The iteration thing is broken

So these (current) tools are really good at generating code from scratch. They're much worse at _modifying_ existing code while maintaining the mental model of what everything does. Every change is basically a roll of the dice. Will this break something? Probably not, but maybe!

Traditional coding has this problem too (obviously). But traditional coding lets you _see the damage_. You can trace the bug, understand what changed, revert specific parts. With current chat-based builders, you're stuck describing symptoms to a doctor who can't examine the patient.

This is the biggest unsolved problem I see right now. Initial generation? Everyone's "somehow" solved that. But making changes 20, 30 times without everything degrading into chaos? Nobody's nailed it yet.

I think someone will. The tools are getting better fast. Like really fast. Every few weeks there's a new version that handles edge cases better, maintains context longer, breaks things less often. It's not solved, but the trajectory is clear.

## The ownership question

So if you had the idea, made the decisions, shaped the product—does it matter that you didn't write the actual code (assuming on incoming months/years this code also finds a high bar)? I'm starting to think it doesn't. Or at least, it matters way less than I thought it did.

Someone who couldn't build before can build now. The product manager who had an idea for an internal tool but couldn't get engineering time. The designer who sketched out an app concept but didn't know React. The entrepreneur who wanted to test something but couldn't afford to hire developers. They're all building now. And some of what they're building is actually good.
## What I think is happening

You used to need to understand memory management; then garbage collectors handled it. You used to need to understand server configuration; then PaaS handled it. You used to need to understand CSS (LoL); then Tailwind handled it.

At each layer, experts complained that the abstraction was lossy. And they were right! The abstractions _were_ lossy. But they were _good enough_, and being good enough while being dramatically easier always wins eventually.

Chat-based development is just the next layer. It's abstracting away syntax, frameworks, boilerplate. You're left with high-level decisions—what should this do, how should it look—and the AI handles the translation to actual code.

Is the code perfect? No. Is it maintainable? Right now (seems to be) no. Does it work? Usually yes. Can you ship it? Increasingly, also yes. The code will get better. The maintainability will improve. The tools will learn. But the fundamental shift—that you can build software by describing what you want—that's not going away. That's here to stay. And once something becomes possible, it's really hard to go back to pretending it should still be difficult.

## What I think is true

These chat-based app builders are genuinely good for prototypes and MVPs right now. They're collapsing the time from idea to working demo from months to hours. That part is real and kind of incredible. I don't think this stops there even—the tools are getting better fast enough that what works for MVPs today might work for production apps tomorrow. Maybe even sooner.

I think the rough edges are temporary and the fundamental shift is permanent. The tools will get better at iteration. The lock-in problems will get solved (or at least, better). The pricing will stabilize. The code quality will improve. I think we're really early in this. Like really early. "The first iPhone shipped in 2007 and couldn't even copy and paste". Now look where we are.

I'm watching very carefully. And honestly, I'm thinking a lot about being part of this next phase rather than just watching it happen. There's too much happening here to sit on the sidelines.

I'll write more about this as I figure out what my next steps look like.
