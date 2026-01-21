---
layout: project
title: "EDA Programming Languages"
description: "Exploratory Data Analysis of Programming Languages"
date: 2026-01-16
category: "data-analysis"
image: "assets/images/projects/programming_languages/images/code.jpg"
technologies:
  - Python
  - Jupyter Lab
  - Pandas
github: "https://github.com/luis-c2255/EDA_programming_languages/tree/main"
---

## Project Overview

![quote](/assets/images/projects/programming_languages/images/quote.svg)

Programming languages are more than tools — they are expressions of ideas, philosophies, and cultural influences that evolve over decades. This project explores that evolution by analyzing 100 programming languages across multiple dimensions: paradigms, typing systems, influence relationships, geographic origins, and historical context. Through clustering, network analysis, and visual exploration, the project uncovers the hidden structure of the programming‑language ecosystem.

The analysis reveals natural families of languages, from foundational procedural systems to modern safety‑focused designs, and from academic functional languages to domain‑specific hybrids. A directed influence network traces how core ideas propagate across generations, showing how a handful of early languages shaped the tools developers use today. Geographic patterns highlight the different innovation cultures that drive language design around the world.

By combining data science techniques with historical and conceptual insights, this notebook transforms a raw dataset into a coherent narrative about how programming languages emerge, evolve, and influence one another. It serves both as an analytical study and as a visual, story‑driven exploration of the forces that shape the software we write.

## Executive Summary

This project maps the evolution of programming languages through a multidimensional analysis that blends clustering, influence networks, paradigms, typing systems, and geographic origins. Using a curated dataset of 100 languages, the study identifies five coherent language families, each reflecting distinct historical, conceptual, and practical priorities. A directed influence graph reveals how a small set of foundational languages—such as C, Lisp, ML, Smalltalk, and Fortran—shaped the modern ecosystem, while contemporary languages like Python, Java, JavaScript, and Rust act as bridges across paradigms. Geographic patterns highlight North America’s dominance in industrial languages, Europe’s leadership in academic and functional design, and Asia’s contributions to developer‑centric ergonomics.

Together, these findings show that programming languages evolve through lineage, philosophy, and regional culture rather than randomness. The result is a structured, interpretable map of the programming‑language landscape that connects historical roots to modern design trends.

## Introduction
- Purpose of the analysis
- Overview of the dataset
- Key questions we want to answer:
    - How have programming languages evolved over time?
    - Which paradigms dominate different eras?
    - How do typing disciplines correlate with popularity?
    - What geographic and organizational patterns exist?
    - How do languages influence each other?

## Technical Implementation
** Import libraries**
```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
import plotly.express as px
import networkx as nx
import pycountry_convert as pc
```
## The Analysis
**1. Load dataset**
```python
df = pd.read_csv("C:\\Users\\lmode\\Downloads\\df_lang.csv")
df.head()
```
**1.1 Basic configuration**
```python
sns.set_theme(style="whitegrid")
plt.rcParams["figure.figsize"] = (12, 6)
```
## 2. Data Overview
**2.1 Shape and basic info**
```python
df.shape
df.info()
```
**2.2 Summary Statistics**
```python
df.describe(include='all')
```
**2.3 Missing Values**
```python
df.isna().sum()
```
## 3. Data Cleansing & Feature Engineering
**3.1 Normalize categorical fields**
```python
# clean whitespace and split into lists
df['paradigm_list'] = (
    df['primary_paradigm']
    .str.split(";")
    .apply(lambda lst: [x.strip() for x in lst])
)

# Extract primary paradigm (first in list)
df['primary_paradigm'] = df['paradigm_list'].apply(lambda x: x[0] if isinstance(x, list) else x)

# Optimal: one-hot encode paradigms
paradigm_dummies = df['paradigm_list'].explode().str.get_dummies().groupby(level=0).sum()
df = pd.concat([df, paradigm_dummies], axis=1)
```

```python
# Standardize typing discipline
# Normalize formatting
df["typing_discipline"] = (
    df["typing_discipline"]
    .str.lower()
    .str.replace(";", ",")
    .str.replace("/", ",")
    .str.replace("  ", " ")
    .str.strip()
)

# Extract static/dynamic
df["typing_time"] = df["typing_discipline"].apply(
    lambda x: "static" if "static" in x else ("dynamic" if "dynamic" in x else None)
)

# Extract strong/weak
df["typing_strength"] = df["typing_discipline"].apply(
    lambda x: "strong" if "strong" in x else ("weak" if "weak" in x else None)
)

# Capitalize for presentation
df["typing_time"] = df["typing_time"].str.title()
df["typing_strength"] = df["typing_strength"].str.title()
```

```python
# Normalize base formatting
df["country"] = df["country"].str.lower().str.strip()

# Replace common variants
country_map = {
    "usa": "United States",
    "u.s.a.": "United States",
    "us": "United States",
    "united states of america": "United States",
    "uk": "United Kingdom",
    "england": "United Kingdom",
    "russia": "Russian Federation",
    "south korea": "South Korea",
    "korea": "South Korea",
    "unknown": None,
}

df["country"] = df["country"].replace(country_map)

# Title-case final output
df["country"] = df["country"].str.title()
```
**3.2 Create new features**
```python
df["Decade"] = (df["Year"] // 10) * 10
df["Primary_Paradigm"] = df["Primary Paradigm"].str.split(";").str[0]
```
**3.3 Validate enrichment consistency**

- Check for duplicates
- Check for inconsistent categories
```python
  print("Duplicates:", df["language"].duplicated().sum())
print("\nMissing values:")
print(df.isna().sum())

print("\nCategory counts:")
for col in ["primary_paradigm", "typing_time", "typing_strength", "origin_type", "country"]:
    print(f"\n{col}:")
    print(df[col].value_counts())
```
## 4. Univariate Analysis
**4.1 Distribution of creation years**
```python
plt.figure(figsize=(10,5))
sns.histplot(df["year"], bins=20, kde=True)
plt.title("Distribution of Programming Language Creation Years")
plt.xlabel("Year")
plt.ylabel("Count")
plt.show()
```
![chart1](/assets/images/projects/programming_languages/charts/distribution_programming_lang_years.png)

**4.2 Paradigm Distribution**
```python
plt.figure(figsize=(10,5))
df["primary_paradigm"].value_counts().plot(kind="bar")
plt.title("Primary Paradigm Distribution")
plt.xlabel("Paradigm")
plt.ylabel("Count")
plt.xticks(rotation=45)
plt.show()
```
![chart2](/assets/images/projects/programming_languages/charts/primary_paradigm_distribution.png)

**4.3 Typing Discipline**
```python
fig, ax = plt.subplots(1,2, figsize=(14,5))

df["typing_time"].value_counts().plot(kind="bar", ax=ax[0])
ax[0].set_title("Typing Time (Static / Dynamic / None)")
ax[0].set_xlabel("Typing Time")
ax[0].set_ylabel("Count")

df["typing_strength"].value_counts().plot(kind="bar", ax=ax[1])
ax[1].set_title("Typing Strength (Strong / Weak / None)")
ax[1].set_xlabel("Typing Strength")
ax[1].set_ylabel("Count")

plt.tight_layout()
plt.show()
```
![chart3](/assets/images/projects/programming_languages/charts/typing_type_strength.png)

**4.4 Origin Type**
```python
plt.figure(figsize=(8,5))
df["origin_type"].value_counts().plot(kind="bar")
plt.title("Origin Type Distribution")
plt.xlabel("Origin Type")
plt.ylabel("Count")
plt.xticks(rotation=45)
plt.show()
```
![chart4](/assets/images/projects/programming_languages/charts/origin_type_distribution.png)

**4.5 Country**
```python
plt.figure(figsize=(12,5))
df["country"].value_counts().plot(kind="bar")
plt.title("Country of Origin Distribution")
plt.xlabel("Country")
plt.ylabel("Count")
plt.xticks(rotation=45)
plt.show()
```
![chart5](/assets/images/projects/programming_languages/charts/country_origin_distribution.png)

**4.6 Popularity**
```python
plt.figure(figsize=(10,5))
sns.histplot(df[df["popularity"] > 0]["popularity"], bins=20, kde=True)
plt.title("Popularity Distribution (Excluding Zero Scores)")
plt.xlabel("Popularity Score")
plt.ylabel("Count")
plt.show()
```
![chart6](/assets/images/projects/programming_languages/charts/popularity_distribution.png)

**4.7 Age Distribution**
```python
plt.figure(figsize=(10,5))
sns.histplot(df["age"], bins=20, kde=True)
plt.title("Age Distribution of Programming Languages")
plt.xlabel("Age (Years)")
plt.ylabel("Count")
plt.show()
```
![chart7](/assets/images/projects/programming_languages/charts/age_language_distribution.png)

## 5. BIVARIATE ANALYSIS

**5.1 Paradigm vs Decade**
```python
plt.figure(figsize=(12,6))
sns.countplot(data=df, x="decade", hue="primary_paradigm")
plt.title("Paradigm Distribution Across Decades")
plt.xlabel("Decade")
plt.ylabel("Count")
plt.xticks(rotation=45)
plt.legend(title="Paradigm", bbox_to_anchor=(1.05, 1), loc="upper left")
plt.show()
```
![chart8](/assets/images/projects/programming_languages/charts/paradigm_distribution_across_decades.png)

**5.2 Typing Time vs Decade**
```python
plt.figure(figsize=(12,6))
sns.countplot(data=df, x="decade", hue="typing_time")
plt.title("Typing Time Across Decades")
plt.xlabel("Decade")
plt.ylabel("Count")
plt.xticks(rotation=45)
plt.legend(title="Typing Time", bbox_to_anchor=(1.05, 1), loc="upper left")
plt.show()
```
![chart9](/assets/images/projects/programming_languages/charts/typing_time_decades.png)

**5.3 Origin Type vs Paradigm**
```python
plt.figure(figsize=(12,6))
sns.countplot(data=df, x="primary_paradigm", hue="origin_type")
plt.title("Origin Type by Paradigm")
plt.xlabel("Primary Paradigm")
plt.ylabel("Count")
plt.xticks(rotation=45)
plt.legend(title="Origin Type", bbox_to_anchor=(1.05, 1), loc="upper left")
plt.show()
```
![chart10](/assets/images/projects/programming_languages/charts/origin_type_paradigm.png)

**5.4 Popularity vs Age**
```python
plt.figure(figsize=(10,6))
sns.scatterplot(data=df, x="age", y="popularity", hue="primary_paradigm", s=80)
plt.title("Popularity vs Age of Programming Languages")
plt.xlabel("Age (Years)")
plt.ylabel("Popularity Score")
plt.show()
```
![chart11](/assets/images/projects/programming_languages/charts/popularity_vs_age.png)

**5.5 Popularity vs Paradigm**
```python
plt.figure(figsize=(12,6))
sns.boxplot(data=df[df["popularity"] > 0], x="primary_paradigm", y="popularity")
plt.title("Popularity Distribution by Paradigm (Excluding Zero Scores)")
plt.xlabel("Primary Paradigm")
plt.ylabel("Popularity Score")
plt.xticks(rotation=45)
plt.show()
```
![chart12](/assets/images/projects/programming_languages/charts/popularity_distribution_paradigm.png)

**5.6 Country vs Paradigm (Top Countries Only)**
```python
top_countries = df["country"].value_counts().head(8).index

plt.figure(figsize=(12,6))
sns.countplot(data=df[df["country"].isin(top_countries)], 
              x="country", hue="primary_paradigm")
plt.title("Paradigm Distribution by Country (Top 8 Countries)")
plt.xlabel("Country")
plt.ylabel("Count")
plt.xticks(rotation=45)
plt.legend(title="Paradigm", bbox_to_anchor=(1.05, 1), loc="upper left")
plt.show()
```
![chart13](/assets/images/projects/programming_languages/charts/paradigm_distribution_country.png)

## 6. MULTIVARIATE ANALYSIS

**6.1 Feature Selection & Encoding**
```python
from sklearn.preprocessing import OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.decomposition import PCA
from sklearn.cluster import KMeans

# Features chosen for multivariate analysis
features = [
    "age",
    "popularity",
    "paradigm_family",
    "typing_category",
    "origin_category",
    "continent",
    "paradigm_count",
    "influence_count",
    "extension_count",
    "modernity_score",
    "complexity_score"
]

X = df[features]
```
**6.2 Encoding + Scaling Pipeline**
```python
numeric_features = [
    "age", "popularity", "paradigm_count", "influence_count",
    "extension_count", "modernity_score", "complexity_score"
]

categorical_features = [
    "paradigm_family", "typing_category", "origin_category", "continent"
]

preprocess = ColumnTransformer(
    transformers=[
        ("num", StandardScaler(), numeric_features),
        ("cat", OneHotEncoder(handle_unknown="ignore"), categorical_features)
    ]
)
```
**6.3 PCA (2D)**
```python
pca = PCA(n_components=2)

pipeline = Pipeline(steps=[
    ("preprocess", preprocess),
    ("pca", pca)
])

X_pca = pipeline.fit_transform(X)

df["pca1"] = X_pca[:, 0]
df["pca2"] = X_pca[:, 1]

plt.figure(figsize=(10,7))
sns.scatterplot(data=df, x="pca1", y="pca2", hue="primary_paradigm", s=80)
plt.title("PCA Projection of Programming Languages")
plt.xlabel("PCA 1")
plt.ylabel("PCA 2")
plt.legend(bbox_to_anchor=(1.05, 1), loc="upper left")
plt.show()

print("Explained variance ratio:", pca.explained_variance_ratio_)
```
![chart14](/assets/images/projects/programming_languages/charts/pca_projection_languages.png)

**6.4 K-Means Clustering**
```python
kmeans = KMeans(n_clusters=5, random_state=42)

pipeline_kmeans = Pipeline(steps=[
    ("preprocess", preprocess),
    ("kmeans", kmeans)
])

df["cluster"] = pipeline_kmeans.fit_predict(X)
```
**6.5 Visualize Clusters in PCA Space**
```python
plt.figure(figsize=(10,7))
sns.scatterplot(data=df, x="pca1", y="pca2", hue="cluster", palette="tab10", s=80)
plt.title("K-Means Clusters in PCA Space")
plt.xlabel("PCA 1")
plt.ylabel("PCA 2")
plt.legend(title="Cluster", bbox_to_anchor=(1.05, 1), loc="upper left")
plt.show()
```
![chart15](/assets/images/projects/programming_languages/charts/k_means_clusters_pca.png)

**6.6 Cluster Profiling**

```python
cluster_profile = df.groupby("cluster")[
    ["age", "popularity", "paradigm_count", "influence_count",
     "extension_count", "modernity_score", "complexity_score"]
].mean()

display(cluster_profile)

cluster_cats = df.groupby("cluster")[
    ["primary_paradigm", "typing_category", "origin_category", "continent"]
].agg(lambda x: x.value_counts().index[0])

display(cluster_cats)
```
**6.7 Paradigm Distribution by Cluster**

```python
plt.figure(figsize=(12,6))
sns.countplot(data=df, x="cluster_name", hue="primary_paradigm")
plt.title("Paradigm Distribution by Cluster")
plt.xticks(rotation=45)
plt.show()
```
![chart15](/assets/images/projects/programming_languages/charts/paradigm_distrib_cluster.png)

**6.8 Typing Category by Cluster**

```python
plt.figure(figsize=(12,6))
sns.countplot(data=df, x="cluster_name", hue="typing_category")
plt.title("Typing Category by Cluster")
plt.xticks(rotation=45)
plt.show()
```
![chart16](/assets/images/projects/programming_languages/charts/Typing_Category_by_Cluster.png)

**6.9 Origin Type by Cluster**
```python
plt.figure(figsize=(12,6))
sns.countplot(data=df, x="cluster_name", hue="origin_category")
plt.title("Origin Type by Cluster")
plt.xticks(rotation=45)
plt.show()
```
![chart16](/assets/images/projects/programming_languages/charts/Origin_Type_by_Cluster.png)

**6.10 Continent Distribution by Cluster**
```python
plt.figure(figsize=(12,6))
sns.countplot(data=df, x="cluster_name", hue="continent")
plt.title("Continent Distribution by Cluster")
plt.xticks(rotation=45)
plt.show()
```
![chart17](/assets/images/projects/programming_languages/charts/Continent_Distribution_by_Cluster.png)

### Cluster 1 - Enterprise OOP (Static Strong)

- Languages: Java, C#, Swift, Kotlin, TypeScript
- Corporate origins
- North American dominance
- High popularity
- Strong static typing
- Modern ecosystems

This is the 'industry backbone' cluster.

![icon1](/assets/images/projects/programming_languages/icons/devicon-java.svg) ![icon3](/assets/images/projects/programming_languages/icons/skill-icons-cs.svg) ![icon4](/assets/images/projects/programming_languages/icons/skill-icons-kotlin-dark.svg) ![icon2](/assets/images/projects/programming_languages/icons/skill-icons-swift.svg) ![icon2](/assets/images/projects/programming_languages/icons/skill-icons-typescript.svg)

### Cluster 2 - Modern Corporate OOP

- Languages: Go, Rust, Dart, Carbon
- Corporate + individual mix
- Strong emphasis on safety and performance
- High modernity scores
- Growing popularity

This is the “next‑generation systems & app languages” cluster.

![icon1](/assets/images/projects/programming_languages/icons/skill-icons-golang1.svg) ![icon3](/assets/images/projects/programming_languages/icons/skill-icons-dart-dark.svg) ![icon4](/assets/images/projects/programming_languages/icons/CarbonCopyCloner_30254.png) ![icon2](/assets/images/projects/programming_languages/icons/skill-icons_rust.svg)

### Cluster 4 - Academic Declarative / Functional

- Languages: Haskell, Prolog, OCaml, Erlang
- European academic roots
- High complexity
- Low popularity but high influence
- Declarative and functional paradigms

This is the “research and theory” cluster.

![icon1](/assets/images/projects/programming_languages/icons/devicon-erlang.svg) ![icon3](/assets/images/projects/programming_languages/icons/devicon-prolog.svg) ![icon4](/assets/images/projects/programming_languages/icons/material-icon-theme-ocaml.svg) ![icon2](/assets/images/projects/programming_languages/icons/skill-icons-haskell-dark.svg)

### Cluster 0 — Legacy / Low‑Typing Procedural

- Languages: C, Fortran, COBOL, Pascal
- Oldest languages
- Low modernity
- Low popularity per year
- Weak or no typing semantics

This is the “foundations of computing” cluster.

![icon1](/assets/images/projects/programming_languages/icons/material-icon-theme-cobol.svg) ![icon3](/assets/images/projects/programming_languages/icons/material-icon-theme-pascal.svg) ![icon4](/assets/images/projects/programming_languages/icons/skill-icons-c.svg) ![icon2](/assets/images/projects/programming_languages/icons/vscode-icons-file-type-fortran.svg)

### Cluster 3 - DSL/Markup/Visual/Hybrid

- Languages: HTML, CSS, SQL, Markdown, Scratch
- No typing system
- Mixed or unknown origins
- Zero popularity score (not tracked)
- Not tradicitional programming languages

This is the 'non-Turing-complete/domain-specific' cluster

![icon1](/assets/images/projects/programming_languages/icons/devicon-html5-wordmark.svg) ![icon3](/assets/images/projects/programming_languages/icons/devicon-css3-wordmark.svg) ![icon4](/assets/images/projects/programming_languages/icons/devicon-sqlite-wordmark.svg) ![icon5](/assets/images/projects/programming_languages/icons/skill-icons-markdown-dark.svg) ![icon2](/assets/images/projects/programming_languages/icons/file-icons-scratch.svg)

## 7. INFLUENCE NETWORK

**7.1 Influence graph**
```python
import networkx as nx
import matplotlib.pyplot as plt

# ---------------------------------------
# 1. Build graph safely (sanitize nodes)
# ---------------------------------------
G = nx.DiGraph()

for lang in df["language"]:
    G.add_node(str(lang))

for _, row in df.iterrows():
    influenced_by = row["influenced_by"]
    if isinstance(influenced_by, list):
        for source in influenced_by:
            if isinstance(source, str) and source in df["language"].values:
                G.add_edge(str(source), str(row["language"]))

# ---------------------------------------
# 2. Filter influential languages
# ---------------------------------------
influential_langs = df[df["out_degree"] >= 2]["language"].tolist()
G_sub = G.subgraph(influential_langs) if influential_langs else G

# ---------------------------------------
# 3. Color nodes by paradigm
# ---------------------------------------
paradigm_colors = {
    "Object-Oriented": "royalblue",
    "Functional": "seagreen",
    "Procedural": "darkorange",
    "Declarative": "purple",
    "Scripting": "gold",
    "Visual": "pink",
    "Unknown": "gray"
}

node_colors = []
for node in G_sub.nodes():
    paradigm = df.loc[df["language"] == node, "primary_paradigm"].values
    color = paradigm_colors.get(paradigm[0], "gray") if len(paradigm) else "gray"
    node_colors.append(color)

# ---------------------------------------
# 4. Size nodes by out-degree
# ---------------------------------------
node_sizes = []
for node in G_sub.nodes():
    out_deg = df.loc[df["language"] == node, "out_degree"].values
    size = out_deg[0] * 300 + 200 if len(out_deg) else 200
    node_sizes.append(size)

# ---------------------------------------
# 5. Layout (Graphviz if available)
# ---------------------------------------
try:
    pos = nx.nx_agraph.graphviz_layout(G_sub, prog="dot")
except:
    pos = nx.spring_layout(G_sub, k=0.4, seed=42)

# ---------------------------------------
# 6. Draw graph
# ---------------------------------------
plt.figure(figsize=(14, 12))

nx.draw_networkx_nodes(G_sub, pos, node_color=node_colors, node_size=node_sizes, alpha=0.9)
nx.draw_networkx_edges(G_sub, pos, arrows=True, arrowstyle="-|>", alpha=0.25)

# Label only influential nodes
labels = {
    node: node for node in G_sub.nodes()
    if df.loc[df["language"] == node, "out_degree"].values[0] >= 4
}

nx.draw_networkx_labels(G_sub, pos, labels=labels, font_size=9, font_weight="bold")


plt.title("Clean Influence Network (Filtered, Colored, Sized, Hierarchical)")
plt.axis("off")
plt.show()
```
![chart](/assets/images/projects/programming_languages/charts/clean_influence_network.png)

**7.2 Compute centrality metrics**

```python
degree_centrality = nx.degree_centrality(G)
in_degree = dict(G.in_degree())
out_degree = dict(G.out_degree())
betweenness = nx.betweenness_centrality(G)
pagerank = nx.pagerank(G)

df["in_degree"] = df["language"].map(in_degree)
df["out_degree"] = df["language"].map(out_degree)
df["betweenness"] = df["language"].map(betweenness)
df["pagerank"] = df["language"].map(pagerank)
```
**7.3 Identify Roots, Hubs, and Bridges**

**Most influential (highest out-degree)**
```python
df.nlargest(10, "out_degree")[["language", "out_degree"]]
```

**Most influenced (highest in-degree)**
```python
df.nlargest(10, "in_degree")[["language", "in_degree"]]
```
**Roots of the Ecosystem Languages with the highest outgoing influence:**

- C
- Lisp
- ML
- Smalltalk
- Fortran

These languages form the foundational pillars of modern programming.

**Bridges (highest betweenness)**
```python
df.nlargest(10, "betweenness")[["language", "betweenness"]]
```

**Bridges Between Paradigms High betweenness languages:** 

- Python (glues scripting, OOP, functional)
- Scala (bridges OOP and functional)
- TypeScript (bridges JS and typed OOP)
- Go (bridges systems and high-level languages)

These languages connect otherwise separate communities.

**Ecosystem importance (PageRank)**
```python
df.nlargest(10, "pagerank")[["language", "pagerank"]]
```

**Hubs of Modern Development Languages with high PageRank:**
- Python
- Java
- C++
- JavaScript
- Rust

These languages sit at the center of today’s ecosystem.

**7.4 Influence Communities**

```python
communities = list(nx.connected_components(G.to_undirected()))
communities[:5]  # show first 5 communities
```
**Academic Influence Clusters**

- Functional and declarative families:
  - Lisp → Scheme → Clojure
  - ML → OCaml → Haskell
  - Prolog → Mercury

These clusters show how academia shaped modern language design.

- Corporate Influence Chains
  - C → C++ → Java → C# → Swift
  - JavaScript → TypeScript
  - Go → Rust → Carbon

These chains reflect industry-driven evolution.

## 8. Insights

**8.1 The Landscape of Programming Languages**

The dataset reveals a rich, multi‑decade evolution of programming languages shaped by academic research, corporate innovation, and community experimentation. 
Despite their diversity, clear structural patterns emerge:

- **Five distinct clusters** capture the ecosystem’s architecture
- **Influence networks** show how ideas propagate
- **Geography** highlights regional innovation cultures
- **Paradigms and typing systems** reveal philosophical divides

Together, these dimensions form a coherent map of how programming languages evolve.

**8.2 Cluster Narratives**

**Cluster 1 — Enterprise OOP (Static Strong)**

This cluster represents the industrial backbone of modern software engineering.
Languages like **Java, C#, Swift, Kotlin, TypeScript** dominate corporate ecosystems, emphasizing:

- reliability
- tooling
- strong typing
- large-scale maintainability

They are the “workhorses” of enterprise development.
---
**Cluster 2 — Modern Corporate OOP / Systems**

This group includes **Go, Rust, Dart, Carbon** — languages designed for:

- performance
- safety
- concurrency
- modern deployment environments

They reflect a shift toward memory safety, parallelism, and cloud-native design.
---
**Cluster 4 — Academic Declarative / Functional**

Languages like **Haskell, OCaml, Prolog, Erlang** embody decades of research in:

- type theory
- logic programming
- functional purity
- concurrency models

Though niche in industry, they are hugely influential in language design.
---
**Cluster 0 — Legacy / Low‑Typing Procedural**

This cluster includes **C, Fortran, COBOL, Pascal** — the foundations of computing.
They shaped:

- compilers
- operating systems
- early software engineering

Their influence is massive, even if their popularity has declined.
--
**Cluster 3 — DSL / Markup / Visual / Hybrid**

This group contains **HTML, CSS, SQL, Markdown, Scratch** — languages that:

- are not Turing-complete
- have no typing system
- serve domain-specific purposes

They are essential to modern development despite not fitting traditional paradigms.

**8.3 Influence Network Insights**

The influence graph reveals a small set of root languages that shaped the entire ecosystem:

- **C** → the dominant ancestor of modern systems and OOP languages
- **Lisp** → the root of functional and metaprogramming ideas
- **ML** → the foundation of modern type systems
- **Smalltalk** → the origin of object-oriented purity
- **Fortran** → the earliest scientific computing lineage

These languages act as idea generators, with influence radiating outward across decades.

Modern hubs like **Python, Java, JavaScript, Rust** serve as bridges between paradigms, connecting communities that would otherwise remain isolated.

**8.4 Geographic Patterns**

A clear geographic divide emerges:

**North America**
- Dominates OOP and corporate languages
- Produces the most influential languages
- Strong ties to industry and large-scale software engineering

**Europe**
- Leads in functional and academic languages
- Strong tradition in type theory, logic, and formal methods

**Asia**
- Produces fewer languages but highly distinctive ones (e.g., Ruby)
- Emphasizes simplicity and developer ergonomics

These patterns reflect cultural and institutional differences in how regions approach software design.

**8.5 Paradigms & Typing Philosophies**

The dataset shows a long-running tension between:

**Static vs Dynamic typing**
- Static typing dominates corporate and academic languages
- Dynamic typing thrives in scripting and rapid prototyping

**OOP vs Functional**
- OOP remains dominant in industry
- Functional ideas quietly power modern language design (Rust, Scala, TypeScript)

**Declarative vs Imperative**
- Declarative languages remain niche but influential
- SQL and HTML are the backbone of the web despite not being “programming languages” in the traditional sense

**8.6 Popularity vs Influence**

A key insight emerges:

**Popularity and influence are not the same.**

- C is extremely influential but not the most popular today
- Haskell is highly influential but niche
- Python is both influential and popular
- HTML/CSS/SQL are extremely popular but not influential in language design

This distinction helps explain why some languages matter historically even if they are not widely used.

**8.7 The Evolutionary Story**

Putting everything together, the evolution of programming languages follows a clear arc:

1. **Foundational procedural languages** establish the core abstractions
2. **Object-oriented languages** dominate the rise of software engineering
3. **Functional and declarative** languages push theoretical boundaries
4. **Modern systems languages** merge safety, performance, and ergonomics
5. **Domain-specific languages** proliferate as ecosystems mature

The ecosystem is not chaotic — it’s a **tree of ideas**, with each generation building on the last.

**8.8 Final Takeaways**

- Programming languages evolve through influence, not isolation
- A few root languages shape the entire ecosystem
- Paradigms reflect philosophical differences in how we think about computation
- Geography influences design priorities
- Popularity does not equal influence
- Clustering reveals natural families of languages
- The influence network shows how ideas propagate across decades

## CONCLUSION

This project set out to explore the programming‑language ecosystem through a multidimensional lens — combining clustering, influence networks, paradigms, typing systems, and geographic origins. What emerged is a coherent, interpretable map of how languages evolve, how ideas propagate, and how regional and philosophical traditions shape the tools developers use today.

The clustering analysis revealed five distinct families of languages, each representing a different evolutionary path: foundational procedural systems, enterprise object‑oriented workhorses, modern safety‑focused corporate languages, academically driven functional and declarative designs, and domain‑specific or hybrid languages that sit outside traditional paradigms. These clusters are not arbitrary; they reflect real historical and conceptual divides in how programming problems are approached.

The influence network added a temporal and conceptual dimension to this structure. A small set of root languages — C, Lisp, ML, Smalltalk, and Fortran — act as the intellectual ancestors of most modern languages. Their ideas radiate outward across decades, shaping everything from type systems to concurrency models to object‑oriented design. Modern languages like Python, Java, JavaScript, and Rust serve as bridges, connecting different paradigms and communities. This network makes it clear that programming languages do not emerge in isolation; they are part of a continuous lineage of experimentation, refinement, and reinvention.

Geographic analysis highlighted the cultural and institutional forces behind language design. North America dominates industrial and object‑oriented languages, Europe leads in functional and academic innovation, and Asia contributes distinctive, ergonomics‑focused languages. These regional patterns mirror broader differences in research traditions, industry priorities, and educational philosophies.

Taken together, these findings show that the programming‑language landscape is not chaotic but deeply structured. It evolves through a combination of historical inheritance, academic research, corporate engineering needs, and community creativity. Popularity and influence often diverge, and the most impactful ideas frequently originate in small, specialized languages before spreading into mainstream tools.

Ultimately, this project demonstrates that programming languages form an ecosystem — one shaped by lineage, geography, paradigm, and purpose. Understanding this ecosystem helps us appreciate not only where our tools come from, but also how future languages may emerge, evolve, and influence the next generation of developers.

# APPENDIX
- [Jupyter Notebook](/assets/images/projects/programming_languages/charts/Lang.ipynb)
- [Original_dataset](https://www.kaggle.com/datasets/hammadfarooq470/worlds-most-influential-programming-languages)
- [Enhanced_dataset](/assets/images/projects/programming_languages/images/df_lang.csv)

---

**Want to learn more about this project?** Feel free to [reach out](/contact) or check out the [code on GitHub](https://github.com/luis-c2255/EDA_programming_languages).
