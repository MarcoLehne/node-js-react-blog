const generateCookieValue = (length = 32) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let cookieValue = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      cookieValue += chars[randomIndex];
    }
  
    return cookieValue;
}

module.exports = {generateCookieValue};