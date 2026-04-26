# Harmajen Premium Clothing Brand Prototype

This is a high-fidelity web prototype for **Harmajen**, a premium minimalist clothing brand inspired by the elegant and minimalist style of Charles & Keith.

## Android Studio / Mobile Integration

To demonstrate this prototype as an Android application:
1. Create a new Android Studio project with an **Empty Activity**.
2. Add a `WebView` to your layout.
3. Configure the `WebView` to load the deployed URL of this project.
4. Enable JavaScript in the `WebView` settings.

```kotlin
// Example Kotlin code for Android Studio WebView
val myWebView: WebView = findViewById(R.id.webview)
myWebView.settings.javaScriptEnabled = true
myWebView.loadUrl("https://your-deployed-app-url.com")
```

## Features
- **Modern E-Commerce Flow**: Home, Shop, Product Details, Cart, and Checkout.
- **Prestige Branding**: Minimalist aesthetic with a sophisticated color palette (Beige, Black, Gold).
- **Interactive Experience**: Smooth transitions and animations using `motion`.
- **Administrative Control**: Prototype Admin Dashboard to manage orders and products.
- **Service Center**: Refund/Return requests and Order Tracking.

## Technologies Used
- React 19
- Tailwind CSS 4
- Lucide React (Icons)
- Framer Motion (Animations)
- React Router (Navigation)
- LocalStorage (State Persistence for demo)
