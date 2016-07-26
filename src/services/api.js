// import mockData from '../data/sample_data.json';

class Api {
    // getUsersMock() {
    //     return mockData;
    // }

    getGithubUser(url) {
        // let deferred = new Promise();
        // fetch(url)
        // .then(function(response) {
        //     return response.json();
        // }).then(function(json) {
        //     return deferred.resolve(json);
        // }).catch(function(ex) {
        //     console.log(`error! ${JSON.stringify(ex,null,4)}`)
        //     deferred.reject(`error! ${JSON.stringify(ex,null,4)}`);
        // })
        //
        // return deferred.promise;

        return new Promise(function(resolve, reject) {
          fetch(url)
          .then(function(response) {
              return response.json();
          }).then(function(json) {
              return resolve(json);
          }).catch(function(ex) {
              console.log(`error! ${JSON.stringify(ex,null,4)}`)
              reject(`error! ${JSON.stringify(ex,null,4)}`);
          })
            // doSomething(function cb(good) {
            //     if (good)
            //         resolve();
            //     else
            //         reject();
            // });
        });
    }

}

export default Api;
