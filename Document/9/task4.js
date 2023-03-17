/* 1. clientWidth всегда возвращает реально доступный размер.
   2. getComputedStyle(elem).width возвращает строку + px, а clientWidth просто число.
   3. getComputedStyle(elem).width может вернуть не только числовое значение, но и относительные, типа - auto
*/