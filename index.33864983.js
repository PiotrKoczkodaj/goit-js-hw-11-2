document.querySelector(".search-form"),document.querySelector('input[name="searchQuery"]'),fetch("https://pixabay.com/api/?key=34989150-F6282D23D45A19C7980767166&q=`yellow+flowers`&image_type=photo&orientation=horizontal&safesearch=true").then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).then((function(e){console.log(e)}));
//# sourceMappingURL=index.33864983.js.map
