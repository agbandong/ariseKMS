import React from 'react';
import useRoute from '@/Hooks/useRoute';
import AppLayout from '@/Layouts/AppLayout';

export default function Dashboard(){
    const route = useRoute;
    return(
        <AppLayout
        title="Dashboard"
        renderHeader={() => (
          <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            Dashboard
          </h2>
          
        )}
      >
    </AppLayout> 
    )
}