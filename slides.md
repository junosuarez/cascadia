# TypeScript: The Good Parts
<img src="tower-of-babel.jpg" />

// my name is Jason, jden on the internet. I'm a healthcare hacker and a javascript engineer at Agile Diagnosis, where we help doctors practice better medicine. Since this is a developer audience, you'll appreciate what I mean when I say our product is like an IDE for doctors.

// In a sense, what I want to talk about today is helping developers practice better software. Developer productivity is very important to me, because I have a confession to make. I think there are things in life more important than writing software.

## work on shit that matters

<img src="images/logos.jpg" />

"Solving problems for those in the world with the least problems" [[1]](http://venturevillage.eu/grandma-tech-hype#)

// Lots of people are writing a lot of software these days - and rustling up quite a bit of money to do it. But I agree with Peter Thiel when he says that innovation overall has stagnated- in terms of its impact on society.

// I want people to work on shit that matters, and part of that means making it easier for more developers to write more code faster. And not just any code - but high-level, domain-specific code that tackles real problems.

## HypeScript?
- hundreds of languages targetting JS
- fragmentation?
- code reuse

// So why am I so sanguine about TypeScript? We're seeing a proliferation of compile-to-JS languages. altjs.org lists over 130 languages which compile to JS, like CoffeeScript, Roy, Dart, and others.

// They all offer something to someone. We should embrace language innovation targetting JavaScript. Eich has been calling JavaScript the Bytecode of the web. This is great. This gives us a wide variety of interoperable languages that can share modules in the same execution space with the exact same primitive types.

// So just like you can use Java modules from other JVM languages, like Scala, we can use CoffeeScript modules from plain old JavaScript.

// TypeScript is no different.

## But... it's Microsoft
- embrace
- extend
- extinguish?
<img src="ourss.jpg" />
<img src="deicaza.jpg" />

// additionally, I had a gut reaction of "OSS washing" surrounding the launch of TypeScript. Certainly compared to some of Microsoft's other OSS efforts, notably by the Azure team, the open sourcing of TypeScript felt a little tone-deaf. But the licensing checks out - the spec is freely licensed, and the compiler and services (implemented in TypeScript) are Apache 2 licensed.

## WTFScript?
- Codeplex? Come to where the devs are
- Lack of documentation
- 
// if MS cares about Open Source adoption of TypeScript, they'll have to make more of an effort to build a community around the project - including coming to devs where they are. IRC, Github, Twitter, etc. I'm glad to see them participating in third-party forums such as Stack Overflow. It's a start, and I hope they'll come over to GitHub, since it's home to the best JavaScript community in the world.
// Two more quick WTFs: lack of documentation. There is no actual reference-style documentation of the language features available on typescriptlang.org - just tutorials and the formal language spec. While the spec is awesome, it's only available in .doc and .pdf - not html, and not hyperlinkable. WTF?
// Lastly, there aren't yet any implementations of the type of awesome tooling that TypeScript promises to provide in any environments outside of VisualStudio. How many here use Mac or Linux as your regular development OS? (Expect just about everyone) Okay, this is why MS needs to invest in tooling for us

## TypeScript crash course
## TypeScript is just JavaScript

- `s/\.js/\.ts/` -> your project is now a valid TypeScript project.

## `npm install -g typescript`
- get typescript
- the typescript compiler: tsc
- let's do some stuff
// as you can see, this output looks oddly similar to our input
// with -c we can even emit comments
// So, TypeScript _is_ JavaScript. A strict superset. Even the syntax highlighting works, more or less
// we can immediately run our stuff from the console by adding an -e flag

## ES6 sugar NOW!
- light weight lambdas (arrow functions, lexically scoped `this`)
- ...rest parameters
- class keyword

// lambdas are a huge win. 
// rest parameters (no spread yet)
// classes - meh, but it's coming in ES6, and the TypeScript team has expressed their intention to follow the ES6 spec as it changes. I won't cover it here a whole lot. The best defense I've heard is that if you're going to be doing this in your code anyway, you may as well have a "one true way" to do it, rather than mixing various techniques for approximating classical OO inheritance.
// modules - this is great, because you can write future-proof code following the proposed ES6 module syntax, and the tsc will spit out CommonJS or AMD style modules so you can use it now in ES5 or ES3 environments.

