Groups = new Mongo.Collection('Groups');

Groups.insert({start: 9, end: 17, admin: 'hello', 
  days: [
  {day: "sun", shift: [{startS: 10, endS: 11, names: [], max: "10"}, {startS: 11, endS: 12, names: [], max: "10"}, {startS: 11, endS: 12, names: [], max: "10"}]},
  {day: "mon", shift: []},
  {day: "tue", shift: []},
  {day: "wed", shift: []},
  {day: "thu", shift: []},
  {day: "fri", shift: []},
  {day: "sat", shift: []}]
});


//tempId = Coll.insert({counter: 0 }, {hello: 1}), ;

if (Meteor.isClient) {
  Template.body.helpers({
      getDays : function () {
        return Groups.findOne().days;
    }
  });

  Template.setDay.helpers({
      mapShift : function (start, end, names) {
        height = 100;
        width = "100";
        return s = "style=\"height:" + height + "px;width:" + width + "px\"";

      }
    
  });

  Template.hello.events({
    'click button': function () {
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup

  });
}
