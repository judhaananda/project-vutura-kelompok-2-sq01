# ./features/logout.feature

Feature:    
    As a user
    I want to be able to logout

    @success
    Scenario: User success to logout on the website
        Given user browse login page2
        And user fill email field2
        And user fill password field2
        And user click login button2
        And user click burgermenu button2
        When user click logout button2
        Then user can see login page