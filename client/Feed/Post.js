Template.Post.helpers({
	userNameDoAutor: function(){
		var idDoAutor = this.idDoAutor;
		var autor = Meteor.users.findOne({_id: idDoAutor});
		return autor.username;
	}
});