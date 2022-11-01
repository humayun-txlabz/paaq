import * as contentful from 'contentful';
const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

export const apiClientContentFul =  (title) =>{


    return new Promise((resolve, reject) => {
        client.getEntries({
            content_type: `${title}`
          })
          .then((response) => {
            resolve(response)
          })
          .catch((err) => {
            reject(err);
          })
        
    })

};



