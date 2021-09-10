import React from 'react'
import { TaskList } from './components/TaskList'
import { FirestoreProvider } from './context/FirestoreContext'
import { AddTask } from './components/AddTask'
import { useAuth } from './context/AuthContext'
import { Navbar } from './components/Navbar'

export default function App() {
  return (
    <div className="flex flex-col justify-center items-center pt-4">
      <main className="w-[80%]">
        <Navbar />
        <FirestoreProvider>
          <AddTask />
          <TaskList />
        </FirestoreProvider>
      </main>
    </div>
  )
}
