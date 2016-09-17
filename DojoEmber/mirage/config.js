export default function() {
  this.namespace = '/api';
  this.get('/peliculas',function(){
    return{
      data:[
        {
          type: 'peliculas',
          id: 'peli1',
          attributes: {
            name: 'interestellar',
            city: 'colorado',
            type: '1',
            image: 'https://www.wired.com/wp-content/uploads/2014/10/ut_interstellar2_f.png'
          }
        },
        {
          type: 'peliculas',
          id: 'peli2',
          attributes: {
            name: 'civil war',
            city: 'toronto',
            type: '2',
            image: 'http://www.bolsamania.com/cine/wp-content/uploads/2016/04/35.jpg'
          }
        },
        {
          type: 'peliculas',
          id: 'peli3',
          attributes: {
            name: 'titanic',
            city: 'londres',
            type: '3',
            image: 'http://crusoeresearch.com/wp-content/uploads/2016/08/titanic.jpg'
          }
        },
        {
          type: 'peliculas',
          id: 'peli4',
          attributes: {
            name: 'scary movie 4',
            city: 'detroit',
            type: '4',
            image: 'http://www.swotti.com/tmp/swotti/cacheC2NHCNKGBW92AWU=/imgScary%20Movie4.jpg'
          }
        },
        {
          type: 'peliculas',
          id: 'peli5',
          attributes: {
            name: 'ouija',
            city: 'kansas',
            type: '5',
            image: 'http://bronxvillelibrary.org/wp-content/uploads/ouija1.jpg'
          }
        }
      ]
    };
  });
  /*this.get('/pelis/:id', function (db, request) {
    return { data: pelis.find((peliculas) => request.params.id === peliculas.id) };
  });*/


}
