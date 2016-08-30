import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { BodyListItem } from '/imports/api/bodyListItems/bodyListItem.js';

import './main.html';

ip = "192.168.1.177";


Template.bodyList.onCreated(function helloOnCreated() {
  this.subscribe('bodyListItems');

});

Template.bodyList.helpers({
   	ip() {
    	return ip;
  	},
  	items: [
      { imagem: 'bulb.png', url: 'a'},
      { imagem: 'fan.png', url: 'b'}
    ]
});

Template.bodyList.events({
    'submit .troca_ip'(event) {
        event.preventDefault();
        console.log(event.target.text.value);
        ip = event.target.text.value;
    },
});

Template.bodyListItem.helpers({
    status() {
        return Template.instance().status;
    }
});

Template.bodyListItem.onCreated( function() {
  this.status = "loading";
});

Template.bodyListItem.events({
    'click .action-active-js'(event, instance) {
                    console.log("-----------");
                    console.log(ip);
                    var data = $.get( "http://"+ ip + ":1212/" + this.url);
                    console.log(data);
        },  
});



