class NoticiaModel {
  constructor(dbConnection) {
    this.dbConnection = dbConnection
  }

  async create(news) {
    const {
      title,
      newsUrl,
      subtitle,
      imageUrl,
      relatedNews
    } = news

    const sql = `
        INSERT INTO news (title, newsUrl, subtitle, imageUrl, relatedNews) 
        VALUES (?,?,?,?,?) 
        `
    const [result] = await this.dbConnection.execute(
      sql, [title, newsUrl, subtitle, imageUrl, relatedNews]
    )

    return result.insertId
  }

  async search(query) {
    let sql = `
      SELECT * FROM news
      WHERE 1 = 1 
      `;

    const params = [];

    if (query.titleContains) {
      sql += `
        AND LOWER(news.title) like ?
        OR LOWER(news.subtitle) like ? 
        OR LOWER(news.relatedNews) like ? 
      `;
      params.push(`%${query.titleContains.toLowerCase()}%`);
      params.push(`%${query.titleContains.toLowerCase()}%`);
      params.push(`%${query.titleContains.toLowerCase()}%`);
    }

    const [result] = await this.dbConnection.execute(sql, params);
    return result;
  }
}

module.exports = NoticiaModel
