# Level 1: Angular Overview

## AngularJS vs Angular

| Feature                  | AngularJS (1.x)                         | Angular (2+)                              |
|--------------------------|----------------------------------------|-------------------------------------------|
| Architecture             | MVC (Model-View-Controller)            | Component-Based Architecture              |
| Language                 | JavaScript                             | TypeScript                                |
| Mobile Support           | No                                     | Yes                                       |
| Performance              | Slower due to two-way binding          | Faster with unidirectional data flow      |
| Dependency Injection     | Limited                                | Built-in and more powerful                |
| Tooling Support          | Basic                                  | CLI, RxJS, AoT, Ivy, etc.                 |
| Learning Curve           | Steep due to different syntax          | Moderate with good documentation          |
| Community Support        | Diminishing                            | Active and growing                        |
| Modularity               | Minimal                                | Fully modular                             |

---

## Examples for Key Differences

### 1. **Component Declaration**

**AngularJS (1.x):**
```javascript
angular.module('app', [])
  .controller('MainCtrl', function($scope) {
    $scope.message = 'Hello from AngularJS!';
  });
```
**AngularJS (2+):**
```javascript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>{{ message }}</h1>`
})
export class AppComponent {
  message = 'Hello from Angular!';
}
```
---

## Advantages of Angular

1. **Component-Based Architecture**  
   Encourages reusable, modular UI development.

2. **TypeScript Support**  
   Improves tooling, type safety, and developer experience.

3. **Two-Way Data Binding**  
   Synchronizes the model and the view seamlessly.

4. **Dependency Injection**  
   Promotes maintainable and testable code.

5. **Angular CLI**  
   Powerful command-line interface for scaffolding, testing, and deploying apps.

6. **RxJS and Observables**  
   Enables reactive programming and efficient data streams handling.

7. **Ahead-of-Time (AoT) Compilation**  
   Boosts application performance by compiling HTML and TypeScript during build time.

8. **Cross-Platform Development**  
   Supports web, mobile web, native mobile (Ionic), and desktop (Electron).

9. **Robust Ecosystem**  
   Backed by Google with a large community and rich third-party libraries.

10. **Built-in Routing and Forms Handling**  
    Provides seamless navigation and powerful form validation.

---
