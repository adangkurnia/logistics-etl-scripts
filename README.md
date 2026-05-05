# logistics-etl-scripts

## **INTRODUCTION**

A collection of Python and Google Apps Script tools designed to automate high-volume logistics data reconciliation (2,500+ daily orders), saving up to 10 hours of manual work weekly.

## OBJECTIVES
**The Challenge:** Daily 3PL and fleet reports required a lot of hours of manual effort.

**The Solution:** Scripts that handle the data preprocessing automatically.

#### **TECH STACK**

- **Languages:** Python 3.x, JavaScript (Google Apps Script).
- **Libraries:** Pandas, NumPy, pytz, openpyxl, matplotlib, seaborn
- **Platforms:** Google Colab, Google Sheets, Metabase (as a data source in CSV format).

## **WORKFLOW**

| Script Name | Function | Workflow | Output | Tech Stack |
| --- | --- | --- | --- | --- |
| [delivery_next_day_3pl.ipynb](https://github.com/adangkurnia/logistics-etl-scripts/blob/main/colab_notebooks/delivery_next_day_3pl.ipynb) | Automate data preprocessing to generate excel files based on 3PL name | ETL: CSV → Clean → Excel | Files with xlsx format | Python (Pandas, NumPy, pytz, OpenPyXl) |
| [delivery_next_day_timeslots.ipynb]([url](https://github.com/adangkurnia/logistics-etl-scripts/blob/main/colab_notebooks/delivery_next_day_timeslots.ipynb)) | Automate data preprocessing to generate Excel files based on time slots for next day delivery | ETL: CSV → Clean → Excel | Files with xlsx format | Python (pandas, numpy, pytz, openpyxl) |
| [delivery_sameday_3pl.ipynb]([url](https://github.com/adangkurnia/logistics-etl-scripts/blob/main/colab_notebooks/delivery_sameday_3pl.ipynb)) | Automate data preprocessing to generate excel files based on 3PL name for same day delivery | ETL: CSV → Clean → Excel | Files with xlsx format | Python (pandas, numpy, pytz, openpyxl) |
| [fleet_utilization_capacity_extraction.ipynb]([url](https://github.com/adangkurnia/logistics-etl-scripts/blob/main/colab_notebooks/fleet_utilization_capacity_extraction.ipynb)) | Automate data preprocessing to generate csv file | ETL: CSV → Clean → Cleaned CSV | Files with csv format | Python (pandas, numpy) |
| [fleet_utilization_middle_mile_viz.ipynb]([url](https://github.com/adangkurnia/logistics-etl-scripts/blob/main/colab_notebooks/fleet_utilization_middle_mile_viz.ipynb)) | Automate fleet capacity dashboards in Google Colab to provide visibility into Middle Mile utilization metrics. | Cleaned CSV → Data Visualization | Dashboard Viz | Python (pandas, numpy, matplotlib, seaborn) |
| [reset_attendance.js]([url](https://github.com/adangkurnia/logistics-etl-scripts/blob/main/app_script/reset_attendance.js)) | Automate the data cleaning across multiple tabs | Google Sheets Automation | Clean cells | Apps Script |

## **HOW TO USE**
### 🐍 1. Python (Data Processing & ETL)

These scripts are designed for **Google Colab.**

1. **Open:** Upload the `.ipynb` file to [Google Colab](https://colab.research.google.com/).
2. **Input:** Download raw `.csv` file sample provided in `/data_samples`).
3. **Run:** Select `Runtime > Run All` from the top menu.
4. **Output:** 
    1. 3PL reconciliation data: the cleaned and formatted `.xlsx` files will be generated and downloaded automatically.
    2. Fleets: the cleaned csv file and data visualization.

### 📝 2. Google Apps Script (Macro & Spreadsheet Automation)

These scripts are designed to run directly within **Google Sheets**.

1. **Open:** Go to your Google Sheet and select `Extensions > Apps Script`.
2. **Paste:** Copy the code from the `.gs` (or `.js`) file in this repo into the editor.
3. **Authorize:** Click the **Run** button (the triangle icon). You will need to grant permission for the script to manage your spreadsheet.
4. **Action:** Use the custom menu (e.g., "Logistics Tools") that appears in your Sheet to execute the macro.

#### **KEY ACCOMPLISHMENTS**

- **Scale:** Handled 2,500+ daily orders for last mile delivery and 75k+ monthly order records middle mile fleet utilizations.
- **Time Saved:** Up to 10 hours per week.
- **Accuracy:** 100% data integrity through automated validation logic.
