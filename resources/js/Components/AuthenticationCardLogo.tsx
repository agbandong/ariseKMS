import { InertiaLink } from '@inertiajs/inertia-react';
import React from 'react';

export default function AuthenticationCardLogo() {
  return (
    <InertiaLink href="/">
      <img
        className="w-32 h-32"
        src="logo192.png"
      />
    </InertiaLink>
  );
}
