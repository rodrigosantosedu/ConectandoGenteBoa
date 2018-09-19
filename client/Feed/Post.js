Template.Post.helpers({
	userNameDoAutor: function(){
		var idDoAutor = this.idDoAutor;
		var autor = Meteor.users.findOne({_id: idDoAutor});
		return autor.username;
	},
	numeroDeCurtidas: function() {
        return this.curtidas.length;
    }
});

Template.Post.events({
	"click .botao-curtir": function(evento, template){
		Meteor.call("curtirPost", template.data._id);
	},
	"click .botao-descurtir": function(evento, template){
		Meteor.call("descurtirPost", template.data._id);
	}
});