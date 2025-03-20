export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen text-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
           style={{ backgroundImage: "url('/bb3.jpg')" }} />
      

      {/* Content */}
      <h1 className="relative text-6xl sm:text-7xl lg:text-8xl font-bold text-yellow-500">
        Welcome to Broken Bats
      </h1>
      <p className="relative mt-4 text-xl sm:text-2xl text-black-500">
        We're Built Different
      </p>
    </main>
  );
}