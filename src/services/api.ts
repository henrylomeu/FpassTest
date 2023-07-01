import axios from 'axios';
import md5 from 'md5';

const publicKey = 'e24fb9623390a0fc7b59f614c1b35b3c';
const privateKey = 'db170080c09ca7093e268122b6312f9a25c7b2f8';

export interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

export const api = async (searchTerm?: string) => {
  const time = Number(new Date());
  const hash = md5(time + privateKey + publicKey);

  try {
    const response = await axios.get(
      `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${searchTerm}&ts=${time}&apikey=${publicKey}&hash=${hash}`
    );
    return response.data.data.results;
  } catch (err) {
    console.log(err);
    return [];
  }
};

