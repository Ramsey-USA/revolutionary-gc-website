export default function TestPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-red-500 text-white p-8 m-4">
        <h1 className="text-4xl font-bold mb-4">Tailwind Test</h1>
        <p className="text-xl">If this has a red background, Tailwind is working!</p>
      </div>
      
      <div className="bg-blue-500 text-white p-8 m-4">
        <h2 className="text-2xl font-bold mb-4">Blue Background Test</h2>
        <p>This should be blue.</p>
      </div>
      
      <div className="bg-army-gold text-army-black p-8 m-4">
        <h2 className="text-2xl font-bold mb-4">Custom Color Test</h2>
        <p>This should have Army Gold background with Army Black text.</p>
      </div>
      
      <div className="test-red">
        <p>This uses the test-red CSS class</p>
      </div>
    </div>
  )
}
