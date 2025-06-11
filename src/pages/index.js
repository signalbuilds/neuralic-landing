import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { motion } from "framer-motion";

const modules = [
  {
    name: "Neuralic Core",
    description:
      "The brain of the system. Executes reasoning, validates rules, and anchors every decision with explainable logic.",
  },
  {
    name: "Neuralic Trace",
    description:
      "Breadcrumbs for every verdict. Generates visual step-by-step decision trails with timestamped evidence.",
  },
  {
    name: "Neuralic Engine",
    description:
      "The automation powerhouse. Executes decisions in real-time, adapts to inputs, and integrates into live enterprise flows.",
  },
  {
    name: "Neuralic Guard",
    description:
      "The compliance sentinel. Enforces policy, validates outputs against law and regulation, and prevents unsafe conclusions.",
  },
  {
    name: "Neuralic Lens",
    description:
      "Your dashboard to clarity. Observe usage, detect anomalies, and gain operational insights into every Neuralic call.",
  },
  {
    name: "Neuralic Xplain",
    description:
      "The voice of the system. Converts logic and reasoning into human-friendly explanations so business users, auditors, and analysts can understand why a decision was made.",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-800 to-gray-900 text-white font-sans px-6 py-12">
      <header className="text-center mb-12">
        <motion.h1
          className="text-5xl font-bold tracking-wide neon-text drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Neuralic: Illuminate the Logic of Machines
        </motion.h1>
        <motion.p
          className="text-xl mt-4 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Welcome to the future of explainable, ethical AI. Neuralic is a modular
          intelligence framework built for organizations that demand transparency,
          accountability, and absolute control over their AI decisions. Engineered
          with precision and wrapped in a synthwave aesthetic, Neuralic fuses
          nostalgic digital rebellion with cutting-edge reasoning systems.
        </motion.p>
        <motion.p
          className="text-lg mt-6 max-w-3xl mx-auto text-purple-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          From decision traceability to audit integrity, Neuralic empowers you to
          not just use AI — but understand it.
        </motion.p>
      </header>

      <motion.div
        className="max-w-3xl mx-auto text-center text-purple-200 mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold neon-text mb-4">Why Neuralic?</h2>
        <p className="mb-4">
          In a world where AI systems grow more complex and opaque, Neuralic brings the light.
        </p>
        <p className="mb-4">
          Born out of a need for <strong>auditability</strong>, <strong>modular governance</strong>, and
          <strong>enterprise-scale explainability</strong>, Neuralic is your command center for intelligent decision systems.
          Every module is pluggable. Every outcome is traceable. Every action is accountable.
        </p>
        <p>This is not just governance. This is AI with a soul.</p>
      </motion.div>

      <motion.section
        className="grid gap-6 sm:grid-cols-2 md:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        transition={{ staggerChildren: 0.1 }}
      >
        {modules.map((module, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <Card>
              <CardContent>
                <h2 className="text-2xl font-bold text-pink-300 neon-text mb-2">
                  {module.name}
                </h2>
                <p className="text-sm text-purple-200 leading-relaxed">
                  {module.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.section>

      <motion.div
        className="max-w-2xl mx-auto mt-16 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold neon-text mb-4">
          Every machine makes decisions. Neuralic Xplain tells you why.
        </h2>
        <p className="text-purple-200">
          With built-in natural language explainability, Neuralic Xplain bridges
          the gap between technical output and human understanding. Whether
          you’re a compliance officer, data analyst, or executive, Xplain ensures
          that no reasoning remains a black box.
        </p>
      </motion.div>

      <motion.div
        className="max-w-3xl mx-auto mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h3 className="text-2xl font-bold neon-text mb-4 text-center">
          Neuralic Trace – Every Decision Has a Trail
        </h3>
        <ul className="list-disc list-inside space-y-2 text-purple-200">
          <li>Step-by-step reasoning chain – See how inputs transformed into outputs.</li>
          <li>Timestamps for every logic step – Audit events in sequence.</li>
          <li>Clickable graph views – Zoom into decision nodes, highlight rule execution paths.</li>
          <li>Immutable trail storage – Tamper-proof records to support audits and compliance.</li>
        </ul>
      </motion.div>

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