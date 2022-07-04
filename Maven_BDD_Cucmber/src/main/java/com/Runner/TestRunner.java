package com.Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(
		features="src/main/java/com/feature",
		glue="com.stepdeps",
		plugin="html:target",
		monochrome=true
		)

public class TestRunner {

}
