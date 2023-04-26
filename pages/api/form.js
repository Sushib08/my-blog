export default function handler(req, res) {
  const body = req.body;

  if (!body.firstName || !body.email || !body.message) {
    return res.status(400).json({ data: "Veuillez Remplir Tous les Champs !" });
  }

  return res.status(200).json({ data: "Formulaire Soumis avec Succès !" });
}
