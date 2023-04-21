- # DevMetrics

DevMetrics is a mobile app that allows you to get metrics of your GitHub account. With DevMetrics, you can view your repositories, details of your account, and metrics.
## Installation

To run the app, you need to have Expo CLI installed. You can install Expo CLI with the following command:

```bash

npm install --global expo-cli
```



After installing Expo CLI, you can clone this repository and run the app with the following commands:

```bash

cd devmetrics_show-case-expo-router
npm install
expo start
```



Then, you can use your mobile device to scan the QR code that appears in the console to run the app.
## Technologies

DevMetrics is built with the following technologies:
- Expo
- React Native
- TypeScript
- Zustand
- Expo Router
- NativeWind
- Maestro

## Tests

To run the tests, you can run the following command:

```bash

maestro test .maestro/test.yml

```
 
## Usage

When you open the app, you will be asked to enter your GitHub username. Once you enter your username, you will be taken to the Home page where you can view your account details, repositories, and metrics.

On the Home page, you can navigate to the Repositories, Account Details, and Metrics pages using the buttons provided.

The Repositories page shows a list of your repositories. You can search for a repository by name and refresh the list using the pull-to-refresh feature.

The Account Details page shows your account details, such as your name, bio, company, and location.

The Metrics page shows your GitHub metrics, such as your total commits, total pull requests, and total issues.
## Contributing

Contributions to DevMetrics are welcome! If you find a bug or have a feature request, please open an issue on the GitHub repository. If you want to contribute code, please fork the repository and submit a pull request.
## License

DevMetrics is released under the MIT License. See the [LICENSE](https://github.com/%3Cyour-username%3E/devmetrics_show-case-expo-router/blob/main/LICENSE)  file for details.