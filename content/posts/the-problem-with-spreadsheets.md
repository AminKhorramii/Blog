---
title: "The Problem With Spreadsheets (and what I'm doing about it)"
date: '2026-01-24' 
excerpt: "I've been ideating and building data tools for a while now. DataKit started as a way to query files without the hassle of setting up a database or uploading data to some cloud services. It worked. People are using it. But some things kept bothering me."
---

I've been ideating and building data tools for a while now. [DataKit](https://datakit.page) started as a way to query files without the hassle of setting up a database or uploading data to some cloud services. It worked. People are using it. But some things kept bothering me. In short, I've heard a lot:

- Why can't the AI also change cells in the file we give to it?
- Why can't we modify this data grid ourselves?

## "Can I just tell the AI to change my data?"

This was the most common request I got with DataKit. People would load a file, ask the AI a question, run queries, run profiling, get insights and then want to say something like "remove all rows where the date is before 2023" or "add a column that calculates the margin." They wanted to talk to their spreadsheet and have it change and see it in place instantly.

DataKit wasn't built for that. It was built for querying, for answering questions about your data without modifying it in place. The first-read-only approach was intentional. I was thinking like a database person: you query, you analyze, you export. You don't mutate your source data through a chat interface.

But among its user base, there are also spreadsheet people. And spreadsheet people edit. They are not that "comfortable" with "sql" per se.

## The Main Problem

Spreadsheets are everywhere. Excel, Google Sheets, etc, they're the universal interface for data. Everyone knows how to use them. And yet, every time I open a spreadsheet with more than a few thousand rows, I feel the friction e.g. the scrolling and the formulas that break. The moment you need to do anything beyond basic filtering, you're either writing VLOOKUP nightmares or exporting to something else entirely.

The problem isn't that spreadsheets are bad. They're super good at what they do. The problem is that we've been using them for things they were never designed for. And now, with AI making natural language commands actually useful, people expect to just _tell_ their tools what to do. DataKit could answer questions. But it couldn't take action with ease.

## What I Actually Needed

I wanted something that felt as immediate as a spreadsheet - drop a file, see your data - but with the power of actual query tools underneath. And crucially: something where you could say "filter this" or "transform that" and have it happen.

So I built OpenSheet.

## What It Is

OpenSheet is a browser-based tool where you drop files (CSV, JSON, Excel, Parquet) onto a canvas and they become queryable, editable objects. You can organize them like files on a desktop, group them into folders, and open them in a focused view when you need to dig deeper.

Under the hood, it's running DuckDB in your browser. Your data stays local. Always.

The canvas metaphor wasn't accidental. I wanted the spatial relationship between files to mean something. When you're working with multiple datasets, being able to see them laid out - and eventually connect them - matters more than a list in a sidebar.

## The AI Part

This is where I listened to the feedback.

In OpenSheet, you can talk to your data and have it respond. Not just with answers, but with actions. Ask it to filter rows, create calculated columns, clean up messy values, or transform your dataset - and it does it. You see the changes, you can undo them, and you stay in control. I'm working on desktop version as well, where you can modify the files on your file system as well.

It's not trying to be magic. You still need to know what you want. But the gap between "I want to remove duplicates based on email" and actually doing it is now just... saying it.

I'm still figuring out where the line is between "data tool" and "spreadsheet replacement." Maybe OpenSheet doesn't need to replace spreadsheets. Maybe it just needs to be the thing you reach for when spreadsheets stop making sense and when you want to talk to your data instead of wrestling with formulas.

## Try It

You can try it at [https://opensheet.app](https://opensheet.app). I'm genuinely curious how people use the AI editing features. I want to learn how these workflows work the best.

If you have thoughts, find me at [https://amin.contact](https://amin.contact).