import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Neuralic Core",
    description: "Our flagship engine powering all reasoning, rule processing, and audit trails.",
  },
  {
    name: "Neuralic Trace",
    description: "Trace and visualize decisions with full explainability and step-wise evidence.",
  },
  {
    name: "Neuralic Engine",
    description: "Real-time AI decision execution module that integrates into enterprise workflows.",
  },
  {
    name: "Neuralic Guard",
    description: "Compliance and rule validation module ensuring AI safety and governance.",
  },
  {
    name: "Neuralic Lens",
    description: "Analytics and observability layer for all modules, complete with dashboards.",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-800 to-gray-900 text-white font-sans px-6 py-12">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold tracking-wide neon-text drop-shadow-lg">
          Neuralic
        </h1>
        <p className="text-xl mt-2 max-w-2xl mx-auto">
          Synthwave meets AI governance. Modular, explainable, scalable.
        </p>
      </header>

      <section className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card>
              <CardContent>
                <h2 className="text-2xl font-bold text-pink-300 neon-text mb-2">
                  {project.name}
                </h2>
                <p className="text-sm text-purple-200 leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      <footer className="mt-24 text-sm text-purple-400">
        <div className="grid gap-8 text-center sm:grid-cols-3">
          <div>
            <h3 className="font-semibold text-purple-200 mb-2">Navigate</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-pink-300">Home</a></li>
              <li><a href="#" className="hover:text-pink-300">Features</a></li>
              <li><a href="#" className="hover:text-pink-300">Documentation</a></li>
              <li><a href="#" className="hover:text-pink-300">Pricing</a></li>
              <li><a href="#" className="hover:text-pink-300">About Us</a></li>
              <li><a href="#" className="hover:text-pink-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-purple-200 mb-2">Legal</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-pink-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-pink-300">Terms of Service</a></li>
              <li className="text-xs">No License – © 2025 SignalBuilds / Neuralic Team</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-purple-200 mb-2">Follow Us</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-pink-300">LinkedIn</a></li>
              <li><a href="#" className="hover:text-pink-300">X (Twitter)</a></li>
              <li><a href="#" className="hover:text-pink-300">GitHub</a></li>
            </ul>
          </div>
        </div>
        <p className="mt-8 text-center">© 2025 SignalBuilds / Neuralic Team</p>
      </footer>

      <style jsx>{`
        .neon-text {
          text-shadow: 0 0 5px #f0f, 0 0 10px #f0f, 0 0 20px #ff00ff;
        }
      `}</style>
    </div>
  );
}
