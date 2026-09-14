Feature: View product landing page

    Background:
        Given User navigates to https://qa.sep.tdtm.cydeo.com/

    Scenario: 
        Then Authentication menü is displayed
        When User enters username
        And User enters password
        And User click sign-in button
        Then User is navigated to start application step page