# 📦 Angular Components

In Angular, **components** are the fundamental building blocks of the UI. Each component controls a section of the screen, called a **view**. An Angular application is composed of a tree of components.

---

## 🔧 Structure and Usages of a Component

### ✅ A typical Angular component includes:
- A **TypeScript** class (logic)
- An **HTML** template (view)
- A **CSS/SCSS** file (styles)
- A **Decorator** (`@Component`) that ties them together

### 🧱 Basic Structure

```typescript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Angular App';
}
```
```html
<!-- app.component.html -->
<h1>{{ title }}</h1>

```
```css
/* app.component.css */
h1 {
  color: royalblue;
}
```
### Usgaes on another HTML
```html
<!-- index.html or another component -->
<app-root></app-root>
```
---

## 🏷️ Selectors and Templtes
**🔹selectors**
- Defines the custom HTML tag representing the component.
- Used to embed one component into another.
```typescript
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
```
```html
<!-- Used in another component -->
<app-header></app-header>

```
**🔹 template and templateUrl**
- Defines the component's HTML.
- You can either write it inline with template or link a file with templateUrl.
```typescript
// Inline template
@Component({
  selector: 'app-inline',
  template: `<h2>Hello from inline template</h2>`
})
```
```typescript
// External template
@Component({
  selector: 'app-external',
  templateUrl: './external.component.html'
})
```
---
## 🔄 Component Lifecycle Hooks
| Hook               | Description                                                      |
|--------------------|------------------------------------------------------------------|
| `ngOnInit`         | Called once after the first `ngOnChanges`. Ideal for initialization logic. |
| `ngOnDestroy`      | Called just before the component is destroyed. Use it for cleanup. |
| `ngOnChanges`      | Called when any input-bound property changes.                    |
| `ngDoCheck`        | Custom change detection.                                         |
| `ngAfterViewInit`  | Called after component's view is initialized.                    |
| `ngAfterViewChecked` | Called after every check of component's view.                  |

### 🔍 Example: ngOnInit and ngOnDestroy
```typescript
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-timer',
  template: `<p>Timer: {{ counter }}</p>`
})
export class TimerComponent implements OnInit, OnDestroy {
  counter = 0;
  intervalId: any;

  ngOnInit() {
    console.log('TimerComponent initialized');
    this.intervalId = setInterval(() => {
      this.counter++;
    }, 1000);
  }

  ngOnDestroy() {
    console.log('TimerComponent destroyed');
    clearInterval(this.intervalId);
  }
}
```
### 🔁 `ngOnChanges` Example

`ngOnChanges` is called **whenever an input property changes**. It provides a `SimpleChanges` object containing current and previous values of the changed inputs.

#### Example:

```typescript
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<p>Current count: {{ count }}</p>`
})
export class ChildComponent implements OnChanges {
  @Input() count: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes detected:', changes);
  }
}
```
```html
<!-- app.component.html -->
<app-child [count]="counter"></app-child>
<button (click)="counter = counter + 1">Increment</button>
```
```typescript
export class AppComponent {
  counter = 0;
}
```
#### Outout in console
```yaml
Changes detected: {
  count: {
    previousValue: 0,
    currentValue: 1,
    firstChange: false
  }
}
```
### 🛠️ ngDoCheck Example

`ngDoCheck` is called every time Angular runs its change detection, even if no input properties have changed. Use it for custom change detection logic.

#### Example:

```typescript
import { Component, Input, DoCheck } from '@angular/core';

@Component({
  selector: 'app-checker',
  template: `<p>Name: {{ name }}</p>`
})
export class CheckerComponent implements DoCheck {
  @Input() name: string = '';
  oldName: string = '';

  ngDoCheck(): void {
    if (this.name !== this.oldName) {
      console.log(`Name changed from ${this.oldName} to ${this.name}`);
      this.oldName = this.name;
    }
  }
}
```
```html
<!-- app.component.html -->
<app-checker [name]="userName"></app-checker>
<input [(ngModel)]="userName" placeholder="Enter name" />

```
```typescript
export class AppComponent {
  userName = '';
}
```
#### Outout in console
```yaml
Name changed from  to John

```
