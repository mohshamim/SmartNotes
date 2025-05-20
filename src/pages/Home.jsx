import { notes } from "../data/notesData";
import NoteCard from "../components/NoteCard";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">SmartNotes</h1>
      <div className="grid gap-4">
        {notes.map((note) => (
          <NoteCard
            key={note.id}
            title={note.title}
            description={note.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
