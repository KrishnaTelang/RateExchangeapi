$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/featurefiles/RateExchange.feature");
formatter.feature({
  "name": "Exchange Rates API Testing",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Foreign Exchange Rate Type 1",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SC1"
    }
  ]
});
formatter.step({
  "name": "Rates API for Latest foreign exchange rates",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdef.Step_definition.rates_API_for_Latest_foreign_exchange_rates()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "api is available",
  "keyword": "When "
});
formatter.match({
  "location": "stepdef.Step_definition.api_is_available()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "asserting the success of response",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.Step_definition.asserting_the_success_of_response()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Foreign Exchange Rate Type 2",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SC2"
    }
  ]
});
formatter.step({
  "name": "Rates API for Latest foreign exchange rates",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdef.Step_definition.rates_API_for_Latest_foreign_exchange_rates()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "api is available",
  "keyword": "When "
});
formatter.match({
  "location": "stepdef.Step_definition.api_is_available()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "asserting the failure of response",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.Step_definition.asserting_the_failure_of_response()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat stepdef.Step_definition.asserting_the_failure_of_response(Step_definition.java:46)\r\n\tat ✽.asserting the failure of response(file:///C:/Users/DELL%20PC/eclipse-workspace/com.apiexchangetesting/src/test/resources/featurefiles/RateExchange.feature:13)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Foreign Exchange Rate Type 3",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SC3"
    }
  ]
});
formatter.step({
  "name": "Rates API for Latest foreign exchange rates",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdef.Step_definition.rates_API_for_Latest_foreign_exchange_rates()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "An incorrect api Url is provided",
  "keyword": "When "
});
formatter.match({
  "location": "stepdef.Step_definition.an_incorrect_api_Url_is_provided()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Assert the correct response supplied by call",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.Step_definition.assert_the_correct_response_supplied_by_call()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Foreign Exchange Rate for Specific date type 1",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SC4"
    }
  ]
});
formatter.step({
  "name": "Rates API for Specific date foreign exchange rates",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdef.Step_definition.rates_API_for_Specific_date_foreign_exchange_rates()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Api Url is available for specific date",
  "keyword": "When "
});
formatter.match({
  "location": "stepdef.Step_definition.api_Url_is_available_for_specific_date()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Assert the success status for specific date url",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.Step_definition.assert_the_success_status_for_specific_date_url()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Foreign Exchange Rate for Specific date type 2",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SC5"
    }
  ]
});
formatter.step({
  "name": "Rates API for Specific date foreign exchange rates",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdef.Step_definition.rates_API_for_Specific_date_foreign_exchange_rates()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Api Url is available for specific date",
  "keyword": "When "
});
formatter.match({
  "location": "stepdef.Step_definition.api_Url_is_available_for_specific_date()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Assert the failure status for specific date url",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.Step_definition.assert_the_failure_status_for_specific_date_url()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat stepdef.Step_definition.assert_the_failure_status_for_specific_date_url(Step_definition.java:99)\r\n\tat ✽.Assert the failure status for specific date url(file:///C:/Users/DELL%20PC/eclipse-workspace/com.apiexchangetesting/src/test/resources/featurefiles/RateExchange.feature:31)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Foreign Exchange Rate for Specific date type 3",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SC6"
    }
  ]
});
formatter.step({
  "name": "Rates API for Specific date foreign exchange rates",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdef.Step_definition.rates_API_for_Specific_date_foreign_exchange_rates()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "future date provided for specific date",
  "keyword": "When "
});
formatter.match({
  "location": "stepdef.Step_definition.future_date_provided_for_specific_date()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Assert the correct response status for specific date url",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.Step_definition.assert_the_correct_response_status_for_specific_date_url()"
});
formatter.result({
  "status": "passed"
});
});