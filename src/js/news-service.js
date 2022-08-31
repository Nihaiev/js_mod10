export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }
  fetchArticles() {
    console.log(this);
    const options = {
      headers: {
        Authorization: '8c2b00ce949c425aab7bb108aface44b',
      },
    };
    const url = `https://newsapi.org/v2/everything?q=${this.searchQuery}&language=en&pageSize=5&page=${this.page}`;

    return fetch(url, options)
      .then(r => r.json())
      .then(data => {
        this.incrementPage();
        return data.articles;
      });
  }

  incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
