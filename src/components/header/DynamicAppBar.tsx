'use client';

import {useSession} from 'next-auth/react';

import PrivateAppBar from './PrivateAppBar';
import {PublicAppBar} from './PublicAppBar';

export default function DynamicAppBar() {
  const {data: session} = useSession();
  
  const fullName = 
    session?.user?.firstname && session?.user?.lastname
      ? `${session.user.firstname} ${session.user.lastname}`
      : undefined;

  return !session ? <PublicAppBar /> : <PrivateAppBar name={fullName} />;
}