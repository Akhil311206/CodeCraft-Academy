export default function Contact() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white flex flex-col items-center justify-center px-6 py-16">
      <h1 className="text-4xl mt-25 font-bold text-amber-400 mb-4">Reach Out to Us</h1>
      <p className="text-gray-300 text-center max-w-md mb-10">
        We'd love to hear from you. Whether you have questions, feedback, or want to
        connect — here’s how you can reach CodeCraft Academy.
      </p>

      <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-8 w-full max-w-md flex flex-col gap-4 text-center">
        <div>
          <h2 className="text-lg font-semibold text-amber-300">Email</h2>
          <p className="text-gray-300">contact@codecraftacademy.com</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-amber-300">Instagram</h2>
          <p className="text-gray-300">@codecraft.academy</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-amber-300">Facebook</h2>
          <p className="text-gray-300">CodeCraft Academy Official</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-amber-300">LinkedIn</h2>
          <p className="text-gray-300">CodeCraft Academy</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-amber-300">Twitter</h2>
          <p className="text-gray-300">@CodeCraftHQ</p>
        </div>
      </div>
    </div>
  );
}
