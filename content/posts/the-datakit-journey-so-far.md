---
title: 'The DataKit Journey So Far' 
date: '2025-09-04' 
excerpt: "DataKit's major features from the last two months and what's next."
---

It's been a busy past two months. Today I found some time to just write down what's been happening since my last post about the MotherDuck integration. Back then, DataKit was on v0.1.6, and last week it reached v0.4.0 (took approximately two months - there needs to be a separate post where I explain how I've approached the versioning).

There are many aspects I could talk about - the calls I've been on, connections I've made, the high positive energy, and feature requests (check out the [feature request board](https://datakit.canny.io/feature-requests) if you're curious). Let me start quickly with the main features that have brought more traction to the platform then I talk a bit on what's next.

## Text-to-SQL: From WaveQuery to DataKit Assistant

Back in late 2023/early 2024, me and [Luke](https://www.linkedin.com/in/luke-rynne-cullen) built WaveQuery https://wavequery.com, which was primarily focused on text-to-SQL work. We put quite a good amount of effort behind it and learned loads of lessons (I'll write more about what happened there at some point). Those learnings directly influenced how I approached AI in DataKit.

With [v0.2.0](https://datakit.canny.io/changelog/v020), I brought those text-to-SQL learnings directly into DataKit - GPT-4o, Claude, Groq - so you can literally ask questions in plain English and get SQL queries generated automatically. When you're staring at a 30-column table trying to remember the exact syntax for a window function, sometimes you just want to ask "show me the top 5 customers by monthly revenue growth" and be done with it.

Then came [v0.3.0](https://datakit.canny.io/changelog/v030) with the DataKit Assistant - now you don't need to bring your own API keys (though you still can). You get Claude models backed by Anthropic from DataKit itself, follow-up questions, token consumption tracking, and even chart generation from queries. The assistant remembers context, so you can have an actual conversation with those table(s).

## Python Notebooks

[v0.3.5](https://datakit.canny.io/changelog/v035) brought something I wasn't planning initially (like at all) - Python notebooks running entirely in the browser. You can bridge to your DuckDB instance, write SQL, make plots, and use Hugging Face transformers (the Xenova models). No server involved here, just your browser doing all the lifting. Check out the [demo](https://youtu.be/m_I9rEyDzDw) if you've not seen how this works.

## Local models with Ollama

This one came from the more skeptical users (in the best way). The [Reddit post](https://www.reddit.com/r/ollama/comments/1mp00lq/datakit_ollama_your_data_your_ai_your_way) got some interesting reactions, especially from folks who were skeptical about AI seeing schemas. Fair point. With [v0.3.7](https://datakit.canny.io/changelog/v037), you can now run Llama 3, Mistral, DeepSeek r1, or any other Ollama-supported model locally. Zero API costs, zero rate limits, and most importantly - your schema never touches the internet. Just download [Ollama](https://ollama.com/), fire up DataKit, and you're good to go. 

## Workspaces 

The workspace feature in [v0.3.9](https://datakit.canny.io/changelog/v039) (almost) solved one of the most annoying problems - having to re-import the same files every time you opened your browser. Now your datasets persist, organized by project. To be clear, it's still not perfect - DataKit doesn't actually store your files, it just tracks where they are on your disk through file handlers. But even this simple change makes a difference when you're actually using this daily for the same files. There's an ongoing POC for DataKit Cloud that's in progress which would solve this properly, but more on that later.

And with [v0.4.0](https://datakit.canny.io/changelog/v040), you can connect directly to PostgreSQL databases. Preview tables, run queries, use the AI assistant - all without leaving your browser. This is more of a POC in action that different folks asked. Using Postgres extension on DataKit servers to have a layer of OLAP on the main DBMS systems users are using that connects them to DataKit. Still exploring and seeing how this could evolve and bring more values.

## The Users Are Teaching What This Should Be

The feedback has been incredible and sometimes surprising. People at my own company started using it for their daily workflows, which honestly wasn't something I expected when I built this as a "quick CSV query tool." I have gotten most feedback from data analysts who use it for quick explorations and non-technical folks who just want to ask questions about their spreadsheets.

The conversations have been interesting - some folks want to license DataKit for their teams, others are pushing for open-sourcing the code, and I've had good coffee chats about where this could go. Each conversation reveals a different use case I hadn't considered.

## What's Next?

Building a data exploration tool is interesting because it's inherently horizontal, everyone from engineers to operations to researchers has data they need to query. This creates a  challenge: how do you build something that's powerful enough for technical users but approachable enough for everyone else? Every request pulls in a slightly different direction.

The requests keep coming, but instead of just building everything, we're going to do more discovery. I'm planning to talk to more folks, understand their workflows better, and figure out which niche would be the best starting point to really spread the word. Each group has different needs, and finding the right focus will help DataKit grow in a meaningful way.

If you haven't tried DataKit yet, [give it a shot](https://datakit.page/). Drop in a file, ask a question in plain English, or write some Python. It might work the way you expect it to.

And if you've got thoughts, run into issues, or have that feature that would make this perfect for your workflow - let me know.


_P.S. 1 - I need to give a massive shoutout to my friend and a core member of this tool, [Luke](https://www.linkedin.com/in/luke-rynne-cullen), who's giving me loads of hands on distribution, connecting to different folks and what could be potentially next steps for DataKit._

_P.S. 2 - If you're wrapping up your studies, coming from data/computer science, having ideas, and want to be a founding engineer in this - please reach out. This could be a great time to join._

_P.S. 3 - Here's the [changelog](https://datakit.canny.io/changelog) if you want to see everything that's been added._
