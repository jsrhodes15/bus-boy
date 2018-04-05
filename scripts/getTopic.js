const { validateNotEmpty } = require('./library/validation');

/**
 * Returns topic
 * @param  {object} azureServiceBus - Service Bus Instance
 * @param  {string} topic - Topic to use
 * @return {Promise}
 */
function getTopic(azureServiceBus, topic) {
    return new Promise((resolve, reject) => {
        validateNotEmpty([azureServiceBus, topic], reject);

        azureServiceBus.getTopic(topic, (error, gettopicresult) => {
            if (error) return reject(error);
            return resolve({gettopicresult});
        });
    });
}

module.exports.getTopic = getTopic;