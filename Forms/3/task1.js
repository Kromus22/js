const form = document.forms.calculator;

const calculate = () => {
  const initial = +form.money.value;
  if (!initial) return;

  const interest = form.interest.value * 0.01;

  if (!interest) return;

  const years = form.months.value / 12;
  if (!years) return;

  const result = Math.round(initial * (1 + interest) ** years);

  const height = result / form.money.value * 100 + 'px';
  document.getElementById('height-after').style.height = height;
  document.getElementById('money-before').innerHTML = form.money.value;
  document.getElementById('money-after').innerHTML = result;
}

form.money.oninput = calculate;
form.months.onchange = calculate;
form.interest.oninput = calculate;

calculate();