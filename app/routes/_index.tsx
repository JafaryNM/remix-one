import type { MetaFunction } from "@remix-run/node";
import {Link} from '@remix-run/react'
import type { LinksFunction } from "@remix-run/node";
import homeStyles from '../styles/home.css'


export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

// Adding specific styles on LinkFunction

export const links: LinksFunction = () => [
  
  {
    rel:"stylesheet",
    href:homeStyles
  }
 
];

export default function Index() {
  return (
     <main id="content">
      <h1>A better way of keeeping of your notes</h1>
      <p>Try your better and never loose track of your notes again</p>
       <p id="cta">
        <Link to="/notes">Try it now</Link>
       </p>

     </main>

  );
}


