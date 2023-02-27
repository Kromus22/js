let styles = new Array('Джаз', 'Блюз');
styles.push('Рок-н-ролл');
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
console.log(styles.shift());
console.log(styles);
styles.unshift('Рэп', 'Регги');