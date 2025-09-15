1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

   **getElementById:** We can get single html element by **getElementById** using id's value. This method returns **null** if the element does not exist.

   **getElementsByClassName:** We can get html elements by **getElementsByClassName** using classes. It return return HTMLCollection of all matched element and It return [] if the elements does not exist.

   **querySelector:** We can get single html element by **querySelector** using id, class, tag name, and attribute's value. This method returns first matched element and It return **null** if the element does not exist.

   **querySelectorAll:** We can get html elements by **querySelectorAll** using id, class, tag name, and attribute's value. It return return NodeList of all matched element and It return [] if the elements does not exist.

2. How do you **create and insert a new element into the DOM**?

   `
   const element = document.createElement("p");
   element.innerText = "New Element";
   document.body.appendChild(element);

   `

3. What is **Event Bubbling** and how does it work?

   **Event Bubbling:** Event bubbling in JavaScript is a mechanism where an event, triggered on a specific HTML element, propagates upwards through its parent elements in the Document Object Model (DOM) hierarchy. For example: Someone click button tag or element, then trigger will occurred it parents elements button --> body --> html --> and finally the window object.

4. What is **Event Delegation** in JavaScript? Why is it useful?

   **Event Delegation:** Event delegation in JavaScript is a mechanism where a single event listener is attached to a common parent element, instead of attaching individual listeners to multiple child elements. This approach leverages event bubbling, where events triggered on a child element "bubble up" through its ancestors in the DOM tree, allowing the parent's event listener to capture and handle them.

5. What is the difference between **preventDefault() and stopPropagation()** methods?

   **preventDefault():** This method prevents the browser's default action associated with a specific event. For example: In time of submitting from in html, the whole page will reload. Using this method we can stop whole page reload.

   **stopPropagation():** This method prevents the further propagation of an event through the DOM hierarchy. This means it stops the event from "bubbling up" to parent elements.
