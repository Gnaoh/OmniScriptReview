"use strict";

/* Controllers */

var bpModule = angular.module("omniScriptReview", ['ui.bootstrap']);

bpModule.directive("transformSupplemental", function($timeout) {
    function link(scope, element, attrs) {
        
    }
    return {
        restrict: 'AE',
        link: link
    };
});
// From http://www.bennadel.com/blog/2421-creating-angularjs-controllers-with-instance-methods.htm
function baseCtrl($scope) {
    $scope.bpTree = {
        "skipElements": [
            "ContextId",
            "timeStamp",
            "userName",
            "userProfile",
            "vlcPersistentComponent",
            "plan",
            "error",
            "QuoteEnroll"
        ]
    };
    $scope.medicare_supplemental = {
        "ContextId": "",
        "timeStamp": "2015-08-06T23:07:16.225Z",
        "userName": "jbridges@vlocity.com.dev",
        "userProfile": "System Administrator",
        "Enrollee Info": {
            "Important Msg to Reps": null,
            "Applicant First Name": "Jonathan",
            "Middle Initial": "E",
            "Applicant Last Name": "Bridges",
            "Suffix": "Senior",
            "Date of Birth": "1970-12-24T06:00:00.000Z",
            "Age": 44,
            "Zip Code": "01012",
            "Sales_rep_code": null,
            "Effective Date Block": null,
            "Effective Date": "9/1/2015"
        },
        "Enrollment Reason_Mass": {
            "Reason for Enrollment_Mass": "Open Enrollment",
            "Part B Eff Date- Mass": "2015-08-06T05:00:00.000Z"
        },
        "Enrollment Reason_NH": {
            "Enrollment Reason - NH": "Initial Open Enrollment",
            "Part B Eff Date- NH": null,
            "DOB - NH": null,
            "Date Disenrollment - NH": null,
            "Date Disenrollment 2 -NH": null,
            "Current Plan - NH": null
        },
        "Enrollment Reason - ME": null,
        "Continuous Enrollment": {
            "Questionaire Block": null,
            "Height": "6'1",
            "Weight": "310",
            "Nursing Home": "Yes",
            "Bedridden": "Yes",
            "Wheelchair": "Yes",
            "Kidney Dialysis": "Yes",
            "Disability": "Yes",
            "Surgery": "Yes",
            "Hospitalized": "No",
            "Routine Visits": "Yes",
            "Conditions": "Cancer;Chronic Lung Disease"
        },
        "Display Medicare Plans": {
            "Msg to Applicant": null
        },
        "Begin Enrollment Process": null,
        "Subscriber_Information": null,
        "Medicare Info": null,
        "Enrollment Form Continued": null,
        "Final_enrollment_steps": null,
        "vlcPersistentComponent": {

        },
        "State": "MA",
        "plan": [{
            "productcode": "MDCRSCMA",
            "name": "Medicare Supplemental Core Plan",
            "features": [{
                "name": "Annual Wellness Exam",
                "value": "$0"
            }, {
                "name": "Diagnostic Procedures, Tests and Lab Services",
                "value": "• $0 After Part B Deductible"
            }, {
                "name": "Emergency Care Nationwide and In a Foreign Country",
                "value": "$0"
            }, {
                "name": "Emergency Room Care",
                "value": "• $0 After Part B Deductible"
            }, {
                "name": "Fitness Reimbursement",
                "value": "Up to $150 reimbursement for health club membership annually"
            }, {
                "name": "Inpatient Hospital Coverage",
                "value": "• Days 1-60: $1,260 Part A Deductible • Days 61-90: $0"
            }, {
                "name": "Outpatient Service / Surgery",
                "value": "• $0 After Part B Deductible"
            }, {
                "name": "Preventive Care Services - As covered by Medicare",
                "value": "$0"
            }, {
                "name": "Primary Care and Specialist Visits",
                "value": "• $0 After Part B Deductible"
            }, {
                "name": "Skilled Nursing Facility",
                "value": "• Days 1-20: $0 • Days 21-100: $157.50 per day coinsurance"
            }]
        }, {
            "productcode": "MDCRS1MA",
            "name": "Medicare Supplement 1 Plan",
            "features": [{
                "name": "Annual Wellness Exam",
                "value": "$0"
            }, {
                "name": "Diagnostic Procedures, Tests and Lab Services",
                "value": "$0"
            }, {
                "name": "Emergency Care Nationwide and In a Foreign Country",
                "value": "$0"
            }, {
                "name": "Emergency Room Care",
                "value": "$0"
            }, {
                "name": "Fitness Reimbursement",
                "value": "Up to $150 reimbursement for health club membership annually"
            }, {
                "name": "Inpatient Hospital Coverage",
                "value": "$0"
            }, {
                "name": "Outpatient Service / Surgery",
                "value": "$0"
            }, {
                "name": "Preventive Care Services - As covered by Medicare",
                "value": "$0"
            }, {
                "name": "Primary Care and Specialist Visits",
                "value": "$0"
            }, {
                "name": "Skilled Nursing Facility",
                "value": "$0"
            }]
        }]
    };

    $scope.medicare_advantage = {
        "ContextId": "",
        "timeStamp": "2015-08-06T23:10:29.078Z",
        "userName": "jbridges@vlocity.com.dev",
        "userProfile": "System Administrator",
        "Enrollee Info": {
            "Ei_tb": null,
            "Year": "2015-08-05T05:00:00.000Z",
            "State": "ME",
            "County_1": "York"
        },
        "Plan Selection": null,
        "Basic_Info": {
            "Contact_Information": {
                "First Name": "Jonathan",
                "Middle Initial": "E",
                "Last Name": "Bridges",
                "Gender": "Female",
                "Birth_Date": "1945-12-24T06:00:00.000Z",
                "Home_Phone": "2323232323",
                "Alt_phone": "2323232323",
                "Email": "jbridges@aol.com"
            },
            "Communication Preferences": {
                "Phone_contact": "Yes",
                "Conf_email": "Yes"
            }
        },
        "Enrollee_Information_2": {
            "Perm_residence_info": {
                "Street_add_1": "123 Sample Way",
                "Street_add_2": "Apartment 108B",
                "Zipcode": "01012",
                "filler_blk_1": null,
                "City": null,
                "State_2": null,
                "County_2": null
            },
            "Mailing_add": {
                "Mailing_perm": "Yes"
            }
        },
        "Medicare_info": {
            "Medicare_claim_no": "x123123",
            "Part_a_date": "2015-08-02T05:00:00.000Z",
            "Part_b_date": "2015-07-29T05:00:00.000Z",
            "Alt_format_block": {
                "Alt_format": "None"
            }
        },
        "Eligibility_info_2": {
            "Text_block_1": null,
            "Checkbox_1": true,
            "Checkbox_2": true,
            "Text_2": "sdsdsd",
            "Checkbox_3": true,
            "Checkbox_4": true,
            "Checkbox_5": true,
            "Checkbox_6": true,
            "Text_6": "sdsdsd",
            "Checkbox_7": true,
            "Text_7": null,
            "Checkbox_8": true,
            "Text_8": "sdsdsd",
            "Checkbox_9": true,
            "Text_9": "sdsdsd",
            "Checkbox_10": true,
            "Text_10": "sdsdsd",
            "Checkbox_11": true,
            "Checkbox_12": true,
            "Text_12": "sdsdsd",
            "Checkbox_13": true,
            "Checkbox_14": true,
            "Text_Block_3": null,
            "Enroll_period_info": {
                "Coverage_date": null,
                "Effective_date": "2015-07-29T05:00:00.000Z"
            }
        },
        "Addl_health": {
            "ah_tb_1": null,
            "ah_rb_1": "Yes",
            "ah_rb_1.1": "No",
            "ah_tb_2": null,
            "ah_tb_3": null,
            "ah_rb_2": "Yes",
            "ah_txt_2": "sdsdsd",
            "ah_rb_3": "Yes",
            "ah_txt_3": "sdsdsd",
            "ah_rb_4": "Yes",
            "ah_txt_4": "sdsdsd",
            "ah_rb_5": "Yes",
            "Pcp_block": null
        },
        "Prem_payment": {
            "Prem_payment_blk": null,
            "billing_method": "Send Bill",
            "billing_disclosure": null
        },
        "application_assistance": {
            "app_assistance_blk": null,
            "app_assistance_rb": "Sales Rep or Agent",
            "Sales_Rep": "sdsdsd",
            "Agent_Code": "sdsdsd",
            "legal_rep_disc": null
        },
        "Submit": {
            "Text Block 13": null,
            "Text Block 15": null,
            "Text Block 14": null,
            "Agree_to_terms": false
        },
        "vlcPersistentComponent": {},
        "error": "OK"
    };

    $scope.individual = {
        "ContextId": "00655000002RUmG",
        "timeStamp": "2015-08-18T20:54:53.183Z",
        "userName": "gpardo@vlocity.com.dev",
        "userProfile": "System Administrator",
        "vlcPersistentComponent": {},
        "MinInfo": {
            "MinDOB": "1970-01-20T08:00:00.000Z",
            "RequestedCoverageEffectiveDate": "9/5/2015",
            "MinZipCode": "04053",
            "MinState": "ME",
            "MinTobaccoUse": "Yes",
            "DependentCoverage": "No",
            "MinAge": 45
        },
        "error": "OK",
        "plan": [{
            "ProductId": "01t55000000FIkQAAW",
            "name": "Gold HMO 1000",
            "productcode": "96667ME0240002",
            "MarketSegment": "Individual",
            "ProductType": "HMO",
            "LevelCoverage": "Gold",
            "Emgny&UrgMedCare": [{
                "name": "Emergency Room Services",
                "description": "OutofNetwork: $250 Copay after deductible,",
                "value": "InNetwork: $250 Copay after deductible,",
                "categoryName": "Emergency Medical Care",
                "dataType": "Text"
            }, {
                "name": "Emergency Transportation/Ambulance",
                "description": "OutofNetwork: 20% Coinsurance after deductible",
                "value": "InNetwork: 20% Coinsurance after deductible",
                "categoryName": "Emergency Medical Care",
                "dataType": "Text"
            }],
            "Inpatient": [{
                "description": "OutofNetwork: Coinsurance=100%",
                "categoryName": "Inpatient",
                "value": "InNetwork: 20% Coinsurance after deductible",
                "name": "Inpatient Hospital Services (e.g., Hospi",
                "dataType": "Text"
            }, {
                "description": "OutofNetwork: Coinsurance=100%",
                "categoryName": "Inpatient",
                "value": "InNetwork: 20% Coinsurance after deductible",
                "name": "Inpatient Physician and Surgical Service",
                "dataType": "Text"
            }, {
                "description": "OutofNetwork: Coinsurance=100%",
                "categoryName": "Inpatient",
                "value": "InNetwork: 20% Coinsurance after deductible",
                "name": "Delivery and All Inpatient Services for",
                "dataType": "Text"
            }, {
                "description": "OutofNetwork: Coinsurance=100%",
                "categoryName": "Inpatient",
                "value": "InNetwork: 20% Coinsurance after deductible",
                "name": "Skilled Nursing Facility",
                "dataType": "Text"
            }],
            "OfficeVisit": [{
                "description": "OutofNetwork: Coinsurance=100%",
                "dataType": "Text",
                "categoryName": "Office Visit",
                "name": "Primary Care Visit to Treat an Injury or",
                "value": "InNetwork: Copay=$30,"
            }, {
                "description": "OutofNetwork: Coinsurance=100%",
                "dataType": "Text",
                "categoryName": "Office Visit",
                "name": "Specialist Visit",
                "value": "InNetwork: Copay=$75,"
            }, {
                "description": "OutofNetwork: Coinsurance=100%",
                "dataType": "Text",
                "categoryName": "Office Visit",
                "name": "Urgent Care Centers or Facilities",
                "value": "InNetwork: Copay=$75,"
            }],
            "maxoop": [{
                "categoryName": "Maximum Out of Pocket Expenses",
                "name": "Maximum Out of Pocket for Drug EHB Benef",
                "dataType": "Text"
            }, {
                "categoryName": "Maximum Out of Pocket Expenses",
                "value": "InNetwork: Family=$4300 per person | $8600 per group, Individual=$4,300",
                "description": "OutofNetwork: Family=$4300 per person | $8600 per group, Individual=$4300 per person | $8600 per group",
                "name": "Maximum Out of Pocket for Medical and Dr",
                "dataType": "Text"
            }, {
                "categoryName": "Maximum Out of Pocket Expenses",
                "name": "Maximum Out of Pocket for Medical EHB Be",
                "dataType": "Text"
            }],
            "deductible": [{
                "dataType": "Text",
                "value": "InNetwork: Family=$1000 per person | $2000 per group, Individual=$1,000",
                "name": "Combined Medical and Drug EHB Deductible",
                "categoryName": "Deductible",
                "description": "OutofNetwork: Family=$1000 per person | $2000 per group, Individual=$1000 per person | $2000 per group"
            }, {
                "dataType": "Text",
                "name": "Drug EHB Deductible",
                "categoryName": "Deductible"
            }, {
                "dataType": "Text",
                "name": "Medical EHB Deductible",
                "categoryName": "Deductible"
            }]
        }, {
            "ProductId": "01t55000000FIkRAAW",
            "name": "Silver HMO",
            "productcode": "96667ME0240003",
            "MarketSegment": "Individual",
            "ProductType": "HMO",
            "LevelCoverage": "Silver",
            "Emgny&UrgMedCare": [{
                "name": "Emergency Room Services",
                "description": "OutofNetwork: $500 Copay after deductible,",
                "value": "InNetwork: $500 Copay after deductible,",
                "categoryName": "Emergency Medical Care",
                "dataType": "Text"
            }, {
                "name": "Emergency Transportation/Ambulance",
                "description": "OutofNetwork: 30% Coinsurance after deductible",
                "value": "InNetwork: 30% Coinsurance after deductible",
                "categoryName": "Emergency Medical Care",
                "dataType": "Text"
            }],
            "Inpatient": [{
                "description": "OutofNetwork: Coinsurance=100%",
                "categoryName": "Inpatient",
                "value": "InNetwork: 30% Coinsurance after deductible",
                "name": "Inpatient Hospital Services (e.g., Hospi",
                "dataType": "Text"
            }, {
                "description": "OutofNetwork: Coinsurance=100%",
                "categoryName": "Inpatient",
                "value": "InNetwork: 30% Coinsurance after deductible",
                "name": "Inpatient Physician and Surgical Service",
                "dataType": "Text"
            }, {
                "description": "OutofNetwork: Coinsurance=100%",
                "categoryName": "Inpatient",
                "value": "InNetwork: 30% Coinsurance after deductible",
                "name": "Delivery and All Inpatient Services for",
                "dataType": "Text"
            }, {
                "description": "OutofNetwork: Coinsurance=100%",
                "categoryName": "Inpatient",
                "value": "InNetwork: 30% Coinsurance after deductible",
                "name": "Skilled Nursing Facility",
                "dataType": "Text"
            }],
            "OfficeVisit": [{
                "description": "OutofNetwork: Coinsurance=100%",
                "dataType": "Text",
                "categoryName": "Office Visit",
                "name": "Primary Care Visit to Treat an Injury or",
                "value": "InNetwork: Copay=$35,"
            }, {
                "description": "OutofNetwork: Coinsurance=100%",
                "dataType": "Text",
                "categoryName": "Office Visit",
                "name": "Specialist Visit",
                "value": "InNetwork: Copay=$100,"
            }, {
                "description": "OutofNetwork: Coinsurance=100%",
                "dataType": "Text",
                "categoryName": "Office Visit",
                "name": "Urgent Care Centers or Facilities",
                "value": "InNetwork: Copay=$100,"
            }],
            "maxoop": [{
                "categoryName": "Maximum Out of Pocket Expenses",
                "value": "InNetwork: Family=per person Not Applicable | per group Not Applicable,",
                "description": "OutofNetwork: Family=per person Not Applicable | per group Not Applicable, Individual=per person Not Applicable | per group Not Applicable",
                "name": "Maximum Out of Pocket for Drug EHB Benef",
                "dataType": "Text"
            }, {
                "categoryName": "Maximum Out of Pocket Expenses",
                "value": "InNetwork: Family=$6850 per person | $13700 per group, Individual=$6,850",
                "description": "OutofNetwork: Family=$6850 per person | $13700 per group, Individual=$6850 per person | $13700 per group",
                "name": "Maximum Out of Pocket for Medical and Dr",
                "dataType": "Text"
            }, {
                "categoryName": "Maximum Out of Pocket Expenses",
                "value": "InNetwork: Family=per person Not Applicable | per group Not Applicable,",
                "description": "OutofNetwork: Family=per person Not Applicable | per group Not Applicable, Individual=per person Not Applicable | per group Not Applicable",
                "name": "Maximum Out of Pocket for Medical EHB Be",
                "dataType": "Text"
            }],
            "deductible": [{
                "dataType": "Text",
                "value": "InNetwork: Family=$2000 per person | $4000 per group, Individual=$2,000",
                "name": "Combined Medical and Drug EHB Deductible",
                "categoryName": "Deductible",
                "description": "OutofNetwork: Family=$2000 per person | $4000 per group, Individual=$2000 per person | $4000 per group"
            }, {
                "dataType": "Text",
                "value": "InNetwork: Family=per person Not Applicable | per group Not Applicable,",
                "name": "Drug EHB Deductible",
                "categoryName": "Deductible",
                "description": "OutofNetwork: Family=per person Not Applicable | per group Not Applicable, Individual=per person Not Applicable | per group Not Applicable"
            }, {
                "dataType": "Text",
                "value": "InNetwork: Family=per person Not Applicable | per group Not Applicable,",
                "name": "Medical EHB Deductible",
                "categoryName": "Deductible",
                "description": "OutofNetwork: Family=per person Not Applicable | per group Not Applicable, Individual=per person Not Applicable | per group Not Applicable"
            }]
        }, {
            "ProductId": "01t55000000FIkSAAW",
            "name": "Bronze HMO 6000",
            "productcode": "96667ME0240008",
            "MarketSegment": "Individual",
            "ProductType": "HMO",
            "LevelCoverage": "Bronze",
            "Emgny&UrgMedCare": [{
                "name": "Emergency Room Services",
                "description": "OutofNetwork: 30% Coinsurance after deductible",
                "value": "InNetwork: 30% Coinsurance after deductible",
                "categoryName": "Emergency Medical Care",
                "dataType": "Text"
            }, {
                "name": "Emergency Transportation/Ambulance",
                "description": "OutofNetwork: 30% Coinsurance after deductible",
                "value": "InNetwork: 30% Coinsurance after deductible",
                "categoryName": "Emergency Medical Care",
                "dataType": "Text"
            }],
            "Inpatient": [{
                "description": "OutofNetwork: Coinsurance=100%",
                "categoryName": "Inpatient",
                "value": "InNetwork: 30% Coinsurance after deductible",
                "name": "Inpatient Hospital Services (e.g., Hospi",
                "dataType": "Text"
            }, {
                "description": "OutofNetwork: Coinsurance=100%",
                "categoryName": "Inpatient",
                "value": "InNetwork: 30% Coinsurance after deductible",
                "name": "Inpatient Physician and Surgical Service",
                "dataType": "Text"
            }, {
                "description": "OutofNetwork: Coinsurance=100%",
                "categoryName": "Inpatient",
                "value": "InNetwork: 30% Coinsurance after deductible",
                "name": "Delivery and All Inpatient Services for",
                "dataType": "Text"
            }, {
                "description": "OutofNetwork: Coinsurance=100%",
                "categoryName": "Inpatient",
                "value": "InNetwork: 30% Coinsurance after deductible",
                "name": "Skilled Nursing Facility",
                "dataType": "Text"
            }],
            "OfficeVisit": [{
                "description": "OutofNetwork: Coinsurance=100%",
                "dataType": "Text",
                "categoryName": "Office Visit",
                "name": "Primary Care Visit to Treat an Injury or",
                "value": "InNetwork: 30% Coinsurance after deductible"
            }, {
                "description": "OutofNetwork: Coinsurance=100%",
                "dataType": "Text",
                "categoryName": "Office Visit",
                "name": "Specialist Visit",
                "value": "InNetwork: 30% Coinsurance after deductible"
            }, {
                "description": "OutofNetwork: Coinsurance=100%",
                "dataType": "Text",
                "categoryName": "Office Visit",
                "name": "Urgent Care Centers or Facilities",
                "value": "InNetwork: 30% Coinsurance after deductible"
            }],
            "maxoop": [{
                "categoryName": "Maximum Out of Pocket Expenses",
                "value": "InNetwork: Family=per person Not Applicable | per group Not Applicable,",
                "description": "OutofNetwork: Family=per person Not Applicable | per group Not Applicable, Individual=per person Not Applicable | per group Not Applicable",
                "name": "Maximum Out of Pocket for Drug EHB Benef",
                "dataType": "Text"
            }, {
                "categoryName": "Maximum Out of Pocket Expenses",
                "value": "InNetwork: Family=$6850 per person | $13700 per group, Individual=$6,850",
                "description": "OutofNetwork: Family=$6850 per person | $13700 per group, Individual=$6850 per person | $13700 per group",
                "name": "Maximum Out of Pocket for Medical and Dr",
                "dataType": "Text"
            }, {
                "categoryName": "Maximum Out of Pocket Expenses",
                "value": "InNetwork: Family=per person Not Applicable | per group Not Applicable,",
                "description": "OutofNetwork: Family=per person Not Applicable | per group Not Applicable, Individual=per person Not Applicable | per group Not Applicable",
                "name": "Maximum Out of Pocket for Medical EHB Be",
                "dataType": "Text"
            }],
            "deductible": [{
                "dataType": "Text",
                "value": "InNetwork: Family=$6000 per person | $12000 per group, Individual=$6,000",
                "name": "Combined Medical and Drug EHB Deductible",
                "categoryName": "Deductible",
                "description": "OutofNetwork: Family=$6000 per person | $12000 per group, Individual=$6000 per person | $12000 per group"
            }, {
                "dataType": "Text",
                "value": "InNetwork: Family=per person Not Applicable | per group Not Applicable,",
                "name": "Drug EHB Deductible",
                "categoryName": "Deductible",
                "description": "OutofNetwork: Family=per person Not Applicable | per group Not Applicable, Individual=per person Not Applicable | per group Not Applicable"
            }, {
                "dataType": "Text",
                "value": "InNetwork: Family=per person Not Applicable | per group Not Applicable,",
                "name": "Medical EHB Deductible",
                "categoryName": "Deductible",
                "description": "OutofNetwork: Family=per person Not Applicable | per group Not Applicable, Individual=per person Not Applicable | per group Not Applicable"
            }]
        }, {
            "ProductId": "01t55000000FIkTAAW",
            "name": "Best Buy HSA HMO 5000",
            "productcode": "96667ME0240006",
            "MarketSegment": "Individual",
            "ProductType": "HMO",
            "LevelCoverage": "Bronze",
            "Emgny&UrgMedCare": [{
                "name": "Emergency Room Services",
                "description": "OutofNetwork: 20% Coinsurance after deductible",
                "value": "InNetwork: 20% Coinsurance after deductible",
                "categoryName": "Emergency Medical Care",
                "dataType": "Text"
            }, {
                "name": "Emergency Transportation/Ambulance",
                "description": "OutofNetwork: 20% Coinsurance after deductible",
                "value": "InNetwork: 20% Coinsurance after deductible",
                "categoryName": "Emergency Medical Care",
                "dataType": "Text"
            }],
            "Inpatient": [{
                "description": "OutofNetwork: Coinsurance=100%",
                "categoryName": "Inpatient",
                "value": "InNetwork: 20% Coinsurance after deductible",
                "name": "Inpatient Hospital Services (e.g., Hospi",
                "dataType": "Text"
            }, {
                "description": "OutofNetwork: Coinsurance=100%",
                "categoryName": "Inpatient",
                "value": "InNetwork: 20% Coinsurance after deductible",
                "name": "Inpatient Physician and Surgical Service",
                "dataType": "Text"
            }, {
                "description": "OutofNetwork: Coinsurance=100%",
                "categoryName": "Inpatient",
                "value": "InNetwork: 20% Coinsurance after deductible",
                "name": "Delivery and All Inpatient Services for",
                "dataType": "Text"
            }, {
                "description": "OutofNetwork: Coinsurance=100%",
                "categoryName": "Inpatient",
                "value": "InNetwork: 20% Coinsurance after deductible",
                "name": "Skilled Nursing Facility",
                "dataType": "Text"
            }],
            "OfficeVisit": [{
                "description": "OutofNetwork: Coinsurance=100%",
                "dataType": "Text",
                "categoryName": "Office Visit",
                "name": "Primary Care Visit to Treat an Injury or",
                "value": "InNetwork: 20% Coinsurance after deductible"
            }, {
                "description": "OutofNetwork: Coinsurance=100%",
                "dataType": "Text",
                "categoryName": "Office Visit",
                "name": "Specialist Visit",
                "value": "InNetwork: 20% Coinsurance after deductible"
            }, {
                "description": "OutofNetwork: Coinsurance=100%",
                "dataType": "Text",
                "categoryName": "Office Visit",
                "name": "Urgent Care Centers or Facilities",
                "value": "InNetwork: 20% Coinsurance after deductible"
            }],
            "maxoop": [{
                "categoryName": "Maximum Out of Pocket Expenses",
                "name": "Maximum Out of Pocket for Drug EHB Benef",
                "dataType": "Text"
            }, {
                "categoryName": "Maximum Out of Pocket Expenses",
                "value": "InNetwork: Family=$6450 per person | $12900 per group, Individual=$6,450",
                "description": "OutofNetwork: Family=$6450 per person | $12900 per group, Individual=$6450 per person | $12900 per group",
                "name": "Maximum Out of Pocket for Medical and Dr",
                "dataType": "Text"
            }, {
                "categoryName": "Maximum Out of Pocket Expenses",
                "name": "Maximum Out of Pocket for Medical EHB Be",
                "dataType": "Text"
            }],
            "deductible": [{
                "dataType": "Text",
                "value": "InNetwork: Family=$5000 per person | $10000 per group, Individual=$5,000",
                "name": "Combined Medical and Drug EHB Deductible",
                "categoryName": "Deductible",
                "description": "OutofNetwork: Family=$5000 per person | $10000 per group, Individual=$5000 per person | $10000 per group"
            }, {
                "dataType": "Text",
                "name": "Drug EHB Deductible",
                "categoryName": "Deductible"
            }, {
                "dataType": "Text",
                "name": "Medical EHB Deductible",
                "categoryName": "Deductible"
            }]
        }, {
            "ProductId": "01t55000000FIkUAAW",
            "name": "Maine's Choice Gold HMO",
            "productcode": "96667ME0260004",
            "MarketSegment": "Individual",
            "ProductType": "HMO",
            "NetworkName": "Maine's Choice Network",
            "LevelCoverage": "Gold",
            "features": [{
                "value": "Maine's Choice Network",
                "name": "Network",
                "dataType": "Text",
                "categoryName": "Individual Plans 11 Key Benefits",
                "description": "Key"
            }, {
                "value": "PCP - $15/ Specialist - $50",
                "name": "Office Visit",
                "dataType": "Text",
                "categoryName": "Individual Plans 11 Key Benefits",
                "description": "Key"
            }, {
                "value": "T1: Ind $750/Family $1,500   T2: Ind $2,000/Family $4,000",
                "name": "In-Network Deductible",
                "dataType": "Text",
                "categoryName": "Individual Plans 11 Key Benefits",
                "description": "Key"
            }, {
                "value": "n/a",
                "name": "Out of Network Deductible",
                "dataType": "Text",
                "categoryName": "Individual Plans 11 Key Benefits",
                "description": "Key"
            }, {
                "value": "T1: Ind $3,500/Family $7000 T2: Ind $6450 T2: Family $12,900",
                "name": "In-Network OOP Max",
                "categoryName": "Individual Plans 11 Key Benefits",
                "description": "Key"
            }, {
                "value": "n/a",
                "name": "Out of Network OOP Max",
                "dataType": "Text",
                "categoryName": "Individual Plans 11 Key Benefits",
                "description": "Key"
            }, {
                "value": "T1: Ind $3,500/Family $7000 T2: Ind $6450 T2: Family $12,900",
                "name": "Coinsurance",
                "dataType": "Text",
                "categoryName": "Individual Plans 11 Key Benefits",
                "description": "Key"
            }, {
                "value": "$10/$50/30%/30% $10/$50/ded them 30%/ded then 30%",
                "name": "Drug",
                "dataType": "Text",
                "categoryName": "Individual Plans 11 Key Benefits",
                "description": "Key"
            }, {
                "value": "n/a",
                "name": "Drug Deductible",
                "dataType": "Text",
                "categoryName": "Individual Plans 11 Key Benefits",
                "description": "Key"
            }, {
                "value": "T1: T1 Ded then 10%/T2: T2 Ded then 40%",
                "name": "Inpatient",
                "dataType": "Text",
                "categoryName": "Individual Plans 11 Key Benefits",
                "description": "Key"
            }, {
                "value": "T1 Ded then $250",
                "name": "Emergency Room",
                "dataType": "Text",
                "categoryName": "Individual Plans 11 Key Benefits",
                "description": "Key"
            }],
            "Emgny&UrgMedCare": [{
                "name": "Emergency Room Services",
                "description": "OutofNetwork: $250 Copay after deductible,",
                "value": "InNetwork(Tier1): $250 Copay after deductible,  /InNetwork(Tier2): $250 Copay after deductible,",
                "categoryName": "Emergency Medical Care",
                "dataType": "Text"
            }, {
                "name": "Emergency Transportation/Ambulance",
                "description": "OutofNetwork: 10% Coinsurance after deductible",
                "value": "InNetwork(Tier1): 10% Coinsurance after deductible /InNetwork(Tier2): 10% Coinsurance after deductible",
                "categoryName": "Emergency Medical Care",
                "dataType": "Text"
            }],
            "Inpatient": [{
                "description": "OutofNetwork: Coinsurance=100%",
                "categoryName": "Inpatient",
                "value": "InNetwork(Tier1): 10% Coinsurance after deductible /InNetwork(Tier2): 40% Coinsurance after deductible",
                "name": "Inpatient Hospital Services (e.g., Hospi",
                "dataType": "Text"
            }, {
                "description": "OutofNetwork: Coinsurance=100%",
                "categoryName": "Inpatient",
                "value": "InNetwork(Tier1): 10% Coinsurance after deductible /InNetwork(Tier2): 40% Coinsurance after deductible",
                "name": "Inpatient Physician and Surgical Service",
                "dataType": "Text"
            }, {
                "description": "OutofNetwork: Coinsurance=100%",
                "categoryName": "Inpatient",
                "value": "InNetwork(Tier1): 10% Coinsurance after deductible /InNetwork(Tier2): 40% Coinsurance after deductible",
                "name": "Delivery and All Inpatient Services for",
                "dataType": "Text"
            }, {
                "description": "OutofNetwork: Coinsurance=100%",
                "categoryName": "Inpatient",
                "value": "InNetwork(Tier1): 10% Coinsurance after deductible /InNetwork(Tier2): 40% Coinsurance after deductible",
                "name": "Skilled Nursing Facility",
                "dataType": "Text"
            }],
            "OfficeVisit": [{
                "description": "OutofNetwork: Coinsurance=100%",
                "dataType": "Text",
                "categoryName": "Office Visit",
                "name": "Primary Care Visit to Treat an Injury or",
                "value": "InNetwork(Tier1): Copay=$15,  /InNetwork(Tier2): 40% Coinsurance after deductible"
            }, {
                "description": "OutofNetwork: Coinsurance=100%",
                "dataType": "Text",
                "categoryName": "Office Visit",
                "name": "Specialist Visit",
                "value": "InNetwork(Tier1): Copay=$50,  /InNetwork(Tier2): 40% Coinsurance after deductible"
            }, {
                "description": "OutofNetwork: Coinsurance=100%",
                "dataType": "Text",
                "categoryName": "Office Visit",
                "name": "Urgent Care Centers or Facilities",
                "value": "InNetwork(Tier1): Copay=$50,  /InNetwork(Tier2): 40% Coinsurance after deductible"
            }],
            "maxoop": [{
                "categoryName": "Maximum Out of Pocket Expenses",
                "name": "Maximum Out of Pocket for Drug EHB Benef",
                "dataType": "Text"
            }, {
                "categoryName": "Maximum Out of Pocket Expenses",
                "value": "InNetwork(Tier1): Family=$3500 per person | $7000 per group, Individual=$3,500 /InNetwork(Tier2): Family=$6450 per person | $12900 per group, Individual=$6,450",
                "description": "OutofNetwork: Family=$3500 per person | $7000 per group, Individual=$3500 per person | $7000 per group",
                "name": "Maximum Out of Pocket for Medical and Dr",
                "dataType": "Text"
            }, {
                "categoryName": "Maximum Out of Pocket Expenses",
                "name": "Maximum Out of Pocket for Medical EHB Be",
                "dataType": "Text"
            }],
            "deductible": [{
                "dataType": "Text",
                "value": "InNetwork(Tier1): Family=$750 per person | $1500 per group, Individual=$750 /InNetwork(Tier2): Family=$2000 per person | $4000 per group, Individual=$2,000",
                "name": "Combined Medical and Drug EHB Deductible",
                "categoryName": "Deductible",
                "description": "OutofNetwork: Family=$750 per person | $1500 per group, Individual=$750 per person | $1500 per group"
            }, {
                "dataType": "Text",
                "name": "Drug EHB Deductible",
                "categoryName": "Deductible"
            }, {
                "dataType": "Text",
                "name": "Medical EHB Deductible",
                "categoryName": "Deductible"
            }]
        }, {
            "ProductId": "01t55000000FIkVAAW",
            "name": "Maine's Choice Casco Silver HMO",
            "productcode": "96667ME0260002",
            "MarketSegment": "Individual",
            "ProductType": "HMO",
            "NetworkName": "Maine's Choice Network",
            "LevelCoverage": "Silver",
            "features": [{
                "value": "Maine's Choice Network",
                "name": "Network",
                "categoryName": "Individual Plans 11 Key Benefits",
                "description": "Key"
            }, {
                "value": "PCP - $25/ Specialist - $60",
                "name": "Office Visit",
                "categoryName": "Individual Plans 11 Key Benefits",
                "description": "Key"
            }, {
                "value": "T1: Ind $1500/Family $3000   T2: Ind $4,000/Family $8,000",
                "name": "In-Network Deductible",
                "categoryName": "Individual Plans 11 Key Benefits",
                "description": "Key"
            }, {
                "value": "n/a",
                "name": "Out of Network Deductible",
                "categoryName": "Individual Plans 11 Key Benefits",
                "description": "Key"
            }, {
                "value": "T1: Ind $5,900/Family $11800 T2: Ind $6850 T2: Family $13700",
                "name": "In-Network OOP Max",
                "categoryName": "Individual Plans 11 Key Benefits",
                "description": "Key"
            }, {
                "value": "n/a",
                "name": "Out of Network OOP Max",
                "categoryName": "Individual Plans 11 Key Benefits",
                "description": "Key"
            }, {
                "value": "T1: Ind $3,500/Family $7000 T2: Ind $6450 T2: Family $12,900",
                "name": "Coinsurance",
                "categoryName": "Individual Plans 11 Key Benefits",
                "description": "Key"
            }, {
                "value": "$30/$150/30%/30%",
                "name": "Drug",
                "categoryName": "Individual Plans 11 Key Benefits",
                "description": "Key"
            }, {
                "value": "n/a",
                "name": "Drug Deductible",
                "categoryName": "Individual Plans 11 Key Benefits",
                "description": "Key"
            }, {
                "value": "T1: Ded then 30%/T2: Ded then 50%",
                "name": "Inpatient",
                "categoryName": "Individual Plans 11 Key Benefits",
                "description": "Key"
            }, {
                "value": "T1: Ded then $250",
                "name": "Emergency Room",
                "categoryName": "Individual Plans 11 Key Benefits",
                "description": "Key"
            }],
            "Emgny&UrgMedCare": [{
                "name": "Emergency Room Services",
                "description": "OutofNetwork: $250 Copay after deductible,",
                "value": "InNetwork(Tier1): $250 Copay after deductible,  /InNetwork(Tier2): $250 Copay after deductible,",
                "categoryName": "Emergency Medical Care",
                "dataType": "Text"
            }, {
                "name": "Emergency Transportation/Ambulance",
                "description": "OutofNetwork: 30% Coinsurance after deductible",
                "value": "InNetwork(Tier1): 30% Coinsurance after deductible /InNetwork(Tier2): 30% Coinsurance after deductible",
                "categoryName": "Emergency Medical Care",
                "dataType": "Text"
            }],
            "Inpatient": [{
                "description": "OutofNetwork: Coinsurance=100%",
                "categoryName": "Inpatient",
                "value": "InNetwork(Tier1): 30% Coinsurance after deductible /InNetwork(Tier2): 50% Coinsurance after deductible",
                "name": "Inpatient Hospital Services (e.g., Hospi",
                "dataType": "Text"
            }, {
                "description": "OutofNetwork: Coinsurance=100%",
                "categoryName": "Inpatient",
                "value": "InNetwork(Tier1): 30% Coinsurance after deductible /InNetwork(Tier2): 50% Coinsurance after deductible",
                "name": "Inpatient Physician and Surgical Service",
                "dataType": "Text"
            }, {
                "description": "OutofNetwork: Coinsurance=100%",
                "categoryName": "Inpatient",
                "value": "InNetwork(Tier1): 30% Coinsurance after deductible /InNetwork(Tier2): 50% Coinsurance after deductible",
                "name": "Delivery and All Inpatient Services for",
                "dataType": "Text"
            }, {
                "description": "OutofNetwork: Coinsurance=100%",
                "categoryName": "Inpatient",
                "value": "InNetwork(Tier1): 30% Coinsurance after deductible /InNetwork(Tier2): 50% Coinsurance after deductible",
                "name": "Skilled Nursing Facility",
                "dataType": "Text"
            }],
            "OfficeVisit": [{
                "description": "OutofNetwork: Coinsurance=100%",
                "dataType": "Text",
                "categoryName": "Office Visit",
                "name": "Primary Care Visit to Treat an Injury or",
                "value": "InNetwork(Tier1): Copay=$25,  /InNetwork(Tier2): 50% Coinsurance after deductible"
            }, {
                "description": "OutofNetwork: Coinsurance=100%",
                "dataType": "Text",
                "categoryName": "Office Visit",
                "name": "Specialist Visit",
                "value": "InNetwork(Tier1): Copay=$60,  /InNetwork(Tier2): 50% Coinsurance after deductible"
            }, {
                "description": "OutofNetwork: Coinsurance=100%",
                "dataType": "Text",
                "categoryName": "Office Visit",
                "name": "Urgent Care Centers or Facilities",
                "value": "InNetwork(Tier1): Copay=$60,  /InNetwork(Tier2): 50% Coinsurance after deductible"
            }],
            "maxoop": [{
                "categoryName": "Maximum Out of Pocket Expenses",
                "name": "Maximum Out of Pocket for Drug EHB Benef",
                "dataType": "Text"
            }, {
                "categoryName": "Maximum Out of Pocket Expenses",
                "value": "InNetwork(Tier1): Family=$5900 per person | $11800 per group, Individual=$5,900 /InNetwork(Tier2): Family=$6850 per person | $13700 per group, Individual=$6,850",
                "description": "OutofNetwork: Family=$5900 per person | $11800 per group, Individual=$5900 per person | $11800 per group",
                "name": "Maximum Out of Pocket for Medical and Dr",
                "dataType": "Text"
            }, {
                "categoryName": "Maximum Out of Pocket Expenses",
                "name": "Maximum Out of Pocket for Medical EHB Be",
                "dataType": "Text"
            }],
            "deductible": [{
                "dataType": "Text",
                "value": "InNetwork(Tier1): Family=$1500 per person | $3000 per group, Individual=$1,500 /InNetwork(Tier2): Family=$4000 per person | $8000 per group, Individual=$4,000",
                "name": "Combined Medical and Drug EHB Deductible",
                "categoryName": "Deductible",
                "description": "OutofNetwork: Family=$1500 per person | $3000 per group, Individual=$1500 per person | $3000 per group"
            }, {
                "dataType": "Text",
                "name": "Drug EHB Deductible",
                "categoryName": "Deductible"
            }, {
                "dataType": "Text",
                "name": "Medical EHB Deductible",
                "categoryName": "Deductible"
            }]
        }],
        "State": "ME",
        "SelectCoverage": {
            "output2": [{
                "calculationResults": [{
                    "ZipCode": "04053",
                    "Age": 45,
                    "Tobacco": "Yes",
                    "DOB": "1970-01-20T08:00:00.000Z",
                    "attributes": [{
                        "description": "Key",
                        "value": "Maine's Choice Network",
                        "dataType": "Text",
                        "categoryName": "Individual Plans 11 Key Benefits",
                        "name": "Network"
                    }, {
                        "description": "Key",
                        "value": "PCP - $15/ Specialist - $50",
                        "dataType": "Text",
                        "categoryName": "Individual Plans 11 Key Benefits",
                        "name": "Office Visit"
                    }, {
                        "description": "Key",
                        "value": "T1: Ind $750/Family $1,500   T2: Ind $2,000/Family $4,000",
                        "dataType": "Text",
                        "categoryName": "Individual Plans 11 Key Benefits",
                        "name": "In-Network Deductible"
                    }, {
                        "description": "Key",
                        "value": "n/a",
                        "dataType": "Text",
                        "categoryName": "Individual Plans 11 Key Benefits",
                        "name": "Out of Network Deductible"
                    }, {
                        "description": "Key",
                        "value": "T1: Ind $3,500/Family $7000 T2: Ind $6450 T2: Family $12,900",
                        "categoryName": "Individual Plans 11 Key Benefits",
                        "name": "In-Network OOP Max"
                    }, {
                        "description": "Key",
                        "value": "n/a",
                        "dataType": "Text",
                        "categoryName": "Individual Plans 11 Key Benefits",
                        "name": "Out of Network OOP Max"
                    }, {
                        "description": "Key",
                        "value": "T1: Ind $3,500/Family $7000 T2: Ind $6450 T2: Family $12,900",
                        "dataType": "Text",
                        "categoryName": "Individual Plans 11 Key Benefits",
                        "name": "Coinsurance"
                    }, {
                        "description": "Key",
                        "value": "$10/$50/30%/30% $10/$50/ded them 30%/ded then 30%",
                        "dataType": "Text",
                        "categoryName": "Individual Plans 11 Key Benefits",
                        "name": "Drug"
                    }, {
                        "description": "Key",
                        "value": "n/a",
                        "dataType": "Text",
                        "categoryName": "Individual Plans 11 Key Benefits",
                        "name": "Drug Deductible"
                    }, {
                        "description": "Key",
                        "value": "T1: T1 Ded then 10%/T2: T2 Ded then 40%",
                        "dataType": "Text",
                        "categoryName": "Individual Plans 11 Key Benefits",
                        "name": "Inpatient"
                    }, {
                        "description": "Key",
                        "value": "T1 Ded then $250",
                        "dataType": "Text",
                        "categoryName": "Individual Plans 11 Key Benefits",
                        "name": "Emergency Room"
                    }, {
                        "name": "Emergency Room Services",
                        "description": "OutofNetwork: $250 Copay after deductible,",
                        "categoryName": "Emergency Medical Care",
                        "value": "InNetwork(Tier1): $250 Copay after deductible,  /InNetwork(Tier2): $250 Copay after deductible,",
                        "dataType": "Text"
                    }, {
                        "name": "Emergency Transportation/Ambulance",
                        "description": "OutofNetwork: 10% Coinsurance after deductible",
                        "categoryName": "Emergency Medical Care",
                        "value": "InNetwork(Tier1): 10% Coinsurance after deductible /InNetwork(Tier2): 10% Coinsurance after deductible",
                        "dataType": "Text"
                    }, {
                        "description": "OutofNetwork: Coinsurance=100%",
                        "value": "InNetwork(Tier1): 10% Coinsurance after deductible /InNetwork(Tier2): 40% Coinsurance after deductible",
                        "name": "Inpatient Hospital Services (e.g., Hospi",
                        "categoryName": "Inpatient"
                    }, {
                        "description": "OutofNetwork: Coinsurance=100%",
                        "value": "InNetwork(Tier1): 10% Coinsurance after deductible /InNetwork(Tier2): 40% Coinsurance after deductible",
                        "name": "Inpatient Physician and Surgical Service",
                        "categoryName": "Inpatient"
                    }, {
                        "description": "OutofNetwork: Coinsurance=100%",
                        "value": "InNetwork(Tier1): 10% Coinsurance after deductible /InNetwork(Tier2): 40% Coinsurance after deductible",
                        "name": "Delivery and All Inpatient Services for",
                        "categoryName": "Inpatient"
                    }, {
                        "description": "OutofNetwork: Coinsurance=100%",
                        "value": "InNetwork(Tier1): 10% Coinsurance after deductible /InNetwork(Tier2): 40% Coinsurance after deductible",
                        "name": "Skilled Nursing Facility",
                        "categoryName": "Inpatient"
                    }, {
                        "value": "InNetwork(Tier1): Copay=$15,  /InNetwork(Tier2): 40% Coinsurance after deductible",
                        "description": "OutofNetwork: Coinsurance=100%",
                        "dataType": "Text",
                        "name": "Primary Care Visit to Treat an Injury or",
                        "categoryName": "Office Visit"
                    }, {
                        "value": "InNetwork(Tier1): Copay=$50,  /InNetwork(Tier2): 40% Coinsurance after deductible",
                        "description": "OutofNetwork: Coinsurance=100%",
                        "dataType": "Text",
                        "name": "Specialist Visit",
                        "categoryName": "Office Visit"
                    }, {
                        "value": "InNetwork(Tier1): Copay=$50,  /InNetwork(Tier2): 40% Coinsurance after deductible",
                        "description": "OutofNetwork: Coinsurance=100%",
                        "dataType": "Text",
                        "name": "Urgent Care Centers or Facilities",
                        "categoryName": "Office Visit"
                    }, {
                        "dataType": "Text",
                        "name": "Maximum Out of Pocket for Drug EHB Benef",
                        "categoryName": "Maximum Out of Pocket Expenses"
                    }, {
                        "description": "OutofNetwork: Family=$3500 per person | $7000 per group, Individual=$3500 per person | $7000 per group",
                        "dataType": "Text",
                        "name": "Maximum Out of Pocket for Medical and Dr",
                        "value": "InNetwork(Tier1): Family=$3500 per person | $7000 per group, Individual=$3,500 /InNetwork(Tier2): Family=$6450 per person | $12900 per group, Individual=$6,450",
                        "categoryName": "Maximum Out of Pocket Expenses"
                    }, {
                        "dataType": "Text",
                        "name": "Maximum Out of Pocket for Medical EHB Be",
                        "categoryName": "Maximum Out of Pocket Expenses"
                    }, {
                        "dataType": "Text",
                        "categoryName": "Deductible",
                        "name": "Combined Medical and Drug EHB Deductible",
                        "value": "InNetwork(Tier1): Family=$750 per person | $1500 per group, Individual=$750 /InNetwork(Tier2): Family=$2000 per person | $4000 per group, Individual=$2,000",
                        "description": "OutofNetwork: Family=$750 per person | $1500 per group, Individual=$750 per person | $1500 per group"
                    }, {
                        "dataType": "Text",
                        "categoryName": "Deductible",
                        "name": "Drug EHB Deductible"
                    }, {
                        "dataType": "Text",
                        "categoryName": "Deductible",
                        "name": "Medical EHB Deductible"
                    }],
                    "ProductId": "01t55000000FIkUAAW",
                    "NetworkName": "Maine's Choice Network",
                    "ProductType": "HMO",
                    "MarketSegment": "Individual",
                    "LevelCoverage": "Gold",
                    "Plan ID": "96667ME0260004",
                    "ProductName": "Maine's Choice Gold HMO",
                    "IndividualPlansRates__IndividualRate": 559.55,
                    "RatingAreaLookup2__RatingAreaID": "Rating Area 1",
                    "ID": "4"
                }],
                "aggregationResults": {
                    "TotalPrice": 559.55
                },
                "vlcSelected": true
            }],
            "QuoteEnroll": "Enroll Now"
        },
        "Application": {
            "Prefix": "Mr.",
            "FirstName": "John",
            "MiddleName": null,
            "LastName": "Smith",
            "SSN": null,
            "DateofBirthApplication": "1970-01-20T08:00:00.000Z",
            "TobaccoUse": "Yes",
            "Gender": null,
            "StreetAddress": "1 Main St.",
            "Apartment": null,
            "CityTown": "Merepoint",
            "StateApplication": "ME",
            "ZipCodeApplication": "04053",
            "MobilePhone": "(555) 555-5555",
            "HomePhone": "(444) 444-4444",
            "WorkTelephone": "(555) 555-5556",
            "Email": "gpardo@vlocity.com",
            "PaymentMethod": null,
            "Broker": null,
            "PCP": null
        },
        "ReviewTerms": {
            "Disclosure": false
        },
        "QuoteOptionCustomerInfo": {
            "qZipCode": "04053",
            "qState": "ME",
            "qPrefix": "Mr.",
            "qFirstName": "John",
            "qMiddleName": null,
            "qLastName": "Smith",
            "qStreetAddress": "1 Main St.",
            "qAppNum": null,
            "qCityTown": "Merepoint",
            "qEmail": "gpardo@vlocity.com"
        },
        "CustInfo": {
            "Beneficiary": {
                "ExistingCoverage": "No",
                "GroupCoverage": null
            }
        },
        "CommunicationsPreferences": {
            "CommEmail": "No",
            "ComPhone": "Yes",
            "ComMail": "No",
            "ComFirstChoice": "Email",
            "ComSecondChoice": "Email"
        }
    };

    baseCtrl.prototype.$scope = $scope;
}

baseCtrl.prototype.excludeValues = function(scp,key,value) { 
    var blacklist = scp.bpTree.skipElements;   
    if(typeof value === 'object') {
        var shown = false;
        for (var prop in value) {
            if(shown === false && value[prop] !== null) {
                shown = true;
            }            
        }
        for(var i = 0; i < blacklist.length; i++) {
            if(blacklist[i] === key) {
                shown = false;
            }
        }
        return shown;
    }else if(typeof value === 'string'){
        for(var i = 0; i < blacklist.length; i++) {
            if(blacklist[i] === key) {
                return false;
            }
        }
        return true;
    }else if(typeof value === 'number' || typeof value === 'boolean') {
        return true;
    }
};

baseCtrl.prototype.isObject = function(value) {
    if(typeof value === 'object') {
        return true;
    }
    return false;
};

bpModule.controller("baseCtrl", baseCtrl);