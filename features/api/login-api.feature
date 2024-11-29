@SMOKE @API @P0
Feature: Login SMOKE APIs

  Scenario: Sucessfull index web page landing
    Given a GET request is made to endpoint "https://parabank.parasoft.com/parabank/index.htm"
    When a response is received with 200 status code
    Then it should return a valid HTML response with "ISO-8859-1" charset