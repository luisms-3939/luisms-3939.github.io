---
layout: project
title: "Capstone Project IBM - Data Science"
description: "Predicting SpaceX Launch Prices & First Stage Reuse"
date: 2025-12-26
category: "data-analysis"
image: "/assets/images/projects/spacex/SpaceX.svg"
technologies:
  - Python
  - Folium
  - SQL
  - Machine Learning
github: "https://github.com/luis-c2255/Project_Capstone_IBM_SpaceX"
demo: "https://lmode2255.pythonanywhere.com/"
stats:
  - value: "50%"
    label: "Faster Reporting"
  - value: "15+"
    label: "Key Metrics Tracked"
  - value: "100K+"
    label: "Data Points Analyzed"
---

## Project Overview

This capstone project course will give you a taste of what data scientists go through in real life when working with real datasets. You will assume the role of a Data Scientist working for a startup intending to compete with SpaceX, and in the process follow the Data Science methodology involving data collection, data wrangling, exploratory data analysis, data visualization, model development, model evaluation, and reporting your results to stakeholders.

## The Problem

SpaceY plans to enter the commercial launch market and compete with SpaceX’s Falcon 9. Understanding SpaceX’s pricing and reuse patterns is essential to designing a viable business model.

**Research questions**:
1. What factors influence the price of a SpaceX launchm and how can we estimate that price?
2. Can we predict whether the first stage will land successfully and be reusable using public data?

**Scope of work**
- Data collection from APIs and web scrapping
- Data wrangling & normalization
- SQL-based analysis
- EDA & interactive visual analytics
- Machine Learning models for landing success prediction

## Data Collection
### SpaceX API

<img src="https://github.com/luis-c2255/luis-c2255.github.io/blob/changes/assets/images/projects/SpaceX_API.svg?raw=true" alt="Chart" width="65%" height="65%">

### Web Scrapping

<img src="https://github.com/luis-c2255/luis-c2255.github.io/blob/changes/assets/images/projects/web_scrapping.svg?raw=true" alt="Chart" width="65%" height="65%">

## Data Wrangling

<img src="https://github.com/luis-c2255/luis-c2255.github.io/blob/changes/assets/images/projects/data_wrangling.svg?raw=true" alt="Chart" width="65%" height="65%">

## Exploratory Data Analysis Approach
To understand patterns in launch behavior, performance, and mission characteristics, performed a Structured EDA workflow:

<img src="https://github.com/luis-c2255/luis-c2255.github.io/blob/changes/assets/images/projects/eda_approach.svg?raw=true" alt="Chart" width="65%" height="65%">

**Purpose**
Identify relationships, anomalies, and operational patterns that inform both SQL analysis and predictive modeling

<img src="https://github.com/luis-c2255/luis-c2255.github.io/blob/changes/assets/images/projects/graph.svg?raw=true" alt="Chart" width="65%" height="65%">

## SQL

<img src="https://github.com/luis-c2255/luis-c2255.github.io/blob/changes/assets/images/projects/sql.svg?raw=true" alt="Chart" width="65%" height="65%">

**Output**
A set of validated metrics used to get payload totals, mission outcomes and booster performance.

- **Total Payload Mass for NASA**

`SELECT SUM("PAYLOAD_MASS_KG_") AS Total_Payload_Mass FROM SPACEXTBL WHERE Customer = "NASA (CBS)"`

**45,596 kg**

NASA is a major contributor to SpaceX's early manifest, especially ISS resupply missions.

- **Average Payload Mass for F9v1.1**

`SELECT AVG("PAYLOAD_MASS_KG_") AS Average_Payload_Mass FROM SPACEXTBL WHERE "Booster_Version" = "F9 v1.1"`

**2,928.4 kg**

Early Falcon 9 versions carried significantly lighter payloads compared to Block 5.

## Interactive Visualizations
**Geospatial Analysis with Folium**

Using Folium, created interactive maps to visualize: 
1. **Launch Site Locations**
  - CCAFS SLC-40 (Cape Canaveral Space Force Station, Space Launch Complex 40, Florida, United States)
  - KSC LC-39A (Kennedy Space Center Launch Complex 39A, Florida, United States)
  - VAFB SLC-4E (Vandenberg AFB Space Launch Complex 4E, Lompoc, United States)

<img src="https://github.com/luis-c2255/luis-c2255.github.io/blob/changes/assets/images/projects/foli.svg?raw=true" alt="Map" width="65%" height="65%">

2. **Success vs Failure Markers**

<img src="https://github.com/luis-c2255/luis-c2255.github.io/blob/changes/assets/images/projects/folio.svg?raw=true" alt="Map" width="65%" height="65%">

**Dashboard**
Used Plotly Dash to create a simple dashboard to visualize the Launch Success Count for all sites and Launch Site with Highest Launch Success Ratio.

Check the dashboard [here](https://lmode2255.pythonanywhere.com/)

## Predictive Analysis
**Machine Learning Overview**

<img src="https://github.com/luis-c2255/luis-c2255.github.io/blob/changes/assets/images/projects/ml%20implement.svg?raw=true" alt="Photo" width="65%" height="65%">

**Model Comparison (GridSearchCV-tuned)**
Insights
- All models generalize similarly on test data (0.8333 accuracy).
- Decision Tree achieves the highest training accuracy, indicating it captures more complex patterns.
- Logistic Regression provides a strong baseline with minimal complexity.
- SVM performs well despite using a non-linear kernel (sigmoid), showing non-linear relationships in the data.

**Why this matter**
Space Y can rely on multiple model types to predict landing success - the signal is strong and consistent across algorithms.

**Confusion Matrices & Interpretation**

**Confusion Matrix - Logistic Regression**

<img src="https://github.com/luis-c2255/luis-c2255.github.io/blob/changes/assets/images/projects/decision%20tree.svg?raw=true" alt="Photo" width="30%" height="30%">

**Confusion Matrix - SVM**

<img src="https://github.com/luis-c2255/luis-c2255.github.io/blob/changes/assets/images/projects/logistic%20regression.svg?raw=true" alt="Photo" width="30%" height="30%">

**Confusion Matrix - Decision Tree**

<img src="https://github.com/luis-c2255/luis-c2255.github.io/blob/changes/assets/images/projects/SVM.svg?raw=true" alt="Photo" width="30%" height="30%">

- Models correctly classify most “landed” outcomes.
- False negatives (predicting failure when it landed) are low — important for operational planning.
- False positives (predicting landing when it fails) are slightly higher, reflecting the difficulty of predicting borderline missions.

**Why this matters**

Confusion matrices reveal how the model makes mistakes — critical for risk‑sensitive decisions like booster recovery.


## Key Insights

**1. Launch Pricing Is Predictable**

Payload mass and orbit type explain most of the variance in launch price. → Space Y can benchmark pricing with confidence.

**2. Reusability Is Systematic**

Landing success is predictable with ~89% accuracy. → Space Y can design missions to maximize reuse probability.

**3. Infrastructure Drives Reuse**

Landing pad availability and launch site strongly influence outcomes. → Early investment in landing infrastructure is essential.

**4. Block 5‑style Boosters Are Critical**

Booster version is a top predictor of success. → Space Y should prioritize a robust, reusable booster design.

**5. Operational Maturity Matters**

Success rates improve dramatically after 2015. → Space Y should expect a learning curve but rapid improvement.

## Limitations & Future Work

**Limitations**

- No access to real‑time telemetry (fuel margins, thrust, weather).
- Some scraped fields contain missing or inconsistent values.
- Landing outcome labels simplified into binary classes.
- Payload mass sometimes missing for classified missions.
- No cost data directly available — price estimation is inferred.

**Future Work**

- Integrate weather and wind‑shear data for better landing predictions.
- Add booster age, refurbishment cycles, and flight history.
- Incorporate real‑time telemetry if available.
- Expand dataset to include Falcon Heavy and Starship.
- Build a full pricing model using regression + cost modeling.
- Deploy the ML model as an API for Space Y’s operations team.


## Screenshots

<img src="https://github.com/luis-c2255/luis-c2255.github.io/blob/changes/assets/images/projects/landing_outcom.svg?raw=true" alt="Photo" width="65%" height="65%">


<img src="https://github.com/luis-c2255/luis-c2255.github.io/blob/changes/assets/images/projects/orbit_freq.svg?raw=true" alt="Photo" width="65%" height="65%">


<img src="https://github.com/luis-c2255/luis-c2255.github.io/blob/changes/assets/images/projects/total_per_site.svg?raw=true" alt="Photo" width="65%" height="65%">


<img src="https://github.com/luis-c2255/luis-c2255.github.io/blob/changes/assets/images/projects/yearly.svg?raw=true" alt="Photo" width="65%" height="65%">



**Want to learn more about this project?** Feel free to [reach out](/contact) or check out the [code on GitHub](https://github.com/luis-c2255/Project_Capstone_IBM_SpaceX).

