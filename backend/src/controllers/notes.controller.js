const notesController = {};

notesController.getNotes = (req, res) => res.json({ message: [] })

notesController.createNote = (req, res) => res.json({ message: 'Note Saved' });

notesController.getNote = (req, res) => res.json({ title: 'test' })

notesController.updateNote = (req, res) => res.json({ message: 'Note Updated' });

notesController.deleteNote = (req, res) => res.json({ message: 'Note Deleted'});

module.exports = notesController;
