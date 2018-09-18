Posts = new Mongo.Collection("posts");

Meteor.methods({
	"insertPost": function(textoDoFormulario){
		Posts.insert({
			texto: textoDoFormulario,
			idDoAutor: Meteor.userId()
		});
	}
});