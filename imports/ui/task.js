import { Template } from 'meteor/templating';

import { Tasks } from '../api/tasks';

import './task.html';

Template.task.events({
  'click .togle-checked'() {
    // Set the checked property to the opposite of its current value
    Meteor.call('tasks.setChecked', this._id, !this.checked);
  },
  'click .delete'() {
    Meteor.call('tasks.remove', this._id);
  }
});
