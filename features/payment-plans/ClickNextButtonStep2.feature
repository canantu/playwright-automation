Feature: Click next button on step 2

    Background: 
        Given User is on payment step page
    
    Scenario: 
        When user selects a payment plan
        And user clicks next button
        Then user is navigated to review step

        
