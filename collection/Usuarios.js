Meteor.methods({
	"seguirUsuario": function(idDoUsuario){
        Meteor.users.update(Meteor.userId(),{
            $addToSet: {
                "profile.seguindo": idDoUsuario
            }
        });

         Meteor.users.update(idDoUsuario,{
            $addToSet: {
                "profile.seguidores": Meteor.userId()
            }
        });
    },

    "deixarDeSeguir": function(idDoUsuario){
        Meteor.users.update(Meteor.userId(),{
            $pull: {
                "profile.seguindo": idDoUsuario
            }
        });

         Meteor.users.update(idDoUsuario,{
            $pull: {
                "profile.seguidores": Meteor.userId()
            }
        });
    }    
});