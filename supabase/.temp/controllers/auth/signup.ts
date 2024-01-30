export async function signup(request: Request) {
  const res = await request.json()

  //todo Récuperer les données du formulaire
  //todo Vérifier que les donnes sont au bon format
  // - email est un email
  // - password est un password (au moins 8 caractères, 1 majuscule, 1 minuscule, 1 chiffre)
  // - password et passwordConfirm sont identiques
  // => renvoyer une erreur 400 au front si ce n'est pas le cas

  //todo Vérifier que l'email n'est pas déjà utilisé
  // => renvoyer une erreur 400 au front si c'est le cas

  //todo Créer l'utilisateur dans la bdd avec le service UsersService.create

  // signup le user dans supabase auth
  // https://supabase.com/docs/guides/auth/auth-email

  // renvoyer un status 201 si tout est ok

  return new Response('Hello world')
}
