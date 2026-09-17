const surpriseButton = document.querySelector('#surprise-button');
const surprise = document.querySelector('#surprise');

surpriseButton.addEventListener('click', () => {
  surprise.textContent = 'Easter egg trovato: grazie per aver fatto parte della mia versione migliore. ♥';
  surpriseButton.textContent = '> processo concluso ✓';
  surpriseButton.disabled = true;
});
