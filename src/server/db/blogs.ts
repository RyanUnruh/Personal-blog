import { Query } from './index';

const all = async () =>  {
 return Query('SELECT * FROM blogs')
};

const one = async (id:number) => {
  return Query('SELECT * FROM blogs WHERE id =?', [id]);
};

// cost post = async 

export default {
    all,
    one,
    // post
}