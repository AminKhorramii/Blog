---
title: 'An Obsidian-to-GitHub Blog Publisher Plugin' 
date: '2025-04-04' 
excerpt: 'How I built a tool to streamline publishing from Obsidian to my blog'
---


It's been a while since I've been thinking about sharing my thoughts and observations, particularly how I make tools. Today, I want to talk about how I built [thoughts.amin.contact](https://thoughts.amin.contact/) and the custom tooling behind it.

![demo publisher](/images/demo_publisher.gif)

## The Publishing Problem

I love writing in Obsidian. There's something about the clean Markdown interface that just makes writing easier. But when it came to publishing my thoughts, I faced a friction point: how do I get content from my Obsidian vault to my blog without a cumbersome copy-paste workflow?

My blog is built with [NextJS](https://nextjs.org/) and uses Markdown files for content, which are stored in a GitHub repo. When changes get merged, Cloudflare Pages automatically deploys the updated site. Simple - except for the "getting content into GitHub" part.

I wanted a seamless experience: write in Obsidian → click a button → content appears on my blog.

## The Solution: A Custom Obsidian Plugin

After exploring existing plugins, I realized none quite matched my workflow. I wanted something that would:

1. Take my current Obsidian note
2. Create a Pull Request to my GitHub repo
3. Place the file in the right content directory
4. Preserve front matter (title, date, etc.)
5. Make it easy to review before publishing

So I rolled up my sleeves and built exactly that: the [Obsidian Content Publisher](https://github.com/AminKhorramii/obsidian-content-publisher) plugin.

![config_publisher_image](/images/config_publisher_image.png)

## How It Works

The workflow is simple:

1. I write a post in Obsidian with proper front matter (title, date, excerpt)
2. When ready to publish, I click the "Create GitHub PR" button
3. The plugin opens a dialog where I can confirm details
4. With one click, it creates a pull request to my blog repository
5. I review the PR on GitHub and merge when ready
6. Cloudflare Pages automatically deploys the updated blog

No more context switching between applications, no more manual file creation, no more forgetting front matter formats.

## Building the Plugin

I started with the [Obsidian Sample Plugin](https://github.com/obsidianmd/obsidian-sample-plugin) as a template. From there, I:

1. Added GitHub API integration using Octokit
2. Built a settings system to manage repository connections
3. Created a modal for confirming post details before submission
4. Implemented front matter parsing and template generation
5. Added a ribbon button for quick access


This plugin is more about what I love about building tools: identifying friction in a workflow. If you use Obsidian for writing and GitHub for hosting content, check out the [Obsidian Content Publisher](https://github.com/AminKhorramii/obsidian-content-publisher) plugin.

---

_This post was written in Obsidian and published using the very plugin it describes. Meta, right?_
