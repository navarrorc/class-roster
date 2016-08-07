// @flow

// import mockData from '../data/sample_data.json';

class Api {
    // getUsersMock() {
    //     return mockData;
    // }

    getGithubUser(url: string) {
        return new Promise(function (resolve, reject) {
			fetch(url)
				.then(function (response) {
					return response.json();
				}).then(function (json) {
					return resolve(json);
				}).catch(function (ex) {
					console.log(`error! ${JSON.stringify(ex, null, 4)}`)
					reject(`error! ${JSON.stringify(ex, null, 4)}`);
				})
        });
    }

}

export default Api;
