# Directives in Angular

Angular directives are instructions in the DOM that enhance the behavior or appearance of elements. There are **three types**:

---

## 1. Structural Directives

Structural directives **change the DOM layout** by adding or removing elements.

### 🔹 `*ngIf`
Conditionally includes a template based on the value.

**Example:**
```html
<div *ngIf="isLoggedIn">Welcome back!</div>
```
### 🔹 `*ngFor`
Repeats a node for each item in a list.

**Example:**
```html
<ul>
  <li *ngFor="let item of items">{{ item }}</li>
</ul>
```
### 🔹 `*ngSwitch`
Displays one of many elements based on a switch expression.

**Example:**
```html
<div [ngSwitch]="role">
  <p *ngSwitchCase="'admin'">Admin Panel</p>
  <p *ngSwitchCase="'user'">User Dashboard</p>
  <p *ngSwitchDefault>Access Denied</p>
</div>

```
---
## 2. Attribute Directives
Attribute directives change the appearance or behavior of elements.

### 🔹 `*ngStyle`
Applies inline styles dynamically.

**Example:**
```html
<div [ngStyle]="{ 'color': isActive ? 'green' : 'gray' }">
  Status
</div>

```
### 🔹 `*ngClass`
Adds or removes CSS classes dynamically.

**Example:**
```html
<div [ngClass]="{ 'highlight': isSelected, 'error': hasError }">
  Feedback Message
</div>

```
## 2. Comparison Table
| Type                | Purpose                               | Affects DOM? | Example              |
| ------------------- | ------------------------------------- | ------------ | -------------------- |
| Structural          | Add/remove elements from the DOM      | ✅ Yes        | `*ngIf`, `*ngFor`    |
| Attribute           | Modify element behavior/appearance    | ❌ No         | `ngStyle`, `ngClass` |
| Component Directive | Custom components with own logic/view | ✅ Yes        | `<app-user>`         |

