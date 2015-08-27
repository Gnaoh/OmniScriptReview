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
function customRedirectCtrl($scope) {
    $scope.bpTree = {
        "skipElements": [
            "ContextId",
            "timeStamp",
            "userName",
            "userProfile",
            "vlcPersistentComponent",
            "error",
            "QuoteEnroll"
        ],
        "userCurrencyCode": "GBP",
        "labelMap": {
            "DataRaptor Extract Action 1": null,
            "Enrollee Info": "Enrollee Information",
            "DataRaptor Extract Action 2": null,
            "Calculation Action 1": null,
            "Plan Selection": "Plan Selection",
            "finalize_quote": "Finalize Quote",
            "Save Quote": "Save Qute",
            "SaveSession": "Save Session",
            "Done Action 1": "Done Action 1",
            "Basic_Info": "Basic Information about yourself",
            "DataRaptor Extract Action 3": "DataRaptor Extract Action 3",
            "Enrollee_Information_2": "Enrollee Information",
            "Medicare_info": "Medicare Information",
            "Eligibility_info_2": "Information about your enrollment eligibility",
            "Addl_health": "Additional Health and Insurance Information",
            "Prem_payment": "Premium Payment, Application Assistance",
            "application_assistance": "Application Assistance",
            "Review Action 1": "Review Action 1",
            "Submit": "Review your information",
            "Ei_tb": null,
            "Year": "Year",
            "State": "State",
            "County_1": "County",
            "Plan_text": null,
            "output2": "Selectable Items 1",
            "quote_or_enroll": "How would you like to Proceed?",
            "ah_tb_1": null,
            "ah_rb_1": "Do you have end-stage renal disease (ESRD)?",
            "ah_rb_1.1": "Were you terminated from the previous plan due to a service area reduction, contract termination, non-renewal, or are you currently enrolled in a health plan (such as a commercial or group health plan, or a Medicaid plan)?",
            "ah_tb_2": null,
            "ah_tb_3": null,
            "ah_rb_2": "Will you have other prescription drug coverage in addition to our plan?",
            "ah_txt_2": "What is the name of the insurance company?",
            "ah_txt_2.1": "May I have the ID number?",
            "ah_txt_2.2": "May I have the Group Number?",
            "ah_rb_3": "Are you a resident in a long-term care facility, such as a nursing home?",
            "ah_txt_3": "Name of institution?",
            "ah_txt_3.1": "Phone number of institution?",
            "ah_txt_3.2": "Address of Institution (Number and Street?)",
            "ah_rb_4": "Are you enrolled in your State Medicaid program?",
            "ah_txt_4": "Please provide your Medicaid number?",
            "ah_rb_5": "“Do you or your spouse work?”",
            "Pcp_block": "Primary Care Physician (PCP)",
            "Medicare_image": "<img src=\"http://www.medicareinteractive.org/images/medicarecard.jpg\" alt=\"bad image\">",
            "Medicare_claim_no": "Medicare Claim Number",
            "Part_a_date": "Part A Effective Date",
            "Part_b_date": "Part B Effective Date",
            "Alt_format_block": "Alternate Format of Information",
            "prem_payment_blk_1": null,
            "prem_payment_blk_2": null,
            "billing_method": "How would you like to pay your monthly plan premium? Your options are to receive a bill or Automatic deduction from your monthly social security check” or through an Electronic Funds Transfer (EFT)",
            "eft_disc": null,
            "auto_ded_disc": null,
            "bill_radio": "Would you like to hear about how people with limited incomes may qualify for Extra Help to pay for their prescription drugs?",
            "billing_disc": null,
            "Prem_payment_disc": null,
            "Text_block_1": null,
            "new_to_medicare": null,
            "moved_out_of_area": null,
            "date_move_out_of_area": "Please enter date moved",
            "plan_to_move_outside_area": null,
            "state_helps_pay_premiums": null,
            "extra_help_drugs": null,
            "no_longer_eligible_drugs": null,
            "date_no_longer_eligible": "Please enter date you were no longer eligible",
            "move_out_of_long_term_care": null,
            "date_moved_out_of_long_term_care": "Please enter date moved out of long term care.",
            "left_pace": null,
            "date_left_pace": "Please enter date you left the program.",
            "lost_drug_coverage": null,
            "date_lost_drug_coverage": "Please enter date you lost your prescription coverage.",
            "leaving_union_employee": null,
            "date_leaving_union_employee": "Please enter date leaving coverage.",
            "pharmacy_assistance": null,
            "return_us": null,
            "date_return_us": "Please enter return date.",
            "plan_ending_contract": null,
            "no_statement_applies": null,
            "no_statement_apply_text": null,
            "Enroll_period_info": "Enrollment Period Information",
            "Perm_residence_info": "Permanent Residence Information",
            "Mailing_add": "Mailing Address Information",
            "basic_info_text": null,
            "Contact_Information": "Contact Information",
            "Communication Preferences": "Communication Preferences",
            "q_prefix": "Prefix",
            "q_first_name": "First Name",
            "q_mi": "MI",
            "q_last_name": "Last Name",
            "q_street_add_1": "Street Address",
            "q_street_add_2": "APT",
            "q_city": "City",
            "q_state": "State",
            "q_zip_code": "Zip Code",
            "q_email_1": "Email",
            "q_addl_email": "Additional Email Information",
            "Instructions": "Your Quote has been saved. <br> <br>By Clicking the 'Save this Quote Session For Later Use' link below you will be able to resume the Session in the future.",
            "app_assistance_blk": null,
            "app_assistance_rb": "Please select one of the following",
            "Sales_Rep": "Sales Representative or Agent Full Name",
            "Agent_Code": "Please enter Agent Code",
            "legal_rep_disc": null,
            "Disclosure_1": null,
            "Agreement_1": "Do you agree with these statements?",
            "Text Block 32": null,
            "beneficiary_agreement": null,
            "third_party_agreement": null,
            "Radio 15": null,
            "any_questions": null,
            "Agree_to_terms": "Electronic Signature",
            "medicare_disc": "Release of Information",
            "Post to Object Action 1": "Submit Application",
            "mailing_perm": "Is your mailing Address the same as your permanent address?",
            "mailing_blk": null,
            "p_street_add_1": "Street Address 1",
            "p_street_add_2": "Street Address 2",
            "p_zipcode": "ZIP Code",
            "filler_blk_1": null,
            "p_city": "City",
            "p_state": "State",
            "p_county": "County",
            "Alt_format": "If you require information in an alternate format, please select one of the options below. We will contact you to determine how to best meet your needs.",
            "Coverage_date": null,
            "Effective_date": "Requested Effective Date of Harvard Pilgrim Stride (HMO) coverage",
            "First Name": "First Name",
            "Middle Initial": "Middle Init.",
            "Last Name": "Last Name",
            "Gender": "Gender",
            "Birth_Date": "Birth Date",
            "Home_Phone": "Home Phone",
            "Alt_phone": "Alternate Phone Number",
            "Email": "Email Address",
            "Phone_contact": "May Harvard Pilgrim Health Care contact you by phone?",
            "Conf_email": "Would you like to receive a confirmation email about this application?",
            "pcp_tb": null,
            "psp_id": "PCP ID #",
            "pcp_name": "PCP Name",
            "current_patient": "Are you currently a patient of this physician?",
            "PCPButton": "Select PCP:",
            "m_street_add_1": "Mailing Address 1",
            "m_steet_add_2": "Mailing Address 2",
            "m_zipcode": "ZIP Code",
            "filer_blk_2": null,
            "m_city": "City",
            "m_state": "State",
            "m_county": "County",
            "value": "value",
            "size": "size",
            "filename": "filename"
        }
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
            "Enrollment Reason - NH": null,
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

    $scope.test_json = {
        "ContextId": "",
        "timeStamp": "2015-08-25T22:40:01.168Z",
        "userName": "jbridges@vlocity.com.dev",
        "userProfile": "System Administrator",
        "vlcPersistentComponent": {},
        "Enrollee Info": {
            "Year": "2015",
            "State": "MA",
            "County_1": "Bristol"
        },
        "plan": [{
            "productcode": "MDCRSCMA",
            "name": "Medicare Supplemental Core Plan",
            "ProductId": "01t55000000FImSAAW",
            "features": [{
                "name": "Inpatient Hospital Coverage",
                "value": "• Days 1-60: $1,260 Part A Deductible • Days 61-90: $0",
                "categoryName": "Key Benefits",
                "dataType": "Text",
                "description": "KEY",
                "attributeDisplaySequence": "1"
            }, {
                "name": "Skilled Nursing Facility",
                "value": "• Days 1-20: $0 • Days 21-100: $157.50 per day coinsurance",
                "categoryName": "Key Benefits",
                "dataType": "Text",
                "description": "KEY",
                "attributeDisplaySequence": "1"
            }, {
                "name": "Emergency Room Care",
                "value": "• $0 After Part B Deductible",
                "categoryName": "Key Benefits",
                "dataType": "Text",
                "description": "KEY",
                "attributeDisplaySequence": "1"
            }, {
                "name": "Primary Care and Specialist Visits",
                "value": "• $0 After Part B Deductible",
                "categoryName": "Key Benefits",
                "dataType": "Text",
                "description": "KEY",
                "attributeDisplaySequence": "1"
            }, {
                "name": "Preventive Care Services - As covered by Medicare",
                "value": "• $0",
                "categoryName": "Key Benefits",
                "dataType": "Text",
                "description": "KEY",
                "attributeDisplaySequence": "1"
            }, {
                "name": "Annual Wellness Exam",
                "value": "• $0",
                "categoryName": "Key Benefits",
                "dataType": "Text",
                "description": "KEY",
                "attributeDisplaySequence": "1"
            }, {
                "name": "Outpatient Service / Surgery",
                "value": "• $0 After Part B Deductible",
                "categoryName": "Key Benefits",
                "dataType": "Text",
                "description": "KEY",
                "attributeDisplaySequence": "1"
            }, {
                "name": "Diagnostic Procedures, Tests and Lab Services",
                "value": "• $0 After Part B Deductible",
                "categoryName": "Key Benefits",
                "dataType": "Text",
                "description": "KEY",
                "attributeDisplaySequence": "1"
            }, {
                "name": "Emergency Care Nationwide and In a Foreign Country",
                "value": "• $0",
                "categoryName": "Key Benefits",
                "dataType": "Text",
                "description": "KEY",
                "attributeDisplaySequence": "1"
            }, {
                "name": "Fitness Reimbursement",
                "value": "Up to $150 reimbursement for health club membership annually",
                "categoryName": "Key Benefits",
                "dataType": "Text",
                "description": "KEY",
                "attributeDisplaySequence": "1"
            }]
        }, {
            "productcode": "MDCRS1MA",
            "name": "Medicare Supplement 1 Plan",
            "ProductId": "01t55000000FImcAAG",
            "features": [{
                "name": "Inpatient Hospital Coverage",
                "value": "• $0",
                "categoryName": "Key Benefits",
                "dataType": "Text",
                "description": "KEY",
                "attributeDisplaySequence": "1"
            }, {
                "name": "Skilled Nursing Facility",
                "value": "• $0",
                "categoryName": "Key Benefits",
                "dataType": "Text",
                "description": "KEY",
                "attributeDisplaySequence": "1"
            }, {
                "name": "Emergency Room Care",
                "value": "• $0",
                "categoryName": "Key Benefits",
                "dataType": "Text",
                "description": "KEY",
                "attributeDisplaySequence": "1"
            }, {
                "name": "Primary Care and Specialist Visits",
                "value": "• $0",
                "categoryName": "Key Benefits",
                "dataType": "Text",
                "description": "KEY",
                "attributeDisplaySequence": "1"
            }, {
                "name": "Preventive Care Services - As covered by Medicare",
                "value": "• $0",
                "categoryName": "Key Benefits",
                "dataType": "Text",
                "description": "KEY",
                "attributeDisplaySequence": "1"
            }, {
                "name": "Annual Wellness Exam",
                "value": "• $0",
                "categoryName": "Key Benefits",
                "dataType": "Text",
                "description": "KEY",
                "attributeDisplaySequence": "1"
            }, {
                "name": "Outpatient Service / Surgery",
                "value": "• $0",
                "categoryName": "Key Benefits",
                "dataType": "Text",
                "description": "KEY",
                "attributeDisplaySequence": "1"
            }, {
                "name": "Diagnostic Procedures, Tests and Lab Services",
                "value": "• $0",
                "categoryName": "Key Benefits",
                "dataType": "Text",
                "description": "KEY",
                "attributeDisplaySequence": "1"
            }, {
                "name": "Emergency Care Nationwide and In a Foreign Country",
                "value": "• $0",
                "categoryName": "Key Benefits",
                "dataType": "Text",
                "description": "KEY",
                "attributeDisplaySequence": "1"
            }, {
                "name": "Fitness Reimbursement",
                "value": "Up to $150 reimbursement for health club membership annually",
                "categoryName": "Key Benefits",
                "dataType": "Text",
                "description": "KEY",
                "attributeDisplaySequence": "1"
            }]
        }],
        "error": "OK",
        "Plan Selection": {
            "output2": null,
            "quote_or_enroll": "EN"
        },
        "Eligibility_info_2": {
            "new_to_medicare": false,
            "moved_out_of_area": false,
            "date_move_out_of_area": null,
            "plan_to_move_outside_area": false,
            "state_helps_pay_premiums": false,
            "extra_help_drugs": false,
            "no_longer_eligible_drugs": false,
            "date_no_longer_eligible": null,
            "move_out_of_long_term_care": false,
            "date_moved_out_of_long_term_care": null,
            "left_pace": false,
            "date_left_pace": null,
            "lost_drug_coverage": false,
            "date_lost_drug_coverage": null,
            "leaving_union_employee": false,
            "date_leaving_union_employee": null,
            "pharmacy_assistance": false,
            "return_us": false,
            "plan_ending_contract": false,
            "date_return_us": null,
            "no_statement_applies": false,
            "Enroll_period_info": null
        },
        "Submit": {
            "Agreement_1": null,
            "agreement_yes_no": null,
            "Agree_to_terms": false
        },
        "Basic_Info": {
            "Contact_Information": {
                "First_Name": "Jun",
                "Middle_Initial": null,
                "Last_Name": "Gao",
                "Gender": "Female",
                "Birth_Date": null,
                "Home_Phone": null,
                "Alt_phone": null,
                "Email": null
            },
            "Communication Preferences": null
        },
        "Enrollee_Information_2": {
            "Perm_residence_info": {
                "p_street_add_1": null,
                "p_street_add_2": null,
                "p_zipcode": null,
                "p_city": null,
                "p_state": null,
                "p_county": "Bristol"
            },
            "Mailing_add": null
        },
        "application_assistance": {
            "app_assistance_rb": "Myself",
            "Sales_Rep": null,
            "Agent_Code": null
        }
    };

    $scope.mailing_address = {
        "ContextId": "00655000002RUmG",
        "timeStamp": "2015-08-27T00:11:52.134Z",
        "userName": "gpardo@vlocity.com.dev",
        "userProfile": "System Administrator",
        "vlcPersistentComponent": {},
        "Enrollee Info": {
            "Year": "2015",
            "State": "ME",
            "County_1": "Cumberland"
        },
        "Plan Selection": {
            "output2": [{
                "ProductName": "Stride Value Rx Plus (HMO)",
                "Product_Code": "STRRXPLUSME",
                "State": "ME",
                "ProductId": "01t55000000FIoYAAW",
                "attributes": [{
                    "name": "Annual Medical Deductible",
                    "value": "$150 yearly deductible",
                    "categoryName": "Medicare Key Benefits",
                    "dataType": "Text",
                    "description": "KEY",
                    "categoryDisplaySequence": "1",
                    "attributeDisplaySequence": "1"
                }, {
                    "name": "Primary Care Provider (PCP) Office Visit",
                    "value": "$0 copay per visit",
                    "categoryName": "Medicare Key Benefits",
                    "dataType": "Text",
                    "description": "KEY",
                    "categoryDisplaySequence": "1",
                    "attributeDisplaySequence": "2"
                }, {
                    "name": "Specialist Office Visit",
                    "value": "$40 copay per visit",
                    "categoryName": "Medicare Key Benefits",
                    "dataType": "Text",
                    "description": "KEY",
                    "categoryDisplaySequence": "1",
                    "attributeDisplaySequence": "3"
                }, {
                    "name": "Diagnostic Tests, X-Rays, Lab Services",
                    "value": "$10 copay for X-Rays $0 copay for lab services 20% coinsurance for MRI/CT scans",
                    "categoryName": "Medicare Key Benefits",
                    "dataType": "Text",
                    "description": "KEY",
                    "categoryDisplaySequence": "1",
                    "attributeDisplaySequence": "4"
                }, {
                    "name": "Outpatient Surgery",
                    "value": "$200 copay",
                    "categoryName": "Medicare Key Benefits",
                    "dataType": "Text",
                    "description": "KEY",
                    "categoryDisplaySequence": "1",
                    "attributeDisplaySequence": "5"
                }, {
                    "name": "Inpatient Hospital Care (includes Substance Abuse and Rehabilitation Services)",
                    "value": "Days 1-6, $265 copay each day",
                    "categoryName": "Medicare Key Benefits",
                    "dataType": "Text",
                    "description": "KEY",
                    "categoryDisplaySequence": "1",
                    "attributeDisplaySequence": "6"
                }, {
                    "name": "Skilled Nursing Facility (in a Medicare Certified Skilled Nursing Facility)",
                    "value": "Days 1-20, $0 copay per day Days 21-100,  $125 copay per day",
                    "categoryName": "Medicare Key Benefits",
                    "dataType": "Text",
                    "description": "KEY",
                    "categoryDisplaySequence": "1",
                    "attributeDisplaySequence": "7"
                }, {
                    "name": "Home Health Care",
                    "value": "$0 copay",
                    "categoryName": "Medicare Key Benefits",
                    "dataType": "Text",
                    "description": "KEY",
                    "categoryDisplaySequence": "1",
                    "attributeDisplaySequence": "8"
                }, {
                    "name": "Ambulance",
                    "value": "$250 copay per trip",
                    "categoryName": "Medicare Key Benefits",
                    "dataType": "Text",
                    "description": "KEY",
                    "categoryDisplaySequence": "1",
                    "attributeDisplaySequence": "9"
                }, {
                    "name": "Worldwide Emergency Coverage",
                    "value": "$65 copay (waived if admitted within 3 days)",
                    "categoryName": "Medicare Key Benefits",
                    "dataType": "Text",
                    "description": "KEY",
                    "categoryDisplaySequence": "1",
                    "attributeDisplaySequence": "9"
                }, {
                    "name": "Routine Eye Exam",
                    "value": "$15 copay, 1 visit per year",
                    "categoryName": "Medicare Key Benefits",
                    "dataType": "Text",
                    "categoryDisplaySequence": "1",
                    "attributeDisplaySequence": "10"
                }, {
                    "name": "Eyewear Benefit",
                    "value": "$150 annual allowance for eyewear",
                    "categoryName": "Medicare Key Benefits",
                    "dataType": "Text",
                    "categoryDisplaySequence": "1",
                    "attributeDisplaySequence": "11"
                }, {
                    "name": "Routine Hearing Exam",
                    "value": "$15 copay, 1 visit per year",
                    "categoryName": "Medicare Key Benefits",
                    "dataType": "Text",
                    "categoryDisplaySequence": "1",
                    "attributeDisplaySequence": "12"
                }, {
                    "name": "Fitness Benefit",
                    "value": "Up to $150 yearly Fitness club reimbursement",
                    "categoryName": "Medicare Key Benefits",
                    "dataType": "Text",
                    "categoryDisplaySequence": "1",
                    "attributeDisplaySequence": "13"
                }, {
                    "name": "Over-the-Counter Allowance",
                    "value": "$25 per month allowance towards over-the-counter health care related supplies",
                    "categoryName": "Medicare Key Benefits",
                    "dataType": "Text",
                    "categoryDisplaySequence": "1",
                    "attributeDisplaySequence": "14"
                }, {
                    "name": "Out-of-Pocket Limit",
                    "value": "$5,000 yearly out-of-pocket  limit",
                    "categoryName": "Medicare Key Benefits",
                    "dataType": "Text",
                    "categoryDisplaySequence": "1",
                    "attributeDisplaySequence": "15"
                }, {
                    "name": "Durable Medical Equipment",
                    "value": "20% coinsurance",
                    "categoryName": "Medicare Key Benefits",
                    "dataType": "Text",
                    "categoryDisplaySequence": "1",
                    "attributeDisplaySequence": "16"
                }, {
                    "name": "Annual Prescription Drug Deductible",
                    "value": "$0",
                    "categoryName": "Annual Prescription Drug Deductible",
                    "dataType": "Text",
                    "categoryDisplaySequence": "2",
                    "attributeDisplaySequence": "1"
                }, {
                    "name": "Initial Coverage:",
                    "value": "After your yearly deductible, you pay the following  until your total yearly drug costs reach $2,960. Total yearly drug costs are the total drug costs paid by both you and Harvard Pilgrim",
                    "categoryName": "Annual Prescription Drug Deductible",
                    "dataType": "Text",
                    "categoryDisplaySequence": "2",
                    "attributeDisplaySequence": "2"
                }, {
                    "name": "Tier 1 Preferred Generic 30-Day Supply-Retail Pharmacy 90-Day Supply-Mail Order",
                    "value": "$4 copay $8 copay",
                    "categoryName": "Annual Prescription Drug Deductible",
                    "dataType": "Text",
                    "categoryDisplaySequence": "2",
                    "attributeDisplaySequence": "3"
                }, {
                    "name": "Tier 2 Non Preferred Generic 30-Day Supply-Retail Pharmacy 90-Day Supply-Mail Or",
                    "value": "$10 copay $20 copay",
                    "categoryName": "Annual Prescription Drug Deductible",
                    "dataType": "Text",
                    "categoryDisplaySequence": "2",
                    "attributeDisplaySequence": "4"
                }, {
                    "name": "Tier 3 Preferred Brand 30-Day Supply-Retail Pharmacy 90-Day Supply-Mail Order Ph",
                    "value": "$45 copay $90 copay",
                    "categoryName": "Annual Prescription Drug Deductible",
                    "dataType": "Text",
                    "categoryDisplaySequence": "2",
                    "attributeDisplaySequence": "5"
                }, {
                    "name": "Tier 4 Non Preferred Brand 30-Day Supply-Retail Pharmacy 90-Day Supply-Mail Orde",
                    "value": "$95 copay $190 copay",
                    "categoryName": "Annual Prescription Drug Deductible",
                    "dataType": "Text",
                    "categoryDisplaySequence": "2",
                    "attributeDisplaySequence": "6"
                }, {
                    "name": "Tier 5 Specialty",
                    "value": "33% coinsurance",
                    "categoryName": "Annual Prescription Drug Deductible",
                    "dataType": "Text",
                    "categoryDisplaySequence": "2",
                    "attributeDisplaySequence": "7"
                }, {
                    "name": "Coverage Gap",
                    "value": "You pay the following until you have paid a total of $4,700* for covered Part D drugs",
                    "categoryName": "Annual Prescription Drug Deductible",
                    "dataType": "Text",
                    "categoryDisplaySequence": "2",
                    "attributeDisplaySequence": "8"
                }, {
                    "name": "-Tier 1 Preferred Generic 30-Day Supply-Retail Pharmacy 90-Day Supply-Mail Order",
                    "value": "$4 copay $8 copay",
                    "categoryName": "Annual Prescription Drug Deductible",
                    "dataType": "Text",
                    "categoryDisplaySequence": "2",
                    "attributeDisplaySequence": "9"
                }, {
                    "name": "-Tier 2 Non Preferred Generic 30-Day Supply-Retail Pharmacy 90-Day Supply-Mail O",
                    "value": "$10 copay $20 copay",
                    "categoryName": "Annual Prescription Drug Deductible",
                    "dataType": "Text",
                    "categoryDisplaySequence": "2",
                    "attributeDisplaySequence": "10"
                }, {
                    "name": "-Tier 3 Preferred Brand Tier 4 Non Preferred Brand Tier 5 Specialty",
                    "value": "Not Covered by StrideSM (HMO) in the Coverage Gap While you are in the coverage gap, the Medicare Coverage Gap Discount Program provides manufacturer discounts on brand name drugs.  You pay 45% of the negotiated price for brand name drugs plus a portion o",
                    "categoryName": "Annual Prescription Drug Deductible",
                    "dataType": "Text",
                    "description": "",
                    "categoryDisplaySequence": "2",
                    "attributeDisplaySequence": "11"
                }, {
                    "name": "Catastrophic Coverage",
                    "value": "You pay the following  for the remainder of the calendar year",
                    "categoryName": "Annual Prescription Drug Deductible",
                    "dataType": "Text",
                    "description": "",
                    "categoryDisplaySequence": "2",
                    "attributeDisplaySequence": "12"
                }, {
                    "name": "Generic Drugs (including Brand Drugs treated as Generic)",
                    "value": "Greater of 5% coinsurance or $2.65 copay",
                    "categoryName": "Annual Prescription Drug Deductible",
                    "dataType": "Text",
                    "description": "",
                    "categoryDisplaySequence": "2",
                    "attributeDisplaySequence": "13"
                }, {
                    "name": "All other Drugs",
                    "value": "$6.60 copay",
                    "categoryName": "Annual Prescription Drug Deductible",
                    "dataType": "Text",
                    "description": "",
                    "categoryDisplaySequence": "2",
                    "attributeDisplaySequence": "14"
                }],
                "MedicareAdvantageRates__TotalPrice": 58,
                "ID": "1",
                "vlcSelected": true,
                "$$hashKey": "object:1605"
            }],
            "quote_or_enroll": "EN"
        },
        "error": "OK",
        "Basic_Info": {
            "Contact_Information": {
                "First_Name": "John",
                "Middle_Initial": null,
                "Last_Name": "Smith",
                "Gender": "Male",
                "Birth_Date": "1970-01-16T08:00:00.000Z",
                "Home_Phone": null,
                "Alt_phone": null,
                "Email": "gpardo@vlocity.com"
            },
            "Communication Preferences": {
                "Phone_contact": "No",
                "Conf_email": "No"
            }
        },
        "Enrollee_Information_2": {
            "Perm_residence_info": {
                "p_street_add_1": "1 Main St.",
                "p_street_add_2": null,
                "p_zipcode": "04053",
                "p_city": "Merepoint",
                "p_state": "ME",
                "p_county": "Cumberland"
            },
            "Mailing_add": {
                "mailing_perm": "No",
                "mailing_blk": {
                    "m_street_add_1": "123 Other Street",
                    "m_steet_add_2": "Apt 123",
                    "m_zipcode": "04053",
                    "m_city": "Merepoint",
                    "m_state": "ME",
                    "m_county": "Cumberland"
                }
            }
        },
        "Eligibility_info_2": {
            "new_to_medicare": false,
            "moved_out_of_area": false,
            "date_move_out_of_area": null,
            "plan_to_move_outside_area": false,
            "state_helps_pay_premiums": false,
            "extra_help_drugs": false,
            "no_longer_eligible_drugs": false,
            "date_no_longer_eligible": null,
            "move_out_of_long_term_care": false,
            "date_moved_out_of_long_term_care": null,
            "left_pace": false,
            "date_left_pace": null,
            "lost_drug_coverage": false,
            "date_lost_drug_coverage": null,
            "leaving_union_employee": false,
            "date_leaving_union_employee": null,
            "pharmacy_assistance": false,
            "return_us": false,
            "plan_ending_contract": false,
            "date_return_us": null,
            "no_statement_applies": false,
            "Enroll_period_info": null
        },
        "Submit": {
            "Agreement_1": null,
            "application_source": null,
            "date_processed": null,
            "agreement_yes_no": null,
            "Agree_to_terms": false
        },
        "q_email_1": "gpardo@vlocity.com",
        "q_zip_code": "04053",
        "q_state": "ME",
        "q_city": "Merepoint",
        "q_street_add_1": "1 Main St.",
        "q_last_name": "Smith",
        "q_first_name": "John",
        "application_assistance": {
            "app_assistance_rb": "Myself",
            "Sales_Rep": null,
            "Agent_Code": null
        }
    };

    customRedirectCtrl.prototype.$scope = $scope;
}

customRedirectCtrl.prototype.excludeValues = function(scp,key,value) { 
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

customRedirectCtrl.prototype.isObject = function(value) {
    if(typeof value === 'object') {
        return true;
    }
    return false;
};

customRedirectCtrl.prototype.isArray = function(value) {
    if(value && value.constructor === Array) {
        return true;
    }
    return false;
};

customRedirectCtrl.prototype.outputCurrencySymbol = function(code) {
    return getCurrencySymbol(code);
};

customRedirectCtrl.prototype.getRevisedResponse = function(response) {
    delete response.plan;
    return true;
};

customRedirectCtrl.prototype.getReviewLabel = function(scp,key) {
    // Add or remove labels here that do not appear in the Omniscript Label Map:
    var customLabelMap = {
        "Checkbox_1": "Checkbox Number 1",
        "Checkbox_2": "Checkbox Number 2",
        "Text_2": "Text Element Number 2",
        "Medicare_info": "Medicare Information Custom"
    };
    var label = scp.bpTree.labelMap[key],
        customLabel = customLabelMap[key];
    // If the key exists in both the Omniscript labelMap and the customLabelMap, 
    // customLabelMap will take precedence:
    if(customLabel) {
        return customLabel;
    }else if(label) {
        return label;
    }
    return key;
};

customRedirectCtrl.prototype.formatValue = function(key,value) {
    // Create map of possible key strings to identify a date
    var dateStrs = ["date","year","month"];
    // Loop through map and format the value if key has substring in map
    for(var i = 0; i < dateStrs.length; i++) {
        if(key.toLowerCase().indexOf(dateStrs[i]) > -1) {
            var date = new Date(value);
            return date.toLocaleDateString();
        }
    }
    if(value == true) {
        return "Yes";
    }
    if(value == false) {
        return "No";
    }
    return value;
};

// Global Currency Map and function to convert currencyCode to proper currencySymbol
var currencyMap = [{
    "USD": "$"
}, {
    "CAD": "$"
}, {
    "EUR": "€"
}, {
    "GBP": "£"
}, {
    "JPY": "¥"
}, {
    "KRW": "₩"
}, {
    "CNY": "元"
}];

function getCurrencySymbol(code) {
    var currencySymbol = "";
    currencyMap.forEach(function(item) {
        if (item[code] !== undefined) {
            currencySymbol = item[code];
        }
    });
    return currencySymbol;
};

bpModule.controller("customRedirectCtrl", customRedirectCtrl);