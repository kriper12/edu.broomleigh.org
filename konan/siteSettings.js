// Universal script to apply saved site settings on every page
(function() {
  const favicon = document.getElementById('favicon');

  // Apply saved site on page load
  const savedTitle = localStorage.getItem('siteTitle');
  const savedFavicon = localStorage.getItem('siteFavicon');

  if (savedTitle) document.title = savedTitle;
  if (savedFavicon && favicon) favicon.href = savedFavicon;
})();
