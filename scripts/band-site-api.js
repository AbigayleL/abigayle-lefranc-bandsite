const API_KEY = "cdf81721-bd21-4b38-a209-4e18ad07e1e8";

class BandSiteApi {
  constructor(apiKey = API_KEY) {
    this.apiKey = apiKey;
    this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com";
  }

  async postComments(comment) {
    try {
      const response = await axios.post(this.formatUrl("/comments"), comment, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error commenting comment:", error);
      throw error;
    }
  }

  async getComments() {
    try {
      const response = await axios.get(this.formatUrl("/comments"));
      return response.data;
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  }

  formatUrl(path) {
    console.log(`${this.baseUrl}${path}?api_key=${this.apiKey}`);
    return `${this.baseUrl}${path}?api_key=${this.apiKey}`;
  }

  async getShows() {
    try {
      const response = await axios.get(this.formatUrl("/showdates"));
      return response.data;
    } catch (error) {
      console.error("Error fetching shows:", error);
    }
  }
}

export default BandSiteApi;
