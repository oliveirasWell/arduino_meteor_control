import { Meteor } from 'meteor/meteor';

import { BodyListItem } from '../bodyListItem.js';

Meteor.publish('bodyListItems', function bodyListItemPublication() {
    return BodyListItem.find();
});
