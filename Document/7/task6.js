const lis = document.getElementsByTagName('li');

for (let li of lis) {
  const descendantsCount = li.getElementsByTagName('li').length;
  if (!descendantsCount) continue;

  li.firstChild.data += ' [' + descendantsCount + ']';
}