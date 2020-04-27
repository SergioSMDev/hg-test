import {Injectable} from '@angular/core';

@Injectable()
export class NewsService {
  newsList = [
    {
      title: 'JavaScript Bundles and Performance',
      body: 'One of the ongoing problems with previous Angular versions is the relatively large file size of the app — more precisely, the file size of the generated JavaScript bundles. If you compare Angular to other libraries such as React or Vue.js, the Angular app is significantly bigger.\n' +
        '\n' +
        'At runtime, you probably won’t feel the difference. While Angular runtime performance is good, the loading can take longer because even a simple app can be relatively large.\n' +
        '\n' +
        'The size of the JavaScript bundles also hints at another problem: there\'s more to learn with Angular because Angular is a complete framework with many built-in developer tools, while other JavaScript libraries are more focused on components.\n' +
        '\n' +
        'So what could the Angular team do to mitigate the problems stemming from the large bundle files in earlier Angular versions?',
    },
    {
      title: 'Understanding Angular ViewEngine',
      body: 'Before Angular 8, the framework relied exclusively on ViewEngine (sometimes referred to as the "VE") to build and render code in browsers. Angular components are written using the TypeScript language. TypeScript is a superset of JavaScript, and we use a compiler or "transpiler" to render TypeScript into a dialect of JavaScript that runs in the browser. Angular historically has relied on ViewEngine to do this transpiling from TypeScript code into JavaScript.\n' +
        '\n' +
        'The Angular ViewEngine takes the templates and components and translates them into regular HTML and JavaScript so that the browser can interpret and display them.',
    },
    {
      title: 'Angular Ivy and Faster Mobile Apps',
      body: 'Smartphones and other mobile devices account for about half of the website traffic worldwide. A considerable percentage of these mobile devices access web pages from locations that suffer from slow internet connections.\n' +
        '\n' +
        'Developers can redesign existing apps to reduce the size of the downloadable assets and enhance the mobile user experience, but these changes can be difficult, expensive, and introduce unforeseen risks to their projects.\n' +
        '\n' +
        'By reducing the size of JavaScript bundles, Ivy becomes a welcome improvement for developers trying to speed up application startup.',
    },
    {
      title: 'Putting Ivy to Work',
      body: 'In Angular 9, the new Ivy compiler will finally be the default, so Angular apps built with Ivy will be faster and more efficient.\n' +
        '\n' +
        'In Angular 8, Ivy was optional, so you had to explicitly enable it by adding the following lines to the tsconfig.json file in the project folder:\n' +
        '\n' +
        '"angularCompilerOptions": {  \n' +
        '  "enableIvy": true  \n' +
        '}\n' +
        'And then you had to run the compiler by executing the ngc command inside the project folder:\n' +
        '\n' +
        'node_modules/.bin/ngc\n' +
        '\n' +
        'In Angular 9, setting the enableIvy option in the tsconfig.json file is no longer needed since the Ivy renderer is the default.',
    },
    {
      title: 'Selector-less Directives',
      body: 'One feature missing from the Angular 8 Ivy preview that had been available in ViewEngine was the ability to use selector-less directives as base classes.\n' +
        '\n' +
        'With Angular 9, this feature has been added to Ivy so that developers get the advantages of Ivy compilation, but don’t miss previous functionality.\n' +
        '\n' +
        'Consider the following pattern showing a decorated child class that inherits a constructor from an undecorated base class:\n' +
        '\n' +
        'export class BaseDir {  \n' +
        '  constructor(@Inject(ViewContainerRef) protected vcr: ViewContainerRef) {}  \n' +
        '}\n' +
        '\n' +
        '@Directive({  \n' +
        '  selector: \'[child]\',  \n' +
        '})  \n' +
        'export class ChildDir extends BaseDir {  \n' +
        '  // constructor inherited from BaseDir  \n' +
        '}\n' +
        'Angular ViewEngine already supports this pattern. Still, it was missing in Ivy\'s initial release: without the @directive annotation identifying the BaseDir class as a directive, the Ivy compiler didn\'t interpret information about its constructor parameters.\n' +
        '\n' +
        'Version 9 will now ship with his feature so that it becomes consistent across all of the Angular codebase.',
    },
    {
      title: 'Angular Diagnostics Improvements',
      body: 'Previously, the Angular Compiler generated both native TypeScript diagnostics and its own internal API diagnostics. But TypeScript diagnostics have benefited from recent enhancements, none of which were implemented in API diagnostics.\n' +
        '\n' +
        'Instead of supporting multiple formats, Angular 9 will simplify the process by converting all Angular TypeScript Compiler (ngtsc) diagnostics to the same TypeScript Diagnostics format.\n' +
        '\n' +
        'Version 9 will also keep apps from running into potential binding issues by using the schema registry to check DOM bindings. In addition, consistent template diagnostics will be usedto support the generation of highly descriptive error messages.',
    },
    {
      title: 'Dependency Injection Changes in Angular Core',
      body: 'Now let\'s take a look at some smaller, but no less welcome, updates and improvements we\'ll see in Angular 9.\n' +
        '\n' +
        'Angular Core has some enhancements too. For example, Angular 9 adds dependency injection support for the providedIn value:\n' +
        '\n' +
        '@Injectable({  \n' +
        '  providedIn: \'platform\'  \n' +
        '})  \n' +
        'class MyService {...}\n' +
        'Angular 9 extended the vocabulary for the providedIn property to also include the \'platform\' and \'any\' scopes.',
    },
    {
      title: 'Type-safe Changes in Angular Core',
      body: 'Angular 9 offers modified TestBed (the main unit test API for Angular apps) to replace the old get function with the new inject method. The get method still works, but is deprecated. TestBed.inject is the preferred option starting with Angular 9:\n' +
        '\n' +
        '// This code still works, but it\'s deprecated:  \n' +
        'TestBed.get(ChangeDetectorRef) // returns any\n' +
        '\n' +
        '// inject() now replaces get():  \n' +
        'TestBed.inject(ChangeDetectorRef) // returns ChangeDetectorRef\n' +
        'Currently, TestBed.get is not type-safe. Fixing TestBed.get would introduce a massive breaking change, so the Angular team decided to replace it with TestBed.inject.',
    },
  ];
}
