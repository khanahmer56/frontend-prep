const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};
function fetchResults(query) {
  console.log("Fetching results for:", query);
}

const [query, setQuery] = useState("");

// Create debounced function once (memoized)
const debouncedSearch = debounce((value) => {
  fetchResults(value);
}, 500);

const handleChange = (e) => {
  setQuery(e.target.value);
  debouncedSearch(e.target.value); // pass only the query string
};
