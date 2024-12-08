//import NewNote from "~/components/newNote"
import NewNoteStyles from '~/components/NewNote.css'
import { redirect, type LinksFunction } from "@remix-run/node";
import type { ActionFunctionArgs } from '@remix-run/node';
import NewNote from '~/components/NewNote';
import {getNotes,storeNotes} from '~/data/notes'

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


export async function action ({request}:ActionFunctionArgs){
   const formData = await request.formData();
  //  const noteData ={
  //   title : formData.get('title'),
  //   content: formData.get('content')
  //  }
   
   const noteData = Object.fromEntries(formData);
   const existingNotes=  await getNotes();
   noteData.id= new Date().toISOString();
   const updatedNotes = existingNotes.concat(noteData);
   await  storeNotes(updatedNotes);
   return redirect('/notes')


}