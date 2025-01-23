@REGRESSION @SMOKE @E2E @P0
Feature: Login page functionality

  Background:
    Given user navigates to login form
    # And Ensure all inputs in the "Login" page are blank

  Scenario: Remember Me checkbox is checked by default
    Then Remember Me checkbox is already checked

  Scenario: Input fields Email and Password must be mandatory
    When user clicks on Sign In button
    Then the message "Invalid email or password." is displayed

  Scenario: The user enters invalid Password credential
    When user enters valid Email credential
    And user enters invalid Password credential
    And user clicks on Sign In button
    Then the message "Invalid email or password." is displayed

  Scenario: The user enters invalid Email credential
    When user enters invalid Email credential
    And user enters valid Password credential
    And user clicks on Sign In button
    Then the message "Invalid email or password." is displayed

  Scenario: The user logs in with valid credentials
    When user enters valid Email credential
    And user enters valid Password credential
    And user clicks on Sign In button
    Then the page url contains "/collections"
    