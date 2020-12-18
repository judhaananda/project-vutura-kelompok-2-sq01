# ./features/editfail.feature

Feature: edit profile on the website
    As a user
    I want to be able to edit profile

    @failed
    Scenario: User failed to edit profile on the website
        Given user browse signin page6
        And user fill email field6
        And user fill password field6
        And user click login button6
        And user click menu button6
        And user click profil button6
        And user click edit button6
        And user fill name field6
        And user fill business field6
        And user fill number field6
        When user click restore button6
        Then user see failed the profile edited
