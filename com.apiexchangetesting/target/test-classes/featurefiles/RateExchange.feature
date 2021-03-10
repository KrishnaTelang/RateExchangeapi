Feature: Exchange Rates API Testing

  @SC1
  Scenario: Foreign Exchange Rate Type 1
    Given Rates API for Latest foreign exchange rates
    When api is available
    Then asserting the success of response

  @SC2
  Scenario: Foreign Exchange Rate Type 2
    Given Rates API for Latest foreign exchange rates
    When api is available
    Then asserting the failure of response

  @SC3
  Scenario: Foreign Exchange Rate Type 3
    Given Rates API for Latest foreign exchange rates
    When An incorrect api Url is provided
    Then Assert the correct response supplied by call

  @SC4
  Scenario: Foreign Exchange Rate for Specific date type 1
    Given Rates API for Specific date foreign exchange rates
    When Api Url is available for specific date
    Then Assert the success status for specific date url

  @SC5
  Scenario: Foreign Exchange Rate for Specific date type 2
    Given Rates API for Specific date foreign exchange rates
    When Api Url is available for specific date
    Then Assert the failure status for specific date url

  @SC6
  Scenario: Foreign Exchange Rate for Specific date type 3
    Given Rates API for Specific date foreign exchange rates
    When future date provided for specific date
    Then Assert the correct response status for specific date url
