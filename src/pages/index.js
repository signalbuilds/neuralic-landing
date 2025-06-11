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

      <footer className="mt-24 text-center text-sm text-purple-400">
        © {new Date().getFullYear()} Neuralic by SignalBuilds. Crafted for explainable AI.
      </footer>

      <style jsx>{`
        .neon-text {
          text-shadow: 0 0 5px #f0f, 0 0 10px #f0f, 0 0 20px #ff00ff;
        }
      `}</style>
    </div>
  );
}