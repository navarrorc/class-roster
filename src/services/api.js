// import mockData from '../data/sample_data.json';

class Api {
    // getUsersMock() {
    //     return mockData;
    // }

    getGithubUser(url) {
        let deferred = Promise.defer();
        fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            return deferred.resolve(json);            
        }).catch(function(ex) {
            console.log(`error! ${JSON.stringify(ex,null,4)}`)
            deferred.reject(`error! ${JSON.stringify(ex,null,4)}`);
        })

        return deferred.promise;
    }

}

export default Api;