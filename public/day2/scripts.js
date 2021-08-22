(() => {
  const SECOND = 1000;
  const MINUTE = SECOND * 60;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;

  function setElementInnerText(id, text) {
    const element = document.getElementById(id);
    element.innerText = text;
  }
  
  function countDown() {
    const now = new Date().getTime();
    const nextyear = new Date().getFullYear()+1
    const newYear = new Date('January 1, ' + nextyear + ' 00:00:00').getTime();
    const unixTimeLeft = newYear - now;

    setElementInnerText('year', nextyear);
    setElementInnerText('days', Math.floor(unixTimeLeft / DAY));
    setElementInnerText('hours', Math.floor((unixTimeLeft % DAY) / HOUR));
    setElementInnerText('minutes', Math.floor((unixTimeLeft % HOUR) / MINUTE));
    setElementInnerText(
      'seconds',
      Math.floor((unixTimeLeft % MINUTE) / SECOND)
    );
  }

  function run() {
    setInterval(countDown, SECOND);
  }
  run();
})();
