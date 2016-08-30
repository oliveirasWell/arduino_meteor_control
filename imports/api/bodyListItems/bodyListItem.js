import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const BodyListItem = new Mongo.Collection('bodyListItem');

Meteor.methods({
    'bodyListItem.insert'(imagemInput, urlInput) {
        BodyListItem.insert({
        	imagem: imagemInput,
        	url: urlInput
        });
    },
});

