## 1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

#### Ans: getElementById() যে কোনো আইডি ধরার ক্ষেত্রে ব্যবহার করা হয়।

#### getElementsByClassName() একই নামের একাধিক ক্লাস বা নির্দিষ্ট কোনো ক্লাস ধরার ক্ষেত্রে ব্যবহার করা হয়।

#### querySelector() শুধু প্রথম ম্যাচ হওয়া সিলেক্টরকে রিটার্ন করে।

#### querySelectorAll() দিয়ে যেকোনো এলিমেন্ট, ক্লাস বা আইডি সিলেক্ট করা যায়। এর উপর forEach() মেথড চালানো যায়।

## 2. How do you create and insert a new element into the DOM?

```javascript
const div = document.createElement("div");
div.innerHTML = "<p>Hello World</p>";
document.body.appendChild(div);
```

## 3. What is Event Bubbling? And how does it work?

#### Ans: টার্গেটেড ইলিমেন্ট এ ক্লিক করলে event নিচ থেকে উপরের দিকে bubble করে উপরে উঠে এবং সকল parent a ক্লিক হয়।

## 4. What is Event Delegation in JavaScript? Why is it useful?

#### Ans: Event Delegation হলো child element-এ listener না দিয়ে parent element-এ listener লাগানো এবং child-এ click হলে parent listener handle করে।

## 5. What is the difference between preventDefault() and stopPropagation() methods?

#### Ans: preventDefault() যেকোনো Event এর default behavior বন্ধ করে। যেমন ফর্ম সাবমিশনে বার বার রিলোড বন্ধ করে।

#### stopPropagation() এই ফাংশন টা Event-এর bubbling বন্ধ করে Child element-এ click হলে parent bubble হবে না।
