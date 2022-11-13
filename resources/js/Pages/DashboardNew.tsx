import React from 'react';
import useRoute from '@/Hooks/useRoute';
import AppLayoutNew from '@/Layouts/AppLayoutNew';

export default function Example(){
    const route = useRoute;
    return(
        <AppLayoutNew
        title="Dashboard"
        renderHeader={() => (
          <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            Dashboard
          </h2>
          
        )}
      >
    </AppLayoutNew> 
    )
}