import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Programs from './components/Programs'
import Method from './components/Method'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="fixed inset-0 -z-0 pointer-events-none bg-[radial-gradient(600px_circle_at_0%_0%,rgba(168,85,247,0.12),transparent_50%),radial-gradient(700px_circle_at_100%_0%,rgba(236,72,153,0.10),transparent_50%),radial-gradient(600px_circle_at_100%_100%,rgba(251,191,36,0.10),transparent_50%)]" />

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Programs />
        <Method />
        <Subscribe />
        <Footer />
      </main>
    </div>
  )
}

export default App
