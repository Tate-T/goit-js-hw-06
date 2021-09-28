const itemEls = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemEls.length}`);
itemEls.forEach(item => {
    const itemTitle = item.querySelector('h2');
    console.log(`Category: ${itemTitle.textContent}`);
    const categoryElems = item.querySelectorAll('li');
    console.log(`Elements: ${categoryElems.length}`);
    }
)