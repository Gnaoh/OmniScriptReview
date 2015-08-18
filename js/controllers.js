"use strict";

/* Controllers */

var bpModule = angular.module("omniScriptReview", ['ui.bootstrap']);

bpModule.controller("omniScriptReviewCtrl", function($scope, $modal, $log) {
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

    $scope.medicare_supplemental_2 = {
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
        "vlcPersistentComponent": {},
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

    $scope.medical_advantage_2 = {
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

    $scope.medical_advantage_3 = {
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
});