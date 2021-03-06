const { validateNotEmpty } = require('./library/validation');

/**
 * Peeks and returns a message in a Subscription
 * @param  {object} azureServiceBus - Service Bus Instance
 * @param  {string} topic - Topic to use
 * @param  {string} subscription - Subscription to use
 * @return {Promise}
 */
function peekSubscription(azureServiceBus, topic, subscription) {
  return new Promise((resolve, reject) => {
    validateNotEmpty([azureServiceBus, topic, subscription], reject);

    azureServiceBus.receiveSubscriptionMessage(topic, subscription, { isPeekLock: true }, (error, message) => {
      if (error) return reject(error);
      return resolve(message);
    });
  });
}

module.exports.peekSubscription = peekSubscription;
