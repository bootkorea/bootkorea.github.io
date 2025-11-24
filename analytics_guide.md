# Google Analytics (GA4) Setup Guide

To track visitors on your portfolio, follow these steps to set up Google Analytics 4 (GA4).

## 1. Create a Google Analytics Account
1. Go to [analytics.google.com](https://analytics.google.com/).
2. Click **Start measuring**.
3. Create an account (e.g., "Portfolio").
4. Create a property (e.g., "bootkorea.github.io").

## 2. Get Your Measurement ID
1. In your property, go to **Data Streams**.
2. Select **Web**.
3. Enter your website URL (`bootkorea.github.io`) and stream name.
4. Create the stream.
5. Copy the **Measurement ID** (starts with `G-XXXXXXXXXX`).

## 3. Install `react-ga4`
Run this command in your project:
```bash
npm install react-ga4
```

## 4. Initialize GA in `src/App.jsx`
Update your `App.jsx` to initialize GA when the app starts.

```javascript
import ReactGA from "react-ga4";

// ... inside App component, before return
useEffect(() => {
  ReactGA.initialize("YOUR-MEASUREMENT-ID"); // Replace with your ID
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
}, []);
```

## 5. Track Page Views (Optional but Recommended)
Since you are using `react-router-dom`, you might want to track route changes.

```javascript
import { useLocation } from 'react-router-dom';

// Inside your AnimatedRoutes or App component
const location = useLocation();

useEffect(() => {
  ReactGA.send({ hitType: "pageview", page: location.pathname });
}, [location]);
```
