package stepdef;

import static org.junit.Assert.assertTrue;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.RestAssured;
import io.restassured.response.Response;


public class Step_definition 
{  public String apilink;
   public String response;
	@Given("Rates API for Latest foreign exchange rates")
	public void rates_API_for_Latest_foreign_exchange_rates() {
 //provide the api link for latest foreign exchange rates 
		apilink="https://api.ratesapi.io/api/latest";
	
	}

	@When("api is available")
	public void api_is_available() {
	//Fetching the response from the server by hitting api
		Response res;
		res= RestAssured.get(apilink);
		String sbody=res.getBody().asString();
	//Printing the response in a console
		System.out.println("Response in String for correct api: "+sbody);
		response=sbody;
	    
		 
	}

	@Then("asserting the success of response")
	public void asserting_the_success_of_response() {
	//assert the fetched response for success status
		assertTrue(response.contains("EUR"));
	  
	}

   @Then("asserting the failure of response")
   public void asserting_the_failure_of_response() {
	//assert the fetched response for the currency not present in a api 
    //to check whether it is failing the test or not  
	   assertTrue(response.contains("BTN"));
	   
}

  @When("An incorrect api Url is provided")
   public void an_incorrect_api_Url_is_provided() {
	//Fetching the response by hitting the incorrect api
	Response res;
	res= RestAssured.get("https://api.ratesapi.io/api/");
	String sbody=res.getBody().asString();
	//printing the response in a console
    System.out.println("Response in String for incorrect api: "+sbody);
	response=sbody;
    }
 
  @Then("Assert the correct response supplied by call")
   public void assert_the_correct_response_supplied_by_call() {
	  //assert the success status on the basis of response  
	 assertTrue(response.contains("does not match format"));
}


@Given("Rates API for Specific date foreign exchange rates")
public void rates_API_for_Specific_date_foreign_exchange_rates() {
	//provide the api link for specific date foreign exchange rates 
	 apilink="https://api.ratesapi.io/api/2010-01-12";
		
}

@When("Api Url is available for specific date")
public void api_Url_is_available_for_specific_date() {
	//Fetching the response from the server by hiting the api
	Response res;
	res= RestAssured.get(apilink);
	String sbody=res.getBody().asString();
	//printing the response in a console
    System.out.println("correct Api Response for Specific date in String: "+sbody);
    //assigning the api result in a response variable
	response=sbody;
    
}

@Then("Assert the success status for specific date url")
public void assert_the_success_status_for_specific_date_url() {
	//assert the fetched response for success status
	 assertTrue(response.contains("2010-01-12"));
} 


@Then("Assert the failure status for specific date url")
public void assert_the_failure_status_for_specific_date_url() {
	//assert the fetched response for the date not present in a api 
    //to check whether it is failing the test or not  
	 assertTrue(response.contains("2016-01-10"));
}
@When("future date provided for specific date")
public void future_date_provided_for_specific_date() {
	//fetching the response for future date by hiting the api 
	Response res;
	res= RestAssured.get("https://api.ratesapi.io/api/2016-01-12");
	String sbody=res.getBody().asString();
	//printing the response in a console
    System.out.println("correct Api Response for Future date in String: "+sbody);
    //assigning the api result in a response variable
	response=sbody;
}

@Then("Assert the correct response status for specific date url")
public void assert_the_correct_response_status_for_specific_date_url() {
	//assert the success status on the basis of response
	 assertTrue(response.contains("2016-01-12"));
}

}

 