---
layout: project
title: "The Death of the Diamond Record"
description: "A Deep Dive into the Global Best-Selling Albums of all time"
date: 2026-01-15
category: "data-analysis"
image: "images/album.jpg"
technologies:
  - Python
  - Plotly
  - Pandas
github: "https://github.com/luis-c2255/best_selling_albums"
---

## Project Overview

"What makes an album transcend time? Is it the genre, the era, or the artist?"


## The Challenge

Why do certain albums become cultural pillars while others fade? I analyzed a dataset of the world's best-selling albums to identify the traits of a "Diamond" record. 

## The Analysis

### 1. Genre Dominance

These visualization break down how Rock and Pop established a market monopoly during the peak vinyl and CD eras. 

![sunburst_chart](/assets/images/projects/best_selling_albums/sun.svg)

### 2. The Era Lock

I used a scatter plot of sales volume vs. release year to visualize the 'plateau' of modern music. It reveals how the shift from physical ownership to digital streaming changed the definition of a "best-seller."

![bubblescatter](/assets/images/projects/best_selling_albums/scatter.svg)

![heatmap](/assets/images/projects/best_selling_albums/heatmap.svg)

### 3. Artists Efficiency

I calculated average sales per album to distinguish between "One-Hit Wonders" and artists with long-term commercial consistency.

![chartscatter](/assets/images/projects/best_selling_albums/scat.svg)

### 4. Artists Efficiency

A look at the "Origin of Sound," showing how a handful of countries have dominated the global music economy for decades.

![mapchart](/assets/images/projects/best_selling_albums/map.svg)

### 5. The Best Ones

And here they are, the "Best Ones"!

![barchart](/assets/images/projects/best_selling_albums/bar.svg)

![top5](/assets/images/projects/best_selling_albums/top.png)

## The "Hidden Story" Discovery

While performing my analysis, I uncovered a startling trend: The "Best-Sellers Club" is essentially closed. Despite the global reach of modern music, nearly all the top 50 best-selling albums of all time were released in the 1970s and 1980s. This project explores the "Golden Age" of sales and why modern superstars struggle to break into this historic leaderboard.

## Base Dataset

[best_selling_albums.csv](/assets/images/projects/best_selling_albums/best_selling_albums.csv)

## Technical Toolkit

- **Pandas**: For data wrangling and calculating artist averages.
- **Plotly**: To create interactive visuals that allow users to hover and see specific album stats.

## Notes

Sales figures are approximate and partially simulated for educational purposes. Album titles, artists, and cultural references are inspired by publicly available sources as RIAA, IFPI, Rolling Stones, Billboard, and Wikipedia.

---

**Want to learn more about this project?** Feel free to [reach out](/contact) or check out the [code on GitHub](https://github.com/luis-c2255/best_selling_albums).
