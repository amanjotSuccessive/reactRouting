import { Meteor } from 'meteor/meteor';

import Links from '../imports/api/links'
import Users from '../imports/api/users';
//import SimplSchema from 'simpl-schema;'
Meteor.startup(() => {
  // code to run on server at startup
/* const petSchema =new SimplSchema({
  name: { type: String, required: true}
})

petSchema.validate({
  name: 'Andrew',
  min: 3
}) */
});
