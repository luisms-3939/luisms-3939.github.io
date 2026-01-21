---
layout: project
title: "Mall Customers Segmentation & Behavioral Insights"
description: "A complete end‑to‑end analysis, from raw data to interactive dashboard"
date: 2026-01-18
category: "data-analysis"
image: "/assets/images/projects/customer_segmentation/cover.png"
technologies:
  - Python
  - Streamlit
  - Pandas
  - Plotly
github: "https://github.com/luis-c2255/mall_customers_segmentation"
demo: "https://mallcustomerssegmentation-ko.streamlit.app/"
---

## Project Overview

Understanding customer behavior is at the heart of effective marketing, product design, and business strategy. For this project, I explored the popular **Mall Customers dataset**, transforming a simple table of demographic and spending information into a structured, insight‑driven analytics product. My goal was to demonstrate a full analytical workflow: data cleaning, exploratory analysis, clustering, behavioral segmentation, and interactive visualization through a multi‑page Streamlit dashboard.

## 1. Framing the Problem

The dataset contains basic customer attributes — age, gender, annual income, and a spending score assigned by the mall. While small, it’s ideal for showcasing how even limited information can reveal meaningful behavioral patterns.

I approached the project with three guiding questions:

- How do demographic factors relate to spending behavior?
- Can we identify distinct customer segments using clustering techniques?
- What actionable insights emerge when we combine statistical analysis with interactive visualization?


## 2. Data Cleaning & Preparation

I began by standardizing column names, validating ranges, and checking for missing values or duplicates. Although the dataset is clean, I treated it as I would any real‑world data source: verifying assumptions, documenting anomalies, and preparing it for analysis.

This stage also included feature engineering:
-   Income tiers (low, medium, high)
-   Spending behavior quadrants
-   Encoded gender variable for modeling
-   Scaled features for clustering

These additions enriched the dataset and enabled deeper insights later in the workflow.

![chart](/assets/images/projects/customer_segmentation/table.png)

## 3. Exploratory Data Analysis

The EDA phase focused on understanding the distribution and relationships between variables. Using interactive Plotly visualizations, I examined:

-   Age, income, and spending score distributions 
-   Gender breakdown
-   Correlations between numerical features
-   Scatterplots revealing spending patterns across demographics
    
A few patterns stood out immediately: income and spending score do not correlate strongly, and younger customers tend to have higher spending scores. These early observations helped shape the clustering strategy.

![chart1](/assets/images/projects/customer_segmentation/relation.png)

![chart2](/assets/images/projects/customer_segmentation/relationships2.png)

## 4. Customer Segmentation with K-Means

Clustering is the centerpiece of this project. I applied K‑Means using two feature sets:

-   **2D:** Annual Income + Spending Score
-   **3D:** Age + Annual Income + Spending Score

I used the elbow method and silhouette scores to determine the optimal number of clusters, then visualized the results in both raw feature space and PCA‑reduced space.

![chart](/assets/images/projects/customer_segmentation/seg2.png)

Each cluster was profiled using:

-   Average age
-   Average income
-   Average spending score
-   Gender composition
  
This produced clear, interpretable customer groups — from high‑income luxury spenders to budget‑conscious shoppers with surprisingly high spending scores.

![chart](/assets/images/projects/customer_segmentation/seg3.png)

## 5. Behavioral Insights

To go beyond clustering, I analyzed customers through a behavioral lens:

-   **Quadrant analysis** (high/low income vs high/low spending)
-   **Income tier comparisons**
-   **Identification of underperforming and high‑potential segments**
    
These insights help answer practical business questions, such as which groups may respond best to targeted promotions or loyalty programs.

![chart](/assets/images/projects/customer_segmentation/behavioral.png)

## 6. Predictive Modeling

As an optional extension, I built simple models to predict spending score from demographic features. While the dataset is small, this step demonstrates how segmentation and prediction can complement each other in a real analytics workflow.

![chart](/assets/images/projects/customer_segmentation/predictive.png)

## 7. Interactive Streamlit Dashboard

To make the analysis accessible and visually engaging, I built a **multi‑page Streamlit app** using:

-   **Plotly** for fully interactive charts
-   **A custom Modern palette** (deep navy, electric blue, soft teal)
-   **A clean, modular page structure** using `st.pages`
    
The dashboard includes:

-   Overview KPIs
-   Distribution analysis
-   Relationship exploration
-   Clustering visualizations
-   Behavioral insights
-   Modeling results
    
This transforms the project from a static notebook into a polished, user‑friendly analytics tool.

![chart](/assets/images/projects/customer_segmentation/dash1.png)

Check the App --------> [here](https://mallcustomerssegmentation-ko.streamlit.app/)

## 8. Key Takeaways

This project demonstrates how a compact dataset can support a complete analytical narrative:

-   **Data cleaning** ensures reliability
-   **EDA** reveals structure and relationships
-   **Clustering** uncovers hidden customer segments
-   **Behavioral analysis** translates data into strategy
-   **Interactive dashboards** make insights accessible and compelling
    
It’s a concise but powerful example of how I approach data problems: with structure, clarity, and a strong emphasis on visual communication.

## Screenshots

![chart](/assets/images/projects/customer_segmentation/dist1.png)

![chart](/assets/images/projects/customer_segmentation/dist3.png)


---

**Want to learn more about this project?** Feel free to [reach out](/contact) or check out the [code on GitHub](https://github.com/luis-c2255/mall_customers_segmentation).
