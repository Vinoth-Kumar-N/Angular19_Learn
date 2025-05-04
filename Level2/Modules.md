# 📦 Angular Modules

## 📁 `app.module.ts` – Root Module of Angular App

Every Angular application has at least one module: the **AppModule**. It's the root module that tells Angular how to assemble the application.

### ✅ Structure of `app.module.ts`

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent   // All components, directives, and pipes used in this module
  ],
  imports: [
    BrowserModule, // Required for browser-based apps
    FormsModule    // Enables Template-driven Forms
  ],
  providers: [],    // Services available for dependency injection
  bootstrap: [AppComponent] // The root component to bootstrap
})
export class AppModule { }
```
## 🔧 Key Properties
| Property       | Description                                                      |
| -------------- | ---------------------------------------------------------------- |
| `declarations` | All components, directives, and pipes that belong to this module |
| `imports`      | Other modules whose exported classes are needed                  |
| `providers`    | Services for dependency injection                                |
| `bootstrap`    | The root component Angular creates and inserts into `index.html` |

---
# 🚀 Angular App Loading Process
When the Angular application starts, the browser loads the index.html, which triggers a sequence of steps that leads to bootstrapping the Angular application.

**🗂️ 1. index.html**
`Located in /src/index.html, it’s the entry point to the application from the browser.`
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>MyAngularApp</title>
  <base href="/">
</head>
<body>
  <app-root></app-root> <!-- Placeholder for the root component -->
</body>
</html>
```
- The <app-root> is a selector for the root Angular component defined in AppComponent.

**🌳 2. main.ts**
`main.ts`is the main entry point for the Angular app. It initializes the app and tells Angular which module to bootstrap.
```typescript
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
```
- This line bootstraps the AppModule, the root module.

- **🧩 3. Bootstrapping AppComponent**
Inside `app.module.ts`, we define:
```typescript
bootstrap: [AppComponent]
```
| File            | Role                                                    |
| --------------- | ------------------------------------------------------- |
| `index.html`    | Contains `<app-root>` placeholder                       |
| `main.ts`       | Bootstraps the Angular app by loading `AppModule`       |
| `app.module.ts` | Root module that declares and bootstraps `AppComponent` |
| `AppComponent`  | First component rendered in the app                     |

