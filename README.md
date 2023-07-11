# React Quiz

This is a React-based quiz application that allows users to answer multiple-choice questions within a given time limit. The application fetches questions from a JSON server and keeps track of the user's progress, points, and highscore.

## Installation

1. Clone the repository:
```
git clone <repository_url>
```

2. Navigate to the project directory:
```
cd react-quiz
```

3. Install the dependencies:
```
npm install
```

## Usage

1. Start the JSON server to serve the quiz questions:
```
npm run server
```
   The server will run on `http://localhost:8000` and provide the quiz questions from the `data/questions.json` file.

2. Start the React application:
```
npm start
```
   The application will be accessible at `http://localhost:3000`.

3. Answer the quiz questions within the given time limit and try to achieve a high score.

## Features

- Fetches quiz questions from a JSON server using the `fetch` API.
- Tracks the user's progress, points, and highscore.
- Implements a countdown timer for each question.
- Allows users to select one option as their answer.
- Calculates and updates the points based on the correctness of the answer.
- Provides feedback on the correctness of the answer after submission.
- Automatically moves to the next question after submitting an answer.
- Displays the final score and updates the highscore if necessary.
- Provides an option to restart the quiz and play again.

## Technologies Used

- React
- JSON Server
- react-scripts (Create React App)
- @testing-library/react (for testing)
- @testing-library/jest-dom (for testing)
- @testing-library/user-event (for testing)
- web-vitals

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please feel free to open an issue or submit a pull request.


## Acknowledgments

- This project was created as a sample quiz application for learning and demonstration purposes.
- The JSON server and quiz questions are provided as examples and can be replaced with actual data for a real-world quiz application.
- Special thanks to the React community for providing excellent tools and resources.
