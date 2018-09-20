Template.Perfil.helpers({
	perfil: function(){
		var idDoUsuario = FlowRouter.getParam("id");
		var info = Meteor.users.findOne({_id: idDoUsuario});
		return info;
	},
	posts: function(){
		var idDoUsuario = FlowRouter.getParam("id");
		var postsDoPerfil = Posts.find({idDoAutor: idDoUsuario}).fetch();
		return postsDoPerfil;
	}

});

Template.Perfil.events({
	"click .seguir": function(evento, template){
		console.log("SEGUINDO");
	},
	"click .deixar-de-seguir": function(evento, template){
		console.log("DES-SEGUINDO");
	}
});