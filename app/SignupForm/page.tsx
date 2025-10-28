"use client";
import { useState, FormEvent, ChangeEvent } from "react";
import { useRouter } from "next/navigation";

export default function SignupForm() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [mobile, setMobile] = useState<string>("");
  const [course, setCourse] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleGoBack = () => {
    router.push("/");
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-900 text-center px-6">
        <h1 className="text-3xl font-bold text-green-400 mb-3">
          Thank you, {name.split(" ")[0]}!
        </h1>
        <p className="text-gray-300">
          You’ve shown interest in <span className="font-semibold text-white">{course}</span>.  
          Our team will reach out soon.
        </p>
        <button
          onClick={handleGoBack}
          className="mt-6 bg-green-500 text-white px-5 py-2 rounded-md hover:bg-green-600 transition"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-900 flex flex-col items-center justify-center px-6 py-10 text-white">
      <h1 className="text-4xl font-extrabold text-green-400 mb-2">
        CodeCraft Academy
      </h1>
      <p className="text-gray-300 mb-6 text-center">
        Sign up for your favorite course and begin your coding journey
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-neutral-800 border border-neutral-700 rounded-xl p-6 shadow-md w-full max-w-md flex flex-col gap-4"
      >        
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
          required
          className="bg-neutral-700 border border-neutral-600 rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-green-400"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={mobile}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setMobile(e.target.value)}
          required
          className="bg-neutral-700 border border-neutral-600 rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-green-400"
        />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          required
          className="bg-neutral-700 border border-neutral-600 rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-green-400"
        />
        <select
          value={course}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => setCourse(e.target.value)}
          required
          className="bg-neutral-700 border border-neutral-600 rounded-md px-4 py-2 text-gray-300 focus:outline-none focus:border-green-400"
        >
          <option value="">-- Select a Course --</option>
          <option value="Web Development">Web Development</option>
          <option value="Data Science & AI">Data Science & AI</option>
          <option value="Cloud & DevOps">Cloud & DevOps</option>
          <option value="Cybersecurity">Cybersecurity</option>
          <option value="Digital Skills">Digital Skills</option>
        </select>

        <button
          type="submit"
          className="bg-green-500 text-white font-medium py-2 rounded-md hover:bg-green-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
