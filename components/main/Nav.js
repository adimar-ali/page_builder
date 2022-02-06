import Link from 'next/link';
import React from 'react';

function Nav() {
  return <div className='flex items-center bg-white justify-between px-10'>
      <h1>page builder</h1>
      <div className='flex items-center'>
          <NavLink href='/'>home</NavLink>
          <NavLink href='/editor/1'>editor</NavLink>
      </div>
  </div>;
}

export default Nav;


function NavLink ({children,href,...props,}){
    return <div {...props} className={'m-2'}>
        <Link href={href}>{children}</Link>
    </div>
}