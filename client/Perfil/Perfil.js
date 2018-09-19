Template.Perfil.helpers({
	perfil: function(){
		var idDoUsuario = FlowRouter.getParam("id");
		var info = Meteor.users.findOne({_id: idDoUsuario});
		console.log(info);

		return info;
	}
});