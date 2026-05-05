# logistics-etl-scripts

## **INTRODUCTION**

A collection of Python and Google Apps Script tools designed to automate high-volume logistics data reconciliation (2,000+ daily orders), saving 10+ hours of manual work weekly.

## OBJECTIVES
**The Challenge:** Daily 3PL and fleet reports required a lot of hours of manual data entry.

**The Solution:** An automated pipeline that handles the "Import → Clean → Export" workflow.

#### **TECH STACK**

- **Languages:** Python 3.x, JavaScript (Google Apps Script).
- **Libraries:** Pandas, NumPy, pytz, openpyxl, matplotlib, seaborn
- **Platforms:** Google Colab, Google Sheets, Metabase (as a data source in CSV format).

## **WORKFLOW**

| Script Name | Function | Workflow | Output | Tech Stack |
| --- | --- | --- | --- | --- |
| delivery_next_day_3pl.ipynb | Automate data preprocessing to generate excel files based on 3PL name | ETL: CSV → Clean → Excel | Files with xlsx format | Python (Pandas, NumPy, pytz, OpenPyXl) |
| delivery_next_day_timeslots.ipynb | Automate data preprocessing to generate Excel files based on time slots for next day delivery | ETL: CSV → Clean → Excel | Files with xlsx format | Python (pandas, numpy, pytz, openpyxl) |
| delivery_sameday_3pl.ipynb | Automate data preprocessing to generate excel files based on 3PL name for same day delivery | ETL: CSV → Clean → Excel | Files with xlsx format | Python (pandas, numpy, pytz, openpyxl) |
| fleet_utilization_capacity_extraction.ipynb | Automate data preprocessing to generate csv file | ETL: CSV → Clean → Cleaned CSV | Files with csv format | Python (pandas, numpy) |
| fleet_utilization_middle_mile_viz.ipynb | Automate fleet capacity dashboards in Google Colab to provide visibility into Middle Mile utilization metrics. | Cleaned CSV → Data Visualization | Dashboard Viz | Python (pandas, numpy, matplotlib, seaborn) |
| reset_attendance.js | Automate the data cleaning across multiple tabs | Google Sheets Automation | Clean cells | Apps Script |

## **HOW TO USE**

