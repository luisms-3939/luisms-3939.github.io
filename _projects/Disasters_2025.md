---
layout: project
title: "Disasters 2025 Analysis"
description: "A comprehensive, interactive dashboard for analyzing global disaster events, built with Python, Streamlit, and Plotly. This project demonstrates end-to-end data science skills from data cleaning to deployment, featuring 70+ interactive visualizations across 8 analytical pages."
date: 2026-01-20
category: "data-analysis"
image: "/assets/images/projects/disaster2025/cover.png"
technologies:
  - Python
  - Pandas
  - Streamlit
  - Plotly
github: "https://github.com/luis-c2255/Disasters_2025/tree/main"
demo: "https://disasters2025-n4vbncdb9eraqqhciuhc9g.streamlit.app/"
---

## 🎯 Project Overview

This dashboard analyzes 20,000+ disaster events worldwide, providing insights into:
- Temporal patterns and seasonality
- Disaster type distributions
- Geographic hotspots
- Severity and impact analysis
- Response time effectiveness
- Economic and population impacts

## ✨ Features

- **Interactive Filters**: Filter by date range, disaster type, severity, and major disaster status
- **Real-time Metrics**: Track total events, affected population, economic loss, and response times
- **Rich Visualizations**: 15+ interactive charts including maps, time series, and correlation matrices
- **Geographic Analysis**: Interactive world map showing disaster locations and impacts
- **Data Export**: Download filtered datasets for further analysis
- **Responsive Design**: Works on desktop and mobile devices


## 📖​ Storytelling Approach

The dashboard uses a narrative structure:

1. **What Happened?** - Executive summary with key numbers
2. **When Did It Happen?** - Temporal patterns reveal timing
3. **What Types?** - Understanding the threats we face
4. **How Bad Was It?** - Severity and impact analysis
5. **Where Did It Happen?** - Geographic distribution
6. **How Did We Respond?** - Response effectiveness
7. **What's Connected?** - Relationships and correlations
8. **See The Details** - Deep dive into raw data

   
## ⚙️​The Process

### Step 1: Data Exploration
Run the exploration script to understand your data:
```bash
python step1_exploration.py
```

### Step 2: Data Cleaning
Clean and preprocess the data:
```bash
python step2_cleaning.py
```
This creates `disaster_events_cleaned.csv` with enhanced features.

### Step 3: Run Analysis
Generate statistical insights:
```bash
python step3_analysis.py
```

### Step 4: Launch Dashboard
Start the Streamlit dashboard:
```bash
streamlit run app.py
```

The dashboard will open in your browser at `http://localhost:8501`

## 📁 Project Structure

```
disaster-dashboard/
│
├── synthetic_disaster_events_2025.csv    # Raw data
├── disaster_events_cleaned.csv           # Cleaned data (generated)
│
├── step1_exploration.py                  # Data exploration script
├── step2_cleaning.py                     # Data cleaning script
├── step3_analysis.py                     # Analysis script
├── app.py                                # Main Streamlit dashboard
│
├── requirements.txt                      # Python dependencies
└── README.md                            # This file
```

## 🎨 Dashboard Sections

### 1. Executive Summary
- High-level KPIs (total events, affected population, economic loss, response time)
- Key insights box with major findings

### 2. Temporal Patterns
- Time series of events over months
- Seasonal distribution analysis
- Peak activity identification

### 3. Disaster Types
- Distribution pie chart
- Impact comparison by type
- Frequency analysis

### 4. Severity and Impact
- Severity level distribution
- Economic impact categories
- Population impact breakdown

### 5. Geographic Analysis
- Interactive world map with disaster locations
- Top 10 most affected locations
- Size-coded by affected population
- Color-coded by severity

### 6. Response Analysis
- Average response time by disaster type
- Aid distribution visualization
- Effectiveness metrics

### 7. Correlations
- Correlation heatmap
- Scatter plots showing relationships
- Trend line analysis

### 8. Data Explorer
- Detailed data table (first 100 rows of filtered data)
- CSV export functionality

## 🛠️ Technical Implementation

### Prerequisites
- Python 3.8 or higher
- pip package manager

### Step 1: Clone or Download
```bash
# Create project directory
mkdir disaster-dashboard
cd disaster-dashboard
```

### Step 2: Install Dependencies
```bash
pip install streamlit pandas numpy plotly seaborn matplotlib
```

Or use requirements.txt:
```bash
pip install -r requirements.txt
```

**requirements.txt:**
```
streamlit==1.30.0
pandas==2.1.4
numpy==1.26.3
plotly==5.18.0
seaborn==0.13.1
matplotlib==3.8.2
```
## 💻​ Technologies Used

- **Streamlit**: Interactive web application framework
- **Pandas**: Data manipulation and analysis
- **NumPy**: Numerical computing
- **Plotly**: Interactive visualizations
- **Seaborn**: Statistical data visualization
- **Matplotlib**: Additional plotting capabilities

## 💡 Key Insights (Example from Data)

The dashboard reveals:
1. **Temporal Patterns**: Certain months show peak disaster activity
2. **Geographic Hotspots**: Specific regions experience higher disaster frequency
3. **Response Efficiency**: Response times vary significantly by disaster type
4. **Economic Impact**: Major disasters account for disproportionate economic losses
5. **Correlations**: Strong relationships between severity, population impact, and economic loss

## 📸 Screenshots
### Main Page

![Main Page](/assets/images/projects/disaster2025/dash_cover.png)

### Dashboard Overview

![Dashboard Overview](/assets/images/projects/disaster2025/overview.png)

### Geographic Analysis

![Geographic Analysis](/assets/images/projects/disaster2025/geomap.png)

### Correlation Analysis

![Correlation Analysis](/assets/images/projects/disaster2025/corre.png)


---

**Want to learn more about this project?** Feel free to [reach out](/contact) or check out the [code on GitHub](https://github.com/luis-c2255/Disasters_2025/tree/main).
