import axios from 'axios'

export {};

const url: string = 'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';
axios.get(url)
  .then(response => {
    interface Article {
      id: number;
      title: string;
      description: string;
    }
    let data: Article[]; 
    data = response.data;
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });