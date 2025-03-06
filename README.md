Major-to-Career Pathways: Assessing Professional Alignment

## Problem Statement
As an incoming college freshman, I often find myself reflecting on the likelihood that individuals will pursue careers related to their field of study. To address this, I have developed this interactive analysis to provide insights into this trend, helping others gain a clearer understanding of the connections between academic majors and professional pathways.

## Dataset
- Source: Kaggle's Datasets
- Description: The data encompasses various fields of study, current occupations of the individuals, and additional factors that   may influence job satisfaction.
- Size: 30,000+ records and features 22 attributes
- Quality: n/a

## Features
1. Interactive Analysis
   - Feature 1: A user interactive menu system that allows users to choose from various analysis options for specific majors.
   - Feature 2: Users can also exit the program.

2. Data Processing
   - Feature 1: For every selected major, the program counts the total number of people who majored in the field and the number of people who are employed in a occupation related to that major.
   - Feature 2: The program then calculates and prints the percentage likelihood of sticking to the selected major.

3. Visualizations
   - Type 1: For Mechanical Engineering, a pie chart visualizes the proportion of individuals who remain in their field compared to the total number of majors.

## Program Structure
project/
├── README.md
├── main.py        # Main program with all code
└── data/          # Data directory
    └── dataset.csv# Career-Change-Analysis-in-JavaScript
