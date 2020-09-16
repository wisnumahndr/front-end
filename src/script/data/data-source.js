import partners from './partners.js';
class DataSource {
    // constructor(onSuccess, onFailed) {
    //     this.onSuccess = onSuccess;
    //     this.onFailed = onFailed;
    // }
    static searchPartner (keyword) {
        return new Promise((resolve, reject) => {
        const filteredPartners= partners.filter(partner => partner.name.toUpperCase().includes(keyword.toUpperCase()));

        if (filteredPartners.length) {
            resolve(filteredPartners);
        } else {
            reject(`${keyword} is not found`);
        }
    });
    
    }
    
}

export default DataSource;