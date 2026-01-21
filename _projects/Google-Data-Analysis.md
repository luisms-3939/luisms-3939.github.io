---
layout: project
title: "Capstone Project - Google Data Analysis"
description: "Cyclistic Bike-Share Analysis: From Casual Riders to Annual Members"
date: 2025-11-16
category: "data-analysis"
image: "/assets/images/projects/bike_share/BikeSharing.svg"
technologies:
  - Excel
  - BigQuery
  - Tableau
  - R
github: "https://github.com/luis-c2255/Capstone_Project_Google_Data_Analysis_BikeShare"
stats:
  - value: "50%"
    label: "Faster Reporting"
  - value: "15+"
    label: "Key Metrics Tracked"
  - value: "100K+"
    label: "Data Points Analyzed"
---

## Project Overview

This project contains a comprehensive data analysis for  **Cyclistic**, a fictional bike-share company in Chicago. As a junior data analyst, I followed the "Ask, Prepare, Process, Analyze, Share, and Act" framework to help the marketing team understand the behavioral differences between  **casual riders**  and  **annual members**.

The objective is to leverage these insights to design marketing strategies that convert casual riders into profitable annual members.

## The Problem

Our core business task is to leverage observed usage patterns to design a marketing strategy that successfully converts casual riders into  reliable, high-lifetime-value annual members.

- **Purpose & Scenario**: Analyze differences in usage patterns between casual and annual riders to inform a strategy for conversion, thereby maximizing annual memberships.

- **Real-world Obstacle**: Currently, casual riders are treated as a single, homogenous group. The obstacle is that the standard annual membership does not align with the needs of non-commuter, seasonal, or leisure-focused riders, leading to significant missed revenue and loyalty opportunities.

- **Key Assumptions**: The fundamental user need (transportation/leisure) is static, but the price/benefit structure must adapt to meet the different riding profiles to achieve conversion.

## The Data Analysis Process

1. **ASK**

The business task is to identify how annual members and casual riders use Cyclistic bikes differently.

- **Primary Stakeholders**: Lily Moreno, Director of Marketing
- **Secondary Stakeholders**: Cyclistic Executive Team

2. **PREPARE**

- **Data Source**: 12 months of Cyclistic historical trip data [Divvy datasets](https://divvy-tripdata.s3.amazonaws.com/index.html) provided by Motivate International Inc.
- **Integrity**: The data is public and reliable, through PII (Personally Identifiable Information) was excluded to maintain rider privacy.

3. **PROCESS**

I utilized **SQL** to process over 5.8 million rows of data.

- **Cleaning**: Removed duplicates, handled null values, and filtered out "test" entries.
- **Feature Engineering**: Calculated ride_length (Duration = Ended_At - Started_At).
    - Extracted day_of_week(1=Sunday, 7=Saturday).

```SQL
SELECT
  FORMAT_TIMESTAMP('%A', t.started_at) AS ride_weekday,
  t.member_casual,
  CASE
    WHEN EXTRACT(HOUR FROM t.started_at) BETWEEN 5 AND 9 THEN 'A. Morning Commute (05-09)'
    WHEN EXTRACT(HOUR
  FROM
    t.started_at) BETWEEN 10
  AND 16 THEN 'B. Midday Leisure (10-16)'
    WHEN EXTRACT(HOUR FROM t.started_at) BETWEEN 17 AND 19 THEN 'C. Evening Commute (17-19)'
    WHEN EXTRACT(HOUR
  FROM
    t.started_at) >= 20
  OR EXTRACT(HOUR
  FROM
    t.started_at) <= 4 THEN 'D. Late Night / Early AM (20-04)'
    ELSE 'Unknown'
END
  AS time_of_day_group,
  AVG(TIMESTAMP_DIFF(t.ended_at, t.started_at, MINUTE)) AS average_ride_length_minutes,
  SUM(TIMESTAMP_DIFF(t.ended_at, t.started_at, MINUTE)) AS total_ride_length_minutes
FROM
  `data-analytics-477211`.`bike_trips`.`ago-25` AS t
GROUP BY
  FORMAT_TIMESTAMP('%A', t.started_at),
  t.member_casual,
  time_of_day_group
ORDER BY
  FORMAT_TIMESTAMP('%A', t.started_at),
  time_of_day_group;
```
4. **ANALYZE & SHARE**

My analysis revealed distinct usage patterns between the two groups:

- **Ride Duration**: Casual riders have an average ride duration nearly double that of annual members, suggesting leisure or tourist usage.

<img src="https://github.com/luis-c2255/luis-c2255.github.io/blob/changes/assets/images/projects/distribution_rides_time_and_member.svg?raw=true" alt="Chart" width="65%" height="65%">

- **Weekly Trends**:
    - **Annual Members**: Exhibit higher activity during weekdays, peaking during morning and evening rush hours (commute-driven).
    - **Casual Riders**: Peak activity occurs on weekends (Saturday and Sunday), indicating recreational use.
- **Seasonality**: Both groups show increased usage in summer months, but casual rider volume drops more significantly during the winter.

5. **ACT: RECOMMENDATIONS**

Based on the data, I proposed the following three marketing strategies:

1. **Weekend Membership Specials**: Introduce a "Weekend-Only" or "Seasonal Pass" to bridge the gap for recreational users who find a full annual membership too expensive for their needs.

2. **Digital Engagement for Long-Duration Riders**: Use digital media to target users with high ride_lengthaverages, showing them how much they would save by switching from single-ride/full-day passes to a membership.

3. **Summer Conversion Campaign**: Launch targeted email and social media campaigns during peak summer months when casual rider volume is highest, emphasizing membership benefits for Chicago's lakefront and leisure spots.
## Results & Impact

<img src="https://github.com/luis-c2255/luis-c2255.github.io/blob/changes/assets/images/projects/conversion_strategy.svg?raw=true" alt="Chart" width="65%" height="65%">



## Key Learnings

- The greatest conversion potential lies in the high-frequency leisure rider who uses the service more than 3-4 times per month but remains casual.

- The value proposition must shift from convenience (for commuters) to cost savings/access (for leisure riders).

**Learning Highlights**

- The importance of normalizing ride data (e.g. using median vs mean for ride duration) to account for outliers and truly understand the typical trip purpose.

- The necessity of combining demographic context (Chicago tourism) with usage data (station location) to form actionable insights.


## Future Enhancements

<img src="https://github.com/luis-c2255/luis-c2255.github.io/blob/changes/assets/images/projects/Solutions_bike_share.svg?raw=true" alt="Chart" width="65%" height="65%">



## Screenshots

<img src="https://github.com/luis-c2255/luis-c2255.github.io/blob/changes/assets/images/projects/Screenshot_final_bike_share.svg?raw=true" alt="Chart" width="65%" height="65%">



---

**Want to learn more about this project?** Feel free to [reach out](/contact) or check out the [code on GitHub](https://github.com/luis-c2255/Capstone_Project_Google_Data_Analysis_BikeShare).
