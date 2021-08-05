const boxes = document.querySelectorAll('.box');
window.addEventListener('scroll', checkBoxes);

checkBoxes()

function checkBoxes() {
    
   // (window.innerHeight) this is give the screen higher
    const triggerPoint = window.innerHeight / 5 * 3
    
    boxes.forEach(box => {
   // (getBoundingClientRect) inform about thre size of an element and its position to the viewport = distance bwteen the top or the bopttom - i specified which one- and the the top pf the viwport. see min. 9.39 in the sectoi 7.
        //view port= the hight of page
        //
        const Top = box.getBoundingClientRect().top;
        if (Top < triggerPoint) {
              box.classList.add('show')
        }
        else {
            box.classList.remove('show')
        }
   })
}