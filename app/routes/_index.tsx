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
    <>
      <h1>Home index page</h1>
      {/* This working fine but rise some problem */}
      {/* <a href="/demo">Go to demo page</a> */}
      <Link to="/demo">Go to demo page</Link>

    </>

  );
}


