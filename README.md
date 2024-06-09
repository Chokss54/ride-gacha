# ride-gacha

Welcome to the Ride Gacha Tool! This tool helps to automatically assign passengers to drivers based on their locations, making it easy to arrange transportation for all members after meetings or events. The Ride Gacha Tool is designed to streamline the process of arranging transportation for large group of users. By inputting driver and passenger information, the tool automatically matches passengers with drivers who live nearby, saving time and effort.

## Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/ride-gacha.git
    ```

2. Navigate to the project directory:
    ```bash
    cd ride-gacha
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Run development server:
    ```bash
    npm start
    ```

## Environment Variables

You need to set up a Google API Key for the Google Maps JavaScript API. Create a `.env` file in the root of your project and add your API key:
```env
REACT_APP_GOOGLE_API_KEY=your-google-api-key