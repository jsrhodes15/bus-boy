const createMessage = require('./scripts/createMessage.js');
const createSubscription = require('./scripts/createSubscription.js');
const createTopic = require('./scripts/createTopic.js');
const deleteSubscription = require('./scripts/deleteSubscription.js');
const deleteTopic = require('./scripts/deleteTopic.js');
const listRules = require('./scripts/listRules.js');
const listSubscriptions = require('./scripts/listSubscriptions.js');
const listTopics = require('./scripts/listTopics.js');
const peekDeadLetter = require('./scripts/peekDeadLetter.js');
const peekSubscription = require('./scripts/peekSubscription.js');
const subscriptionMsgCount = require('./scripts/subMsgCount.js');
const watchTopic = require('./scripts/watchTopic.js');

module.exports = {
  createMessage,
  createSubscription,
  createTopic,
  deleteSubscription,
  deleteTopic,
  listRules,
  listSubscriptions,
  listTopics,
  peekDeadLetter,
  peekSubscription,
  subscriptionMsgCount,
  watchTopic,
};