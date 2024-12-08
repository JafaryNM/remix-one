//import NewNote from "~/components/newNote"
import NewNoteStyles from '~/components/NewNote.css'
import type { LinksFunction } from "@remix-run/node";
import NewNote from '~/components/NewNote';

export default function NotesPage(){
  return (
    <main>
       <NewNote/>
    </main>
  )
}

export const links: LinksFunction = () => [
  
  {
    rel:"stylesheet",
    href:NewNoteStyles
  }
 
];