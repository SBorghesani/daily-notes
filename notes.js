const notes = [
    {
        id: 1,
        subject: "GitHub",
        date: "7/13/21-7/15/21",
        feeling: "confident",
        timeSpent: "2 days"
    },
    {
        id: 2,
        subject: "CSS",
        date: "7/6/21-7/15/21",
        feeling: "meh",
        timeSpent: "2 days"
    }
]

const noteAboutToday = {
    id: 3,
    subject: "Objects and Arrays",
    date: "7/15/21-7/16/21",
    feeling: "confident-ish",
    timeSpent: "1.5 days"
}
notes.push(noteAboutToday);

const createNote = (newNote) => {
    const lastIndex = notes.length -1;
    const currentLastNote = notes[lastIndex];
    const maxId = currentLastNote.id;
    const idForNewNote = maxId +1;
    newNote.id = idForNewNote;
    notes.push(newNote);
}

const note4 = {
    subject: "Adding objects to arrays",
    date: "7/16/21",
    feeling: "Shaky, but getting there",
    timeSpent: "a few hours"
}

createNote(note4);

for (const note of notes) {
    // if (note.subject === "CSS") {
    console.log(
`Note ${note.id}
Subject: ${note.subject}
Date(s): ${note.date}
Time Spent: ${note.timeSpent}
Feelings: ${note.feeling}
------------------------`);
    // }
}