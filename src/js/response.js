onload = function ()
{
let btns = document.querySelectorAll ('input[type="button"][value="Read more"]');
for (let j = 0; j < btns.length; j++) btns [j].onclick = function ()
   {
    let cont = this.parentNode.querySelector('.cont');
    let dots = this.parentNode.querySelector ('.dots');
    if (this.value == 'Read more') cont.style.display = 'inline', dots.style.display = 'none', this.value = 'Read less';
    else cont.style.display = 'none', dots.style.display = 'inline', this.value = 'Read more';
   }
}