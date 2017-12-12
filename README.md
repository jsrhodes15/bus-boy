*This package is not ready for prime time, hence the <1.0.0 version number. Stay tuned!*

## Bus-Boy
A collection of scripts used to interact with Azure Service Bus

### Usage
These scripts are meant to be extended for use as a CLI, in a GUI, or any other tool to provide users
with access to Azure Service Bus topics and subscription data.

Add as an npm module to your project\
```js
npm -i bus-boy --save
```
*_assumes you have node and npm installed_

### Available scripts
   `clear`                - Clears the screen.\
   `createMessage`        - Creates a message on the specified topic. Note you must edit the createMessage script for this to work.\
   `createSubscription`   - Creates the specified subscription.\
   `createTopic`          - Creates the specified topic.\
   `deleteSubscription`   - Deletes the specified subscription.\
   `deleteTopic`          - Deletes the specified topic.\
   `listRules`            - Lists all rules for a subscription.\
   `listSubscriptions`    - Lists all subscriptions for the specified topic.\
   `listTopics`           - Lists all topics for the current Service Bus connection. Also displays a count of topics.\
   `peekDeadLetter`       - Displays first retrieved message in specified dead letter queue.\
   `peekSubscription`     - Peeklocks and displays first retrieved message in the specified subscription.\
   `subscriptionMsgCount` - Displays the current count of messages in the specified subscription.\
   `watchTopic`           - Creates a temporary subscription on the configured topic and displays incoming messages.\

### Documentation for the _Azure SDK for Node_ can be found here:
http://azure.github.io/azure-sdk-for-node/