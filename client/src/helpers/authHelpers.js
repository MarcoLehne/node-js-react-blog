import Cookies from 'js-cookie';

export const verifyToken = async () => {
    const token = Cookies.get('token');
  
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Cookie': `token=${token}` // send the token with the request
      }
    };
  
    const response = await fetch('/internal/verifyToken', options);
    const data = await response.json();
    return data.status === 'success';
};