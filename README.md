# iTunes App
## How it works
In this project, you can view many albums. If you are searching for a specific album, you can go to the Search section, located in the top right corner of the screen.
## Limitation
It is well-known that we should not add buttons that do not serve a purpose. In this case, a "see more" button was added, which has no impact on the user experience. It only attempts to simulate a button that takes the user to a page where they can view all the albums they searched for without any limitations.<br>
The search bar was designed to show the albums as soon as the user starts typing. However, there may be a delay due to a timer that waits at least 1 second before making another request to the API.
## Testing
### Unit testing
Tests were implemented to validate the correct functionality of some methods. A get request was attempted to be mocked, but it took more time than expected, and the decision was made to continue building the project.
### Integrations Testing
No integration testing was added, but it is known that it could have been done, considering the behavior of ```SearchBar.js``` and ```ShowContent.js```, as they share the same state.
### End to end testing
No end-to-end testing was conducted.