# Level 1: Angular Setup

---

## ✅ Installation of Node.js

### 🔧 Steps to Install Node.js:
1. Visit the official website: [https://nodejs.org/](https://nodejs.org/)
2. Download the **LTS (Long Term Support)** version.
3. Run the installer and follow the setup wizard.
4. After installation, verify it using the terminal:

```bash
node -v
npm -v
```
---

## 📁 Important Files in Angular Project

After creating a project using Angular CLI (`ng new your-app`), you will see several files and folders. Below are the key ones:

---

### `angular.json`
- Configuration file for Angular CLI.
- Manages project structure, build settings, test config, file paths, styles, and scripts.

#### Example:
```json
{
  "projects": {
    "your-app": {
      "architect": {
        "build": {
          "options": {
            "outputPath": "dist/your-app",
            "index": "src/index.html",
            "main": "src/main.ts",
            "styles": ["src/styles.css"]
          }
        }
      }
    }
  }
}
```
### `main.ts`
- Entry point of the Angular application.
- Bootstraps the root module (AppModule).

```javascript
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
```
### `index.html`
- Single HTML page used as the shell of the Angular app.
- Contains the <app-root> tag where Angular will load the root component.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>AngularApp</title>
</head>
<body>
  <app-root></app-root>
</body>
</html>

```
---
# ⚙️ About JIT and AOT in Angular Development

In Angular, the application’s code written in TypeScript and HTML templates needs to be compiled into JavaScript before it runs in the browser. Angular provides two types of compilation:

---

## 🔄 JIT (Just-In-Time) Compilation

**JIT** compilation means the code is compiled in the browser at **runtime**.

### 🔹 Characteristics:
- Compilation happens when the application is running in the browser.
- Ideal for **development** environments.
- Allows **faster build** times since no compilation is done beforehand.
- Provides better **debugging support** with readable error messages.

### 🧪 Use Case:
- When you run the development server:
```bash
ng serve
```
## 📌 Pros:
- Fast rebuilds during development.
- Easy to debug due to human-readable code.

## ⚠️ Cons:
- Slower initial load time.
- Larger bundle size.
- Not suitable for production deployment.
  
## AOT (Ahead-Of-Time) Compilation

**AOT** compilation means the code is compiled before the browser downloads and runs it, during the **build time**..

### 🔹 Characteristics:
- Converts Angular HTML and TypeScript code into JavaScript at build time.
- Ideal for production environments.
- Improves application performance and reduces load time.
- Catches template errors early in the build process.

### 🧪 Use Case:
- When you build the application for production:
```bash
ng build --prod
```
## 📌 Pros:
- Faster app launch time in the browser.
- Smaller and optimized bundle size.
- Enhanced security (no need to compile in the browser).

## ⚠️ Cons:
- Slower build process compared to JIT.
- Debugging can be harder due to minified and optimized code.
---
