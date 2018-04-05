const {validateNotEmpty} = require('./library/validation');

const NUMBER_OF_TOPICS = 100;
const TOPIC_SKIP = 0;
const TOPIC_COUNT = 0;

/**
 * Gets the next n topics
 * @param  {object} azureServiceBus - Service Bus Instance
 * @param  {number} numberOfTopics - Number of topics to get
 * @param  {number} skip - Number of topics to skip
 * @param  {number} startsWith - Topics that start with this
 * @param  {number} count - Topic count to start at
 * @param  {function} onDone - Invoked when we have built all the topics
 * @param  {function} onError - Invoked on error
 * @param  {array} topics - Array to store list of topics
 */
function getNext(azureServiceBus, numberOfTopics, skip, startsWith, count, onDone, onError, topics = []) {
    let topicCount = count;

    if (!numberOfTopics || numberOfTopics === 0) {
        numberOfTopics = NUMBER_OF_TOPICS;
    }

    azureServiceBus.listTopics({top: numberOfTopics, skip}, (error, result) => {
        if (error) return onError(error);

        result.forEach((topic) => {
            if ((startsWith && startsWith.length > 0) && !topic.TopicName.startsWith(startsWith)) {
                return;
            }
            topics.push(topic.TopicName);
            topicCount += 1;
        });

        if (result.length > 0 && topics.length !== numberOfTopics) {
            let numberToSkip = +skip + +numberOfTopics;

            getNext(azureServiceBus, numberOfTopics, +numberToSkip, startsWith, topicCount, onDone, onError, topics);
        } else {
            return onDone({topics, topicCount});
        }
    });
}

/**
 * List Topics
 * @param  {object} azureServiceBus - Service Bus Instance
 * @param  {object} numberOfTopics - Number of topics to retrieve
 * @param  {object} startsWith - Find topics that start with this
 * @return {Promise}
 */
function listTopics(azureServiceBus, numberOfTopics, startsWith) {
    return new Promise((resolve, reject) => {
        validateNotEmpty([azureServiceBus], reject);
        getNext(azureServiceBus, numberOfTopics, TOPIC_SKIP, startsWith, TOPIC_COUNT, resolve, reject);
    });
}

module.exports.listTopics = listTopics;
