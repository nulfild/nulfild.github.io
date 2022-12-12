// Скрытие НавБара
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
   var currentScrollPos = window.pageYOffset;
   if (prevScrollpos > currentScrollPos) {
      document.querySelector("header").classList.remove("out");
      document.querySelector(".menu__btn").classList.remove("out_btn");
   } else {
      document.querySelector("header").classList.add("out");
      document.querySelector(".menu__btn").classList.add("out_btn");
   }
   prevScrollpos = currentScrollPos;
};

// Плавное появление текста

function onEntry(entry) {
   entry.forEach((change) => {
      if (change.isIntersecting) {
         change.target.classList.add("element-show");
      }
   });
}

let options = {
   threshold: [0.5],
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".animate");
console.log(elements);
for (let elm of elements) {
   observer.observe(elm);
}

// Динамическое изменение цифр

const time = 10000;
const step = 1;
show = false;
function onEntryNum(entry) {
   entry.forEach((change) => {
      if (change.isIntersecting) {
         if (!show) {
            let num = change.target.innerHTML;
            let n = num - 13;
            let t = Math.round(time / (100 / step));
            let interval = setInterval(() => {
               n = n + step;
               console.log(n, num);
               if (n >= num) {
                  clearInterval(interval);
                  show = true;
               }
               change.target.innerHTML = n;
            }, t);
            
         }
      }

   });
}
let observerNum = new IntersectionObserver(onEntryNum, options);
const numbers = document.querySelectorAll(".animate_number");
for (const elm of numbers) {
   observerNum.observe(elm);
}
