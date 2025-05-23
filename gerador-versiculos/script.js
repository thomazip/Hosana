 document.getElementById('gerarVersiculo').addEventListener('click', function() {
document.getElementById('dailyVersesWrapper').innerHTML = '';

const script = document.createElement('script');
script.src = 'https://dailyverses.net/get/random.js?language=nvi-pt';
script.async = true;
document.getElementById('dailyVersesWrapper').appendChild(script);
 })

