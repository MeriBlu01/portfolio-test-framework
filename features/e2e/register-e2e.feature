@SMOKE @E2E @P0
Feature: Register page functionality

  Scenario: Navigate to Register page from Login page
    Given user navigates to login form
    When user clicks on Create a new account link
    Then the page url contains "/sign_up"