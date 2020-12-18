# ./features/edit.feature

Feature: edit profile on the website
    As a user
    I want to be able to edit profile

    @success
    Scenario: User Success to edit profile on the website
        Given user browse signin page5
        And user fill email field5
        And user fill password field5
        And user click login button5
        And user click menu button5
        And user click profil button5
        And user click edit button5
        And user fill name field5
        And user fill business field5
        And user fill number field5
        When user click restore button5
        Then user see the profile edited5
