let item = document.querySelectorAll('.item');
let button = document.querySelector('button');
let para = document.querySelector('p');
for (let i = 0; i < 9; i++) {
   item[i].textContent = '';
}
let x = 0;
for (let i = 0; i < 9; i++) {
   item[i].addEventListener('click', () => {
      if (x % 2 == 0) {
         item[i].textContent = '⚽';
         x++;
         if (item[i].textContent == '⚽') {
            item[i].style.color = '#ffffff';
         }
      } else {
         item[i].textContent = '💖';
         x++;
         if (item[i].textContent == '💖') {
            item[i].style.color = 'red';
         }
      }
      if (
         item[0].textContent == item[1].textContent &&
         item[1].textContent == item[2].textContent &&
         item[0].textContent != '' &&
         item[1].textContent != '' &&
         item[2].textContent != ''
      ) {
         para.innerHTML = `${item[0].textContent} is winer`;
      } else if (
         item[3].textContent == item[4].textContent &&
         item[4].textContent == item[5].textContent &&
         item[3].textContent != '' &&
         item[4].textContent != '' &&
         item[5].textContent != ''
      ) {
         para.innerHTML = `Congratulations! ${item[3].textContent} is Winer`;
      } else if (
         item[6].textContent == item[7].textContent &&
         item[7].textContent == item[8].textContent &&
         item[6].textContent != '' &&
         item[7].textContent != '' &&
         item[8].textContent != ''
      ) {
         para.innerHTML = `Congratulations! ${item[6].textContent} is Winer`;
      } else if (
         item[0].textContent == item[3].textContent &&
         item[3].textContent == item[6].textContent &&
         item[0].textContent != '' &&
         item[3].textContent != '' &&
         item[6].textContent != ''
      ) {
         para.innerHTML = `Congratulations! ${item[0].textContent} is Winer`;
      } else if (
         item[1].textContent == item[4].textContent &&
         item[4].textContent == item[7].textContent &&
         item[1].textContent != '' &&
         item[4].textContent != '' &&
         item[7].textContent != ''
      ) {
         para.innerHTML = `Congratulations! ${item[1].textContent} is Winer`;
      } else if (
         item[2].textContent == item[5].textContent &&
         item[5].textContent == item[8].textContent &&
         item[2].textContent != '' &&
         item[5].textContent != '' &&
         item[8].textContent != ''
      ) {
         para.innerHTML = `Congratulations! ${item[2].textContent} is Winer`;
      } else if (
         item[0].textContent == item[4].textContent &&
         item[4].textContent == item[8].textContent &&
         item[0].textContent != '' &&
         item[4].textContent != '' &&
         item[8].textContent != ''
      ) {
         para.innerHTML = `Congratulations! ${item[0].textContent} is Winer`;
      } else if (
         item[2].textContent == item[4].textContent &&
         item[4].textContent == item[6].textContent &&
         item[2].textContent != '' &&
         item[4].textContent != '' &&
         item[6].textContent != ''
      ) {
         para.innerHTML = `Congratulations! ${item[2].textContent} is Winer`;
      } else {
         if (x === 9) {
            para.innerHTML = 'Draw Match!, Please Try again.';
         }
      }
   });
}

button.addEventListener('click', (e) => {
   e.preventDefault();
   for (let i = 0; i < 9; i++) {
      item[i].textContent = '';
      para.innerHTML = '';
      x = 0;
   }
});
