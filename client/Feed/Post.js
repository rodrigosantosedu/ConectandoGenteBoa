Template.Post.helpers({
	userNameDoAutor: function(){
		var idDoAutor = this.idDoAutor;
		var autor = Meteor.users.findOne({_id: idDoAutor});
		return autor.username;
	}
});

Template.Post.events({
	"click .like-button": function(evento, template){
		Meteor.call("curtirPost", template.data._id);
	}
});