# Google_AS-Sheets-Finance-PromoArbAPR
Google Sheets Automation for calculating interest earned against arbitraging promotional APRs

## Google Apps Script Configuration

### Triggers

| Function | Event Source | Time Based Trigger ( - nn)* | Time of Day | Failure Notifications |
| -------- | ------------ | ------------------ | ----------- | --------------------- |
| interestFreezeActive | Time-driven | Day Timer | Midnight to 1am | Daily |

*\*Day of the month if `Month timer` is selected*

<sup><sub>Spreadsheet Name: `Promo APR Earned Interest Arbitrage Calc`</sup></sub>
