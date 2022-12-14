/**
 * @param {Element} rootElement
 * @param {string} tagName
 * @return {Array<Element>}
 */
export default function getElementsByTagName(rootElement, tagNameParam) {
  const elements = [];
  const tagName = tagNameParam.toUpperCase();

  function _traverse(element) {
    if (element == null) return;

    if (element.tagName === tagName) elements.push(element);

    for (let i = 0; i < (element.childrn || []).length; i++) {
      _traverse(element.children[i]);
    }
  }

  for (let i = 0; i < (rootElement.children || []).length; i++) {
    _traverse(rootElement.children[i]);
  }

  return elements;
}

const doc = new DOMParser().parseFromString(
  `<div id="foo">
    <span>Span</span>
    <p>Paragraph</p>
    <div id="bar">Div</div>
  </div>`,
  'text/html'
);

console.log(getElementsByTagName(doc.body, 'div'));
// [div#foo, div#bar] <-- This is an array of elements.
