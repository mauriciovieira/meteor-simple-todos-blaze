import { Template } from 'meteor/templating';

import { Tasks } from '../api/tasks';

import './task.html';

Template.task.events({
  'click .togle-checked'() {
    // Set the checked property to the opposite of its current value
    Tasks.update(this._id, {
      $set: { checked: ! this.checked},
    });
  },
  'click .delete'() {
    Tasks.remove(this._id);
  }
});
