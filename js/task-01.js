const itemEls = document.querySelectorAll('.item');

itemEls.forEach(item => {
    console.log(`Number of categories: ${itemEls.length}`);
    const itemTitles = item.querySelectorAll('h2');
    console.log(`Category: ${itemTitles.textcontent}`);
    const categoryElems = item.querySelectorAll('li');
    console.log(`Elements: ${categoryElems.length}`);
    }
)