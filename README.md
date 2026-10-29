

1. Parsing is the process by which the browser reads 
HTML source code and converts the string data into a 
structured data that it can understand.

2. Tokenization is the process of breaking the HTML    
into  tokens, such as tags, attribute names, attribute 
values, and text.


3. DOM stands for Document Object Model.
The DOM is a programming interface that represents an 
HTML document as a tree of objects called nodes. 
DOM tree --> Doctype -->  HTML --> Body --> Main --> Div 
--> and so on...
JavaScript can use the DOM to access, modify, add, or 
remove HTML elements and their content.

4. CSSOM stands for CSS Object Model.
The CSSOM is a structured representation of the CSS 
rules that the browser has parsed. The browser uses it 
to determine the styles that apply to HTML elements.


5. The browser combines information from the DOM and 
CSSOM to determine what should be displayed and how it 
should look, and this is known as rendering.


6. Event capturing is the phase in which an event 
travels from grandparents toward the target child element .
By default, addEventListener() it works on
the bubbling phase. To make a listener for the 
capturing phase, we need to set the third argument to true.


7. Event bubbling is the phase in which an event travels 
from the target element back through its parents to grandparents.


8. Event delegation is a technique in which a single 
event listener is attached to a parent to 
handle events occuring from multiple children 
elements.

