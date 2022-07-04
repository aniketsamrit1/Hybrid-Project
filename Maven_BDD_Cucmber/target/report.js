$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "JBk offline application",
  "description": "",
  "id": "jbk-offline-application",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "login test",
  "description": "",
  "id": "jbk-offline-application;login-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user will be login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters valid credentials",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should be on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdef.user_will_be_login_page()"
});
formatter.result({
  "duration": 4268161300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdef.user_enters_valid_credentials()"
});
formatter.result({
  "duration": 2210912100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdef.user_should_be_on_home_page()"
});
formatter.result({
  "duration": 7353200,
  "status": "passed"
});
});