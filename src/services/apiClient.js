import * as contentful from 'contentful';
const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

export const apiClientContentFul =  (title, skipElem = 0, limit = 10) =>{


    return new Promise((resolve, reject) => {
        client?.getEntries({
            content_type: `${title}`,
            skip: skipElem,
            limit
          })
          .then((response) => {
            console.log(response)
            resolve(response)
          })
          .catch((err) => {
            reject(err);
          })
        
    })

};

export const apiClientContentFulCategory =  (title, category, item) =>{
  return new Promise((resolve, reject) => {
      client?.getEntries({
          content_type: `${title}`,
          [`fields.${category}[all]`]: item
        })
        .then((response) => {
          resolve(response)
        })
        .catch((err) => {
          reject(err);
        })
      
  })

};

export const apiClientContentFulSingleEntry =  (id) =>{

  return new Promise((resolve, reject) => {
      client?.getEntry(id)
        .then((response) => {
          console.log(response)
          resolve(response)
        })
        .catch((err) => {
          reject(err);
        })
      
  })

};



