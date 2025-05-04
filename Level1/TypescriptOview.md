# Level 1: TypeScript Fundamentals

---

## TypeScript vs JavaScript

| Feature              | JavaScript                            | TypeScript                                   |
|----------------------|----------------------------------------|----------------------------------------------|
| Type System          | Dynamic Typing                        | Static Typing (optional, with type inference) |
| Compilation          | Interpreted (runs directly in browser)| Compiled to JavaScript                       |
| Error Detection      | Runtime Errors                        | Compile-time Errors                          |
| OOP Support          | Limited (ES6+ improved)               | Strong with classes, interfaces, etc.        |
| Tooling              | Less Intellisense and autocomplete    | Rich IDE support with better tooling         |
| Learning Curve       | Easy                                  | Moderate if coming from JS                   |
| Popular Use          | Web Scripting                         | Large-scale application development          |

---

## Basic Syntax

### Variables
```typescript
let name: string = "Angular";
const PI: number = 3.14;
var isAvailable: boolean = true;
let data: any = "Can be any type";

let ids: number[] = [1, 2, 3];
let values: Array<string> = ["Angular", "React"];

let tuple: [number, string] = [1, "Angular"];


type User = {
  id: number;
  name: string;
};

let user: User = {
  id: 1,
  name: "John"
};
```
## Functions
### Normal Function
```typescript
function greet(name: string): string {
  return `Hello, ${name}`;
}
```
### Arrow Function
```typescript
const greet = (name: string): string => {
  return `Hello, ${name}`;
}
```
### Optional and Default Parameters
```typescript
function multiply(a: number, b: number = 2): number {
  return a * b;
}
```

## OOPS in Typescript

### Classes
```typescript
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

const person1 = new Person("Vinoth", 22);
person1.greet();
```
### Inheritance
```typescript
class Student extends Person {
  rollNo: number;

  constructor(name: string, age: number, rollNo: number) {
    super(name, age);
    this.rollNo = rollNo;
  }

  display(): void {
    console.log(`Roll No: ${this.rollNo}`);
  }
}

const student1 = new Student("Kumar", 21, 101);
student1.greet();
student1.display();

```
### Interface
```typescript
interface User {
  id: number;
  name: string;
  isAdmin: boolean;
}

const user1: User = {
  id: 1,
  name: "Vinoth",
  isAdmin: true
};
```
