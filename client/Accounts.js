T9n.setLanguage("pt");

AccountsTemplates.configure({
    defaultLayout: 'LayoutPrincipal',
    defaultLayoutRegions: {
        nav: 'Cabecalho',
        footer: 'Footer'
    },
    defaultContentRegion: 'main'
});

AccountsTemplates.configureRoute('signIn');

var pwd = AccountsTemplates.removeField('password');
AccountsTemplates.removeField('email');
AccountsTemplates.addFields([
   {
  	_id: 'name',
  	type: 'text',
  	displayName: "Nome Completo",
  	required: true,

  },
  {
      _id: "username",
      type: "text",
      displayName: "username",
      required: true,
      minLength: 3,
  },
  {
      _id: 'email',
      type: 'email',
      required: true,
      displayName: "email",
      re: /.+@(.+){2,}\.(.+){2,}/,
      errStr: 'Invalid email',
  },
  pwd,
]);